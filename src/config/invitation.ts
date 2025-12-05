export type MapLinks = {
  naver?: string;
  kakao?: string;
  google?: string;
  apple?: string;
};

export type Account = {
  bank: string;
  name: string;
  number: string;
  note?: string;
};

export type GalleryItem = {
  src: string;
  alt: string;
};

export type InvitationConfig = {
  seo: {
    title: string;
    description: string;
    coverImage?: string;
  };
  couple: {
    groomName: string;
    brideName: string;
    tagline: string;
    date: string;
    time: string;
    lunar?: string;
    venue: string;
    address: string;
    mapLinks?: MapLinks;
  };
  schedule: {
    title: string;
    items: { label: string; value: string; helper?: string }[];
  };
  accounts: { label: string; items: Account[] }[];
  gallery: GalleryItem[];
  actions?: {
    rsvpLink?: string;
    calendarLink?: string;
  };
};

const invitation: InvitationConfig = {
  seo: {
    title: "예찬 & 다원의 초대",
    description: "2026년 3월 28일, 평생을 함께할 소중한 날에 초대합니다.",
    coverImage: "/invite2026/back.jpeg",
  },
  couple: {
    groomName: "이예찬",
    brideName: "정다원",
    tagline: "우리의 시작에 따뜻한 발걸음을 더해주세요.",
    date: "2026.03.28 (토)",
    time: "오후 1시 10분",
    venue: "SG웨딩컨벤션 라베아툼홀",
    address: "경기 평택시 경기대로1376번길 22",
    mapLinks: {
      naver: "https://naver.me/FgHItfCz",
      kakao: "https://place.map.kakao.com/26023088",
    },
  },
  schedule: {
    title: "예식 안내",
    items: [
      {
        label: "일시",
        value: "2026년 3월 28일 토요일 오후 1시 10분",
        helper: "식 전 20분부터 입장 가능합니다.",
      },
      {
        label: "장소",
        value: "SG웨딩컨벤션 라베아툼홀",
        helper: "경기 평택시 경기대로1376번길 22",
      },
      {
        label: "드레스 코드",
        value: "Soft navy, Light beige",
        helper: "편안한 세미 포멀",
      },
      {
        label: "주차",
        value: "2시간 무료 주차",
        helper: "주차 확인 도장을 받아주세요.",
      },
    ],
  },
  accounts: [
    {
      label: "신랑측 마음 전하실 곳",
      items: [
        {
          bank: "국민은행",
          name: "이예찬",
          number: "98874255947",
          note: "예) 김OO",
        },
        {
          bank: "우리은행",
          name: "김민수",
          number: "1005-987-654321",
          note: "신랑 아버지",
        },
      ],
    },
    {
      label: "신부측 마음 전하실 곳",
      items: [
        {
          bank: "하나은행",
          name: "정다원",
          number: "3333-22-1234567",
          note: "예) 박OO",
        },
        {
          bank: "국민은행",
          name: "이정민",
          number: "066801-04-567890",
          note: "신부 어머니",
        },
      ],
    },
  ],
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1511288594014-8acb33db1c83?auto=format&fit=crop&w=800&q=80",
      alt: "둘만의 시간",
    },
    {
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
      alt: "함께 걷는 길",
    },
    {
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80&sat=-30",
      alt: "잔잔한 호수",
    },
    {
      src: "https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&w=800&q=80",
      alt: "새로운 시작",
    },
  ],
  actions: {
    rsvpLink: "https://forms.gle/example",
    calendarLink:
      "https://calendar.google.com/calendar/render?action=TEMPLATE&text=%EC%A7%80%ED%9B%88+%26+%EC%84%9C%EC%97%B0+%EA%B2%B0%ED%98%BC&details=%EC%84%9C%EC%9A%B8+%EB%93%9C%EB%A0%88%EC%8A%A4%EA%B0%80%EB%93%A0+5F+%EB%B8%94%EB%A3%B8%ED%99%80&location=%EC%84%9C%EC%9A%B8+%EA%B0%95%EB%82%A8%EA%B5%AC+%EC%84%A0%EB%A6%89%EB%A1%9C+820&dates=20250426T050000Z/20250426T080000Z",
  },
};

export default invitation;
