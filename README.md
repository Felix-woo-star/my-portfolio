# 성우연 포트폴리오

React, Next.js, TypeScript를 주로 사용하는 풀스택 개발자 성우연의 포트폴리오 웹사이트입니다.

## 🚀 기술 스택

- **Framework**: Next.js 15.5.2 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Font**: Geist (Google Fonts)

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── globals.css      # 전역 스타일
│   ├── layout.tsx       # 루트 레이아웃
│   └── page.tsx         # 메인 페이지
├── components/
│   ├── ui/              # shadcn/ui 컴포넌트
│   ├── navigation.tsx   # 네비게이션 바
│   ├── hero.tsx         # 히어로 섹션
│   ├── about.tsx        # 소개 섹션
│   ├── projects.tsx     # 프로젝트 섹션
│   ├── contact.tsx      # 연락처 섹션
│   └── footer.tsx       # 푸터
└── lib/
    └── utils.ts         # 유틸리티 함수
```

## 🛠 개발 환경 설정

### 필수 요구사항

- Node.js 18+ 또는 20+
- npm, yarn, 또는 pnpm

### 설치 및 실행

1. 저장소 클론
```bash
git clone https://github.com/Felix-woo-star/my-portfolio.git
cd my-portfolio
```

2. 의존성 설치
```bash
npm install
# 또는
yarn install
# 또는
pnpm install
```

3. 개발 서버 실행
```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
```

4. 브라우저에서 확인
[http://localhost:3000](http://localhost:3000)에서 결과를 확인할 수 있습니다.

## 📝 사용 가능한 스크립트

- `dev`: 개발 서버 실행
- `build`: 프로덕션 빌드
- `start`: 프로덕션 서버 실행
- `lint`: ESLint 실행

## 🎨 주요 기능

- **반응형 디자인**: 모바일, 태블릿, 데스크탑 모든 기기 지원
- **다크/라이트 모드**: 자동 테마 지원
- **스무스 스크롤링**: 부드러운 페이지 내비게이션
- **SEO 최적화**: 메타데이터 및 Open Graph 설정
- **컴포넌트 기반**: 재사용 가능한 UI 컴포넌트
- **타입 안전성**: TypeScript 완전 지원

## 🚀 배포

### Vercel 배포 (권장)

1. [Vercel](https://vercel.com)에 계정 생성
2. GitHub 저장소 연결
3. 자동 배포 설정 완료

### 기타 배포 플랫폼

- **Netlify**: `npm run build` 후 `out` 폴더 업로드
- **GitHub Pages**: GitHub Actions를 통한 자동 배포
- **AWS S3 + CloudFront**: 정적 사이트 호스팅

## 📞 연락처

- **Email**: sungwoo.youn@example.com
- **GitHub**: [Felix-woo-star](https://github.com/Felix-woo-star)
- **LinkedIn**: 성우연

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.

---

**Made with ❤️ using Next.js & shadcn/ui**