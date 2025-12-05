# TOSS 스타일 모바일 청첩장 (Vite + React)

모바일 원페이지 청첩장 템플릿입니다. `src/config/invitation.ts`만 수정하면 GitHub Pages에 바로 배포할 수 있습니다.

## 실행

```bash
npm install
npm run dev
```

## 설정 편집

`src/config/invitation.ts`에서 데이터를 교체하세요.

- `seo`: 타이틀/설명/대표 이미지
- `couple`: 신랑/신부 이름, 일정, 장소, 지도 링크
- `schedule`: 예식/주차/드레스 코드 등 안내
- `accounts`: 마음 전하실 곳 (은행/계좌/예금주)
- `gallery`: 갤러리 이미지(원격 URL 또는 `public/` 내부 경로)
- `actions`: RSVP 링크, 캘린더 추가 링크

## 빌드

```bash
npm run build
```

`dist/`가 생성됩니다.

## GitHub Pages 배포

1) 프로젝트 루트에 푸시  
2) Pages 설정: `Settings > Pages > Deploy from a branch > branch: main, folder: /dist`  
3) 필요 시 `VITE_BASE_PATH` 환경변수로 베이스 경로 지정 (기본 `/`)

로컬 미리보기: `npm run preview`
