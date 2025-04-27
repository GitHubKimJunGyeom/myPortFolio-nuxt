---
title: 직접 만든 블로그로 기록하는 개발 인사이트
date: 2025.04
isindividual: 1인 개발 프로젝트
description: 프론트, 백엔드, 인프라를 넘나드는 다양한 개발 경험을 바탕으로, 직접 제작한 한국어·일본어 지원 블로그에 내 경험과 인사이트를 체계적으로 기록하고, 이를 통해 성장의 흔적을 쌓아가고 있습니다. 개발 지식의 공유와 더 나은 개발자로서의 성장을 지향합니다.
sub_description: [
  "직접 제작한 한국어·일본어 지원 블로그에 내 경험과 인사이트를 체계적으로 기록",
  "블로그인 만큼 검색 엔진 최적화와 구글 서치 콘솔을 이용하여 SEO의 최적화의 고도화",
  "공식 NuxtUI 컴포넌트를 활용, 노션과 같은 Saas의 API를 연동하여 데이터 베이스처럼 사용."
]
tags:
  Nuxt3, Vercel, Tailwindcss, TypeScript, JavaScript, Notion API, Notion Client Renderer
image: https://tokyokimportfolio.vercel.app/ja/static/assets/img/jpg/backgroud.jpg
readingTime: "5"
url: https://tokyokimportfolio.vercel.app
---

# 📌 Summary
- 프론트, 백엔드, 인프라를 넘나드는 다양한 개발 경험을 바탕으로, 직접 제작한 한국어·일본어 두 가지 언어를 지원하는 블로그에 내 경험과 인사이트를 체계적으로 기록하고, 이를 통해 성장의 흔적을 쌓아가고 있다. 
- 개발 지식의 공유와 더 나은 개발자로서의 성장을 지향하는 것이 이 블로그의 목표이다.
> - 주요 기능: 개발 인사이트, 업무 인사이트, IT 용어 정리, 유용 웹 포스팅의 클리핑 리스트

# 🤔 Background
- 첫 개발자의 시작을 PHP로 하였으나 대다수의 안건에서 프론트 엔드 개발자, 백엔드 개발자의 구분이 희미해지고 업무상 프론트, 백엔드, 인프라 구분없이 업무를 담당하는 경우가 많아 업무와 관련된 개발지식을 매번 검색하거나 단순한 기록하는 것에 한계를 느껴 나만의 블로그를 제작하여 남기기로 하였다. 
- 블로그는 네이버 블로그, 티스토리 등 여러 플랫폼을 이용하여 제작해도 상관 없었으나 본업이 웹 개발자인 이상 직접 제작하는 것이 디자인이나 데이터 관리 측면에서 더 편할 것이라고 생각했다.

# 🔍 Meaning
- 제작 과정에서 여러 기능 추가와 유지보수가 필요하다는 것을 느꼈다. 
- 예를 들어 댓글과 같은 기능은 Notion API의 한계가 존재했으며, 좋아요와 같은 기능은 별도의 서버를 구축하여 데이터베이스에서 관리하는 것이 훨씬 편하다는 결론에 도달했다.
- 별도의 서버를 구축한다면 여러 게시판을 추가하는 것이 어렵지 않기 때문에 자유게시판의 기능의 추가도 고려함으로서 단순히 포스팅 기능만을 제공하는 블로그가 아닌 커뮤니티 공간으로서 활용 또한 가능하다고 생각을 했다.
- 옛날부터 많은 한국인들이 일본에는 왜 오고 싶나요? 라는 질문에 "한국과 일본을 잇는 다리 역할을 하고 싶어 일본에서 일하고 싶습니다"가 대답이던 시절이 있었다.
- 나또한 그런 대답을 한 적이 있었고 만약 이 블로그가 내 생각을 넘어 크게 성장한다면 그 질문에 대한 대답과 대답에 대한 결과물이 될 것이라 생각한다.

# 🔨 Technology Stack(s)
Nuxt3, Vercel, Tailwindcss, TypeScript, JavaScript, Notion API, Notion Client Renderer

# ⚙️ Setup & Usage
```
# Install JavaScript Packages
pnpm install

# Run Frontend Server
pnpm run dev
```