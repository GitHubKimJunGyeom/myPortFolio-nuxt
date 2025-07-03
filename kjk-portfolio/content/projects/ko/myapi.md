---
title: 포트폴리오용 백엔드 환경 구축 및 관리 사이트
date: 2025.06
isindividual: 1인 개발 프로젝트
description:  각종 API, DB 연동 및 analytics을 활용한 모니터링, CMS 사이트로서의 기능을 담당
sub_description: [
  "포트폴리오 제작에 따른 백엔드 환경의 구축이 필요하여 제작",
  "AWS EC2, Github action을 이용한 실제 환경, 디플로이 환경 구축",
  "ROUTE53을 이용한 도메인 관리",
  "supabase를 이용한 데이터베이스 구축, 멀티 데이터 베이스 대응 및 멀티 마이그레이션",
  "inertia.js를 이용한 프론트엔드와 백엔드를 통합하여 사이트 제작"
]
tags:
  Laravel12 Starter Kit, Vanilla Vue3, Tailwindcss, TypeScript, AWS EC2, AWS ROUTE53, Supabase, Inertia.js, Docker, Github Action
image: https://myapiec2.click/build/assets/MyApiAguimanChan-mcBc2mGp.png
readingTime: "5"
url: https://myapiec2.click/
---

# 📌 Summary
- 포트폴리오 제작에 따른 백엔드 환경의 구축이 필요하여 제작한 사이트로, 각종 API, DB 연동 및 CMS 사이트로서의 기능을 담당한다.
- 개발 환경은 AWS EC2를 이용하여 실제 운영 환경과 동일하게 구축하였으며, Github action을 이용하여 디플로이 환경을 구축하였다.
- 도메인은 AWS ROUTE53을 이용하여 관리하며, 데이터베이스는 supabase를 이용하여 구축하였다.
- 멀티 데이터 베이스 대응 및 멀티 마이그레이션을 지원하며, Inertia.js를 이용하여 프론트엔드와 백엔드를 통합하여 사이트를 제작하였다.

# 🤔 Background
- 포트폴리오 제작에 따른 백엔드 환경의 구축이 필요하여 제작하게 되었고 어떤 언어로 개발할지, 
어떤 프레임워크를 사용할 지 고민했지만 제일 경험이 많은 언어인 PHP와 Laravel로 제작한 포트폴리오가 없었기 때문에 포트폴리오용 백엔드 구축이지만 그 자신 자체가 PHP 포트폴리오가 되는 그런 제작물이다.
- Laravel12부터 각종 프론트 엔드 프레임워크를 지원하고 통합 개발로서 Inertia.js를 본격적으로 지원하는것을 확인하여 이 사이트도 그렇게 제작을 하였다. 

# 🔍 Meaning
- 라라벨을 꽤 오랜기간 개발을 해왔지만 업무에서도 개인개발로도 멀티 데이터 베이스 대응 및 멀티 마이그레이션이 대응되도록 개발을 한 것은 처음이어서 의미가 있는 작업이었다. 
- 로컬 환경에서의 개발의 경우 Docker를 이용하여 개발 환경을 구축하였으며, 실제 운영 환경은 따로 도커를 사용하지 않고 EC2를 이용하여 배포하였는데 
그 이유는 EC2에서 도커를 사용하면 1인개발의 기준으로 오히려 관리가 복잡해지고, 도커를 사용하지 않고도 충분히 관리가 가능하기 때문이다.
- API로서의 역할이 가장 중요한 프로젝트이지만 향후 포트폴리오가 늘어남에 따라 관리가 필요해질것을 염려하여 사이트형태로 제작한 것이 적절한 판단이었다고 생각한다. 
또한 앞으로 게임 관련 CMS 사이트 제작으로서 비즈니스 도메인 전문성을 특화하려고 생각중인데 그 과정에 있어서 이 프로젝트는 내게 큰 도움을 줄 것이라고 생각한다.

# 🔨 Technology Stack(s)
Laravel12, Vue3, Tailwindcss, TypeScript, AWS EC2, AWS ROUTE53, Inertia.js

# ⚙️ Setup & Usage
```
# Install JavaScript Packages
npm install

# Run Frontend Server
npm run dev

# Run Backend Server
docker compose up -d
```