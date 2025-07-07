---
title: 自作ブログで記録する開発インサイト
date: 2025.04
isindividual: 一人開発プロジェクト
description: Notion APIと連携して開発した個人ブログ
sub_description: [
  "自作したブログに自分の経験とインサイトを体系的に記録",
  "検索エンジン最適化（SEO）とGoogleサーチコンソールを活用してSEO最適化を高度化",
  "Notion APIを連携し、データベースのように使用"
]
tags:
  Nuxt3, Vercel, Tailwindcss, TypeScript, JavaScript, Notion API, Notion Client Renderer
image: https://www.log-and-list.com/ja/static/assets/img/png/LogAndList.png
readingTime: "5"
url: https://www.log-and-list.com
---

# 📌 Summary
- フロントエンド、バックエンド、インフラを横断する多様な開発経験を活かし、韓国語と日本語の2言語に対応した自作ブログに、自身の経験とインサイトを体系的に記録し、成長の足跡を積み重ねている。
- 開発知識の共有と、より良い開発者としての成長を目指すことが、このブログの目標である。
> - 主な機能: 開発インサイト、業務インサイト、IT用語整理、役立つWebポストのクリッピングリスト

# 🤔 Background
- 最初はPHPから開発者としてのキャリアをスタートしたが、多くの案件においてフロントエンドとバックエンドの区別が曖昧になり、業務上フロント・バックエンド・インフラを問わず担当する機会が多くなった。そのため、都度検索や単純な記録だけでは限界を感じ、自分専用のブログを制作して知識を体系的にまとめることにした。
- ブログはNAVERブログやTistoryなどのプラットフォームでも作成可能だったが、本業がWeb開発者である以上、自作するほうがデザインやデータ管理の面で自由度が高く、便利だと考えた。

# 🔍 Meaning
- 制作過程で、さまざまな機能追加やメンテナンスの必要性を強く感じた。
- 例えばコメント機能については、Notion APIの制約に直面した。また、「いいね」機能の実装については、別途サーバーを構築しデータベースで管理する方がはるかに便利であるという結論に至った。
- 別途サーバーを用意すれば、複数の掲示板機能を追加することも容易なため、単なる投稿機能だけでなく、コミュニティスペースとしての活用も視野に入れることができると考えた。
- 昔、多くの韓国人が「なぜ日本に行きたいのか？」という質問に対して、「韓国と日本をつなぐ架け橋になりたいから」と答える時代があった。
- 自身もそのように答えたことがあり、このブログが自分の想像を超えて大きく成長すれば、その答えに対する一つの結果となるだろうと考えている。

# 🔨 Technology Stack(s)
Nuxt3, Vercel, Tailwindcss, TypeScript, JavaScript, Notion API, Notion Client Renderer

# ⚙️ Setup & Usage
```
# Install JavaScript Packages
pnpm install

# Run Frontend Server
pnpm run dev
```