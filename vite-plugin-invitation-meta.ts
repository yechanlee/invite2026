import type { Plugin } from "vite";

type SEOConfig = {
  title: string;
  description: string;
  coverImage?: string;
};

/**
 * 빌드 시 invitation.ts의 SEO 설정을 읽어서 HTML에 메타 태그를 주입하는 플러그인
 */
export function invitationMetaPlugin(
  seoConfig: SEOConfig,
  baseUrl?: string
): Plugin {
  return {
    name: "invitation-meta",
    transformIndexHtml(html) {
      const siteUrl =
        baseUrl ||
        process.env.VITE_BASE_URL ||
        "https://yellongs.github.io/lee.github.io/";

      // 이미지 URL이 상대 경로인 경우 절대 경로로 변환
      let imageUrl = seoConfig.coverImage || "";
      if (
        imageUrl &&
        !imageUrl.startsWith("http") &&
        !imageUrl.startsWith("//")
      ) {
        imageUrl = new URL(imageUrl, siteUrl).href;
      }

      // HTML 이스케이프 헬퍼
      const escapeHtml = (str: string) => {
        return str
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#039;");
      };

      const metaTags = `
    <!-- 기본 SEO -->
    <title>${escapeHtml(seoConfig.title)}</title>
    <meta name="description" content="${escapeHtml(seoConfig.description)}" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${escapeHtml(seoConfig.title)}" />
    <meta property="og:description" content="${escapeHtml(
      seoConfig.description
    )}" />
    ${
      imageUrl
        ? `<meta property="og:image" content="${escapeHtml(imageUrl)}" />`
        : ""
    }
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:url" content="${escapeHtml(siteUrl)}" />
    <meta property="og:site_name" content="${escapeHtml(seoConfig.title)}" />
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(seoConfig.title)}" />
    <meta name="twitter:description" content="${escapeHtml(
      seoConfig.description
    )}" />
    ${
      imageUrl
        ? `<meta name="twitter:image" content="${escapeHtml(imageUrl)}" />`
        : ""
    }
    
    <!-- 카카오톡 링크 미리보기 -->
`;

      // </head> 태그 앞에 메타 태그 삽입
      return html.replace("</head>", `${metaTags}  </head>`);
    },
  };
}
