---
title: ポートフォリオ用バックエンド環境構築・管理サイト
date: 2025.06
isindividual: 一人開発プロジェクト
description: 各種API・データベース連携およびAnalyticsを活用したモニタリング、CMSサイトとしての機能を担う
sub_description: [
  "ポートフォリオ制作に伴いバックエンド環境の構築が必要となり開発",
  "AWS EC2とGithub Actionsを利用して本番およびデプロイ環境を構築",
  "ROUTE53を利用したドメイン管理",
  "Supabaseを用いたデータベース構築、マルチデータベース対応およびマルチマイグレーション対応",
  "Inertia.jsを活用してフロントエンドとバックエンドを統合したサイトを制作"
]
tags:
  Laravel12 Starter Kit, Vanilla Vue3, Tailwindcss, TypeScript, AWS EC2, AWS ROUTE53, Supabase, Inertia.js, Docker, Github Action
image: https://myapiec2.click/build/assets/MyApiAguimanChan-mcBc2mGp.png
readingTime: "5"
url: https://myapiec2.click/
---

# 📌 Summary
- ポートフォリオ制作に伴い、バックエンド環境の構築が必要となり開発したサイトであり、各種API・データベース連携およびCMSサイトとしての機能を担う。
- 開発環境はAWS EC2を利用して本番環境と同様に構築し、Github Actionsを利用してデプロイ環境も構築した。
- ドメインはAWS ROUTE53を用いて管理し、データベースはSupabaseを利用して構築。
- マルチデータベース対応およびマルチマイグレーションをサポートし、Inertia.jsを活用してフロントエンドとバックエンドを統合したサイトを制作。

# 🤔 Background
- ポートフォリオ制作にあたりバックエンド環境の構築が必要だったため開発を開始し、使用する言語やフレームワークについて検討した結果、最も経験のあるPHPおよびLaravelを用いることに決めた。これまでLaravelを用いたポートフォリオがなかったため、このプロジェクト自体がPHPポートフォリオとなることを意識して構築。
- Laravel12から各種フロントエンドフレームワークへの対応が強化され、Inertia.jsとの統合開発が本格的にサポートされることを確認し、本サイトでもそれを活用して制作。

# 🔍 Meaning
- Laravelを長年扱ってきたが、業務でも個人開発でもマルチデータベース対応およびマルチマイグレーションに対応したのは今回が初めてであり、非常に有意義な作業だった。
- ローカル環境ではDockerを使用して開発環境を構築したが、本番環境ではDockerを使わずにEC2へ直接デプロイ。理由としては、1人開発の観点からはEC2上でDockerを使うことでかえって管理が複雑になるため、Dockerを使わなくても十分に管理可能と判断したため。
- APIとしての役割が最も重要なプロジェクトであるが、将来的にポートフォリオが増加することで管理が必要になると考え、Webサイトとして構築したことは適切な判断だったと考える。
また、今後はゲーム関連のCMSサイト制作を通じてビジネスドメインの専門性を高めることを目指しており、その過程においてこのプロジェクトは大きな助けになると確信している。

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