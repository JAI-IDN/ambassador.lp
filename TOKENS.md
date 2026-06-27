# EduMission LP — Design Tokens (正本 / Single Source of Truth)

## 0. 狙いの言語化（推測ではなく確定事項）

提供デザイン画像と既存コンセプトから確定している前提を言語化する。

| 観点 | 内容 |
|---|---|
| **業種** | 海外人材向け 日本語学習ポイントプラットフォーム（EdTech / Eduhon 運営） |
| **目的（主KPI）** | 無料会員登録のリード獲得。主CTA「無料で始める」へのクリック最大化 |
| **想定ユーザー** | 日本就労を目指す海外の若年層。スキマ時間にスマホで利用 |
| **提供価値** | 「お金」ではなく「行動」を価値に変える。コミュニティ活動→ポイント→Eduhonで学習 |
| **雰囲気** | 信頼・誠実・前向き。クリーンで明るいブルー基調。親しみやすく非威圧的 |
| **トーン** | 余白広め、角丸、ソフトシャドウ。装飾過多を避けた素直な情報設計 |

---

## 1. カラートークン（hex 正本）

| Token | Hex | 用途 |
|---|---|---|
| `--c-bg` | `#ffffff` | ベース背景 |
| `--c-bg-soft` | `#f4f7fc` | セクション交互背景 |
| `--c-bg-panel` | `#eef3fb` | パネル/カード台 |
| `--c-ink` | `#1f2a44` | 見出し・主要テキスト |
| `--c-ink-soft` | `#4a5670` | 本文 |
| `--c-muted` | `#7a87a3` | 注記・補助 |
| `--c-line` | `#e6ecf6` | ボーダー/区切り |
| `--c-accent` | `#2f6bff` | アクセント主 / リンク |
| `--c-accent-deep` | `#2454d6` | アクセント濃 / ホバー |
| `--c-accent-cyan` | `#38bdf8` | グラデ起点 |
| `--c-point` | `#f5a623` | ポイント/コイン主 |
| `--c-point-hi` | `#ffd34d` | コイン光沢 |
| `--c-dark` | `#15213f` | フッター/ヒーロー深部 |
| `--c-pink` | `#fdeef2` | 活動カード(SNS) |
| `--c-green` | `#eaf7f0` | 活動カード(記事) |
| `--c-purple` | `#f0eefb` | 活動カード(動画) |
| `--c-orange` | `#fdf3e6` | 活動カード(サポート) |
| `--grad-accent` | `linear-gradient(90deg,#38bdf8,#3b82f6,#2f6bff)` | CTAボタン/下線 |
| `--grad-hero` | `radial-gradient(120% 120% at 80% 0%, #1a2c63, #243a7a, #3a5bb0, #cdddf6)` | ヒーロー背景 |

コントラスト: `--c-ink` on `--c-bg` ≈ 12.8:1、`--c-ink-soft` on `--c-bg` ≈ 7.6:1（いずれもWCAG AA/AAA本文基準クリア）。

---

## 2. タイポグラフィ

| 役割 | font-family | 用途 |
|---|---|---|
| 見出し/本文 | `"Noto Sans JP"` (GoogleFonts) | 日本語全般 |
| 数字/Latin強調 | `"Inter"` (GoogleFonts) | 「5分」等の数値・英字 |

フォールバック: `system-ui, -apple-system, "Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif`

| Token | size (clamp) | line-height | letter-spacing | weight |
|---|---|---|---|---|
| `--fs-h1` | `clamp(1.7rem, 1.2rem + 2.2vw, 2.45rem)` | 1.4 | 0.04em | 900 |
| `--fs-h2` | `clamp(1.4rem, 1.05rem + 1.5vw, 1.9rem)` | 1.5 | 0.03em | 900 |
| `--fs-h3` | `clamp(1rem, 0.95rem + 0.3vw, 1.15rem)` | 1.6 | 0.02em | 700 |
| `--fs-lead` | `clamp(0.92rem, 0.88rem + 0.2vw, 1rem)` | 1.9 | 0.01em | 500 |
| `--fs-body` | `clamp(0.88rem, 0.85rem + 0.2vw, 0.95rem)` | 1.8 | 0.01em | 400 |
| `--fs-small` | `0.8rem` | 1.7 | 0.02em | 500 |

---

## 3. スペーシングスケール（8px ベース）

| Token | 値 |
|---|---|
| `--sp-1` | 4px |
| `--sp-2` | 8px |
| `--sp-3` | 12px |
| `--sp-4` | 16px |
| `--sp-5` | 24px |
| `--sp-6` | 32px |
| `--sp-7` | 48px |
| `--sp-8` | 64px |
| `--sp-9` | 96px |
| `--section-y` | `clamp(48px, 6vw, 96px)` |
| `--container` | `min(1040px, 92vw)` |

---

## 4. 角丸・影

| Token | 値 |
|---|---|
| `--r-sm` | 10px |
| `--r-md` | 16px |
| `--r-lg` | 24px |
| `--r-pill` | 999px |
| `--shadow` | `0 10px 30px rgba(36,84,214,.08)` |
| `--shadow-soft` | `0 6px 18px rgba(31,42,68,.06)` |
| `--shadow-cta` | `0 12px 28px rgba(47,107,255,.40)` |

---

## 5. モーション言語

| Token | 値 | 用途 |
|---|---|---|
| `--ease` | `cubic-bezier(.16,1,.3,1)` | 標準イージング |
| `--dur-fast` | 150ms | ホバー |
| `--dur-base` | 300ms | 開閉/汎用 |
| `--dur-slow` | 600ms | 出現 |

- **出現 (scroll-in)**: `[data-fade]` を IntersectionObserver で一度だけ `opacity:0→1 / translateY(24px)→0`、`--dur-slow`、`--ease`。順次は `transition-delay` を段階付与。
- **ホバー**: ボタン/カードは `translateY(-2〜-4px)` + 影リフト、`--dur-fast`。
- **アコーディオン**: `grid-template-rows: 0fr → 1fr`、`--dur-base`。
- **ナビ開閉**: `aria-expanded` 連動、フォーカストラップ。
- **マグネット**: CTAボタンを `requestAnimationFrame + lerp` で自前追従（ポインタ環境のみ）。
- **`prefers-reduced-motion: reduce`**: 全アニメ/トランジションを無効化、即時表示。

---

## 6. セクション構成と順序

| # | セクション | 役割 |
|---|---|---|
| 1 | Header（sticky/nav toggle） | ロゴ・主CTA・メニュー |
| 2 | Hero | 価値提案見出し + 主CTA + ログイン |
| 3 | Process strip | 5ステップ俯瞰（スマホ→…→日本で働く） |
| 4 | Problems（お悩み） | 3つの課題提示 |
| 5 | How it works（仕組み） | 5ステップのフロー詳細 |
| 6 | Activities（活動例） | 4カテゴリのカード |
| 7 | Points usage | スマホUI + ポイント活用 |
| 8 | FAQ（よくある質問） | アコーディオン（信頼補強・離脱抑制） |
| 9 | CTA | 最終後押し + 主CTA |
| 10 | Footer | ブランド・規約・著作権 |

> アイコンは全て**インラインSVG**（絵文字不使用）。外部依存は GoogleFonts の `<link>` のみ。
