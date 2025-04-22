# 한터 글로벌 프론트엔드 코딩 테스트

**배포 링크**: https://ht-test-ws.vercel.app/

---

## **구현 내용**
| **번호** | **기능명** | **설명** | 구현 |
| --- | --- | --- | --- |
| 1 | 카테고리 탭 이동 | 상단 탭 클릭 또는 좌우 슬라이드로 카테고리 전환 | ✅탭 최소 3개 이상, 터치 슬라이드 가능 |
| 2 | 콘텐츠 리스트 출력 | 선택된 카테고리의 콘텐츠 리스트 렌더링 | ✅썸네일, 제목 포함 |
| 3 | 무한스크롤 | 콘텐츠 하단 도달 시 다음 페이지 자동 로딩 | ✅ IntersectionObserver 기반 구현 |
| 4 | 배너 슬라이드 | 슬라이드형 배너, 외부 링크 이동 가능 | ✅최소 3개, 무한 루프, 외부 링크 연결 |
| 5 | 상단 이동 버튼 | 리스트 최하단에서 상단으로 스크롤 이동 | ✅상단으로 스크롤 이동 |

---

## **기술 스택**

| **구분** | **기술** | **버전** | **설명** |
| --- | --- | --- | --- |
| 프레임워크 | React | 19 | 컴포넌트 기반의 UI 라이브러리 |
| 프레임워크 | Next.js | 15 | App Router 사용 |
| 언어 | TypeScript | 5 | 정적 타입 지원 |
| 스타일링 | SCSS | 1 | 중첩, 변수, Mixin 등을 지원하는 CSS 전처리기 |
| 상태관리 | Zustand | 5 | 가벼운 상태 관리 라이브러리 |
| UI | Swiper | 11 | 터치 기반의 슬라이드 컴포넌트 |
| 도구 | pnpm | 10 | 고속 패키지 매니저 |
| 도구 | Biome | 1 | Lint, Format, Type-check 통합 도구 |
| 도구 | Husky + lint-staged | 9 / 15 | Git hook 기반 자동 린트 및 커밋 전 코드 검사 |

---

## **유저 플로우**

![image](https://github.com/user-attachments/assets/76015074-8b84-401d-aa53-d7f2c3c1a713)


---

## **컴포넌트 설계**

### **요약**

| **컴포넌트** | **설명** |
| --- | --- |
| NavBar | 카테고리 탭 / 슬라이드 UI |
| ContentList | 콘텐츠 리스트, 무한스크롤 지원 |
| Carousel | 배너 슬라이드 영역 |

---

## **디렉토리 구조**

```
/project-root
├── public/
├── src/
│   ├── app/                # Next.js 페이지 및 레이아웃
│   ├── components/         # UI 컴포넌트
│   ├── hooks/              # 커스텀 훅
│   ├── store/              # Zustand 전역 상태
│   ├── styles/             # 글로벌/모듈 SCSS
│   ├── mocks/              # 목업 데이터
├── .husky/                 # Git hook
├── biome.json              # Biome 설정
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## **설치 및 실행 방법**

```
# 1. 프로젝트 클론
git clone https://github.com/wonsik3686/ht-test.git
cd ht-test

# 2. 의존성 설치
pnpm install

# 3. 개발 서버 실행
pnpm dev

# 4. 접속
http://localhost:3000
```

**배포 링크**: https://ht-test-ws.vercel.app/

**GitHub 레포지토리**: https://github.com/wonsik3686/ht-test
