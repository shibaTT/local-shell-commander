## What is this

自宅にラズパイを導入したのでウキウキで作った、Linux 知らない人でも簡単にシェルコマンドを叩ける便利なサイトです

コマンド自体は自宅に特化したものです

家の外から接続させる予定はないので、localhost で運用する前提でセキュリティに関しては何もしてません

フォークすれば API の部分とデザインの部分をいい感じにあなたの環境用にいじれるかも！？知らんけど

## 起動

```sh
npm run dev
yarn dev
```

これでいい

自宅以外で使いたいなら package.json いじって Production ビルドでサーバー立てれるようにしてください

## 使用してるフレームワークとか

技術スタックと言うのかわかんねぇ〜

-   Next.js v14 (App Router)
-   Tailwind

## 実装についての雑記

ネットの海を漂っていたら [Execa](https://github.com/sindresorhus/execa) という child_process を楽にしてくれるパッケージ（モジュール）（ライブラリ）を見つけたので
これええやん！と思って採用しました

そもそも child_process ってなんやねんって状態なんですけど、child_process ってなんやねん

よくわかんないですが、Node.js のおかげでパソコン自体にシェルコマンド送れるのやばすぎん？

Web サイト作ってるだけなのに…………

あとは Tailwind は普通にネットサーフィンしてたらどのデザインテンプレートもバカみたいに Tailwind 使ってて気を悪くしたので採用しました
