# EduMission LP — Next.js

提供デザイン画像をフルスクラッチで再現した、Next.js (App Router) + Tailwind CSS のランディングページ。

## 開発

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 本番ビルド
npm run start    # 本番サーバ
```

## 構成

```
app/
  layout.tsx        # ルートレイアウト（フォント link / メタデータ）
  page.tsx          # LP本体（全セクション）
  globals.css       # Tailwind + カスタムユーティリティ / アニメーション
components/
  Header.tsx        # 固定ヘッダー + モバイルメニュー（client）
  Reveal.tsx        # スクロール出現アニメ（IntersectionObserver, client）
  icons.tsx         # 元デザインに合わせたカラフルなフラットSVGアイコン群
public/
  hero.svg          # ヒーロー：東京タワー夜景＋スマホを持つ人物
  sakura.svg        # CTAバンド：桜＋若者
reference/          # 旧・単一HTML版とデザイントークン（参考）
```

## 再現方針と制約

- アイコン・装飾は元デザインに合わせて **インラインSVG** で実装（カラフルなフラットアイコン）。
- ヒーロー／CTAの写真領域は **ベクターイラスト（SVG）** で再現。実写へ差し替える場合は
  `public/` に画像を置き、`app/page.tsx` の `src` を変更するだけ。
- レスポンシブは 375 / 768 / 1440px で検証済み（横スクロール・要素の重なり・見切れなし）。
  固定幅カードは `w-full`、絶対配置レイアウトは広い幅（`lg`）でのみ発動。

> 注: 本実装環境では AI 画像生成ツール（image_gen / codex）が利用できず、外部の画像
> ホストもegressポリシーで遮断されているため、写真は手書きSVGイラストで代替している。
