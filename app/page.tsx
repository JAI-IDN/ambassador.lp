import { Fragment } from "react";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import {
  ArrowRight, Phone, Clock, PCoin, GradCap, FlagJP,
  MoneyBag, ClockAlarm, Question,
  Stopwatch, PeopleChat, Coins, Book, Plane,
  Megaphone, Pencil, Play, ChatDots,
  Heart, BookMini, DocMini, PeopleMini, PCoinBig, Check, ChatBubble, Logo,
} from "@/components/icons";

const steps = [
  { icon: <Phone className="h-7 w-7" />, label: "スマホだけでOK" },
  { icon: <Clock className="h-7 w-7" />, label: "1日5分から" },
  { icon: <PCoin className="h-[52px] w-[52px]" />, label: "ポイントを獲得", plain: true },
  { icon: <GradCap className="h-7 w-7" />, label: "Eduhonで学ぶ" },
  { icon: <FlagJP className="h-7 w-7" />, label: "日本で働く未来へ" },
];

const problems = [
  { icon: <MoneyBag className="h-14 w-14" />, text: ["日本語学校の", "費用が高すぎる"] },
  { icon: <ClockAlarm className="h-14 w-14" />, text: ["働きながら通うのは", "時間がない"] },
  { icon: <Question className="h-14 w-14" />, text: ["日本へ行く方法が", "よく分からない"] },
];

const flow = [
  { icon: <Stopwatch className="h-10 w-10" />, label: "5分の時間" },
  { icon: <PeopleChat className="h-10 w-10" />, label: "コミュニティ活動" },
  { icon: <Coins className="h-10 w-10" />, label: "ポイント獲得" },
  { icon: <Book className="h-10 w-10" />, label: "Eduhonで学ぶ" },
  { icon: <Plane className="h-10 w-10" />, label: "日本へ" },
];

const activities = [
  { icon: <Megaphone className="h-12 w-12" />, bg: "bg-card-pink", title: "SNSシェア・拡散", desc: "投稿のシェアやリポストで多くの人に情報を届ける" },
  { icon: <Pencil className="h-12 w-12" />, bg: "bg-card-green", title: "記事作成・ブログ", desc: "ブログや体験談などの記事を書いて発信する" },
  { icon: <Play className="h-12 w-12" />, bg: "bg-card-purple", title: "動画制作・編集", desc: "ショート動画や切り抜き動画で魅力を伝える" },
  { icon: <ChatDots className="h-12 w-12" />, bg: "bg-card-orange", title: "コミュニティサポート", desc: "DM送信やアンケート協力など仲間をサポートする" },
];

const tiles = [
  { icon: <Heart className="h-6 w-6" />, label: "介護日本語" },
  { icon: <BookMini className="h-6 w-6" />, label: "JLPT対策" },
  { icon: <DocMini className="h-6 w-6" />, label: "特定技能対策" },
  { icon: <PeopleMini className="h-6 w-6" />, label: "面接対策" },
];

function Arrow() {
  return (
    <li aria-hidden className="hidden shrink-0 self-center text-[#b9c6e6] sm:block">
      <ArrowRight className="h-5 w-5" />
    </li>
  );
}

export default function Page() {
  return (
    <>
      <Header />
      <main id="top">
        {/* ===== Hero ===== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#eaf1fb] to-soft">
          {/* desktop full-bleed photo */}
          <div className="absolute right-0 top-0 hidden h-[600px] w-[57%] lg:block">
            <img src="/hero.svg" alt="" aria-hidden className="h-full w-full object-cover" />
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#eaf1fb] to-transparent" />
            {/* overlay badge */}
            <span className="absolute left-[10%] top-[28%] text-[1.05rem] font-bold leading-relaxed text-white [text-shadow:0_2px_14px_rgba(0,0,0,.6)]">
              スキマ時間で、<br />夢への一歩を
            </span>
            {/* floating cards */}
            <span className="animate-float absolute right-[6%] top-[16%] flex items-center gap-2.5 rounded-2xl bg-white/95 px-3.5 py-2.5 text-[0.78rem] font-bold text-ink shadow-[0_12px_30px_rgba(16,26,54,0.28)]">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-point-hi to-point font-num font-black text-white">P</span>
              +50 ポイント獲得！
            </span>
            <span className="animate-float absolute bottom-[16%] left-[2%] flex items-center gap-2.5 rounded-2xl bg-white/95 px-3.5 py-2.5 text-[0.78rem] font-bold text-ink shadow-[0_12px_30px_rgba(16,26,54,0.28)] [animation-delay:.6s]">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 text-white"><Check className="h-4 w-4" /></span>
              ミッション達成
            </span>
          </div>

          <div className="relative mx-auto grid max-w-[1140px] items-center gap-8 px-5 pb-12 pt-28 lg:min-h-[600px] lg:grid-cols-2 lg:px-8 lg:pt-32">
            <div className="max-w-[580px]">
              <Reveal as="div">
                <h1 className="hero-title text-ink">
                  今日の<span className="font-num text-[1.18em] text-brand">5分</span>が、<br />
                  日本で働く未来につながる。
                </h1>
              </Reveal>
              <Reveal as="p" delay={80} className="mt-6 max-w-[30ch] text-[0.95rem] font-medium leading-[1.9] text-ink-soft">
                スマホでできるコミュニティ活動に参加して、ポイントを貯めよう。そのポイントは、日本語学習プラットフォーム「Eduhon」で利用できます。
              </Reveal>
              <Reveal as="div" delay={160} className="mt-8 flex flex-wrap items-center gap-5">
                <a href="#start" className="btn-grad px-9 py-[18px] text-[1.05rem]">
                  無料で始める <ArrowRight className="h-[18px] w-[18px]" />
                </a>
                <a href="#start" className="text-sm font-semibold text-brand underline underline-offset-4 hover:text-brand-deep">
                  ログインはこちら
                </a>
              </Reveal>
            </div>

            {/* mobile banner */}
            <div className="overflow-hidden rounded-2xl shadow-card lg:hidden">
              <img src="/hero.svg" alt="東京タワーの夜景を背景にスマートフォンを持つ若者" className="h-56 w-full object-cover" />
            </div>
          </div>

          {/* process strip overlaps hero bottom */}
          <div className="relative z-10 mx-auto -mt-2 w-[min(940px,92vw)] px-1 pb-2 lg:-mt-12">
            <Reveal className="rounded-[22px] border border-white/70 bg-white/85 px-5 py-7 shadow-card backdrop-blur">
              <ul className="flex flex-wrap items-start justify-center gap-x-1 gap-y-5 sm:flex-nowrap sm:justify-between">
                {steps.map((s, i) => (
                  <Fragment key={s.label}>
                    <li className="flex w-[40%] flex-col items-center gap-2.5 text-center sm:w-auto sm:flex-1">
                      <span className="grid h-[52px] w-[52px] place-items-center">{s.icon}</span>
                      <span className="text-[0.8rem] font-bold text-ink">{s.label}</span>
                    </li>
                    {i < steps.length - 1 && <Arrow />}
                  </Fragment>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ===== Problems ===== */}
        <section id="problems" className="bg-white py-[clamp(56px,7vw,104px)]">
          <div className="mx-auto w-[min(1040px,92vw)]">
            <Reveal className="title-rule coral mb-12 text-center">
              <h2 className="section-title text-ink">
                こんな<span className="text-coral">お悩み</span>はありませんか？
              </h2>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-3">
              {problems.map((p, i) => (
                <Reveal key={i} delay={i * 90} className="w-full rounded-2xl border-[1.5px] border-line bg-white px-6 py-12 text-center shadow-soft transition hover:-translate-y-2 hover:shadow-card">
                  <div className="mx-auto mb-4 grid h-16 w-16 place-items-center">{p.icon}</div>
                  <p className="font-bold text-ink">
                    {p.text[0]}<br />{p.text[1]}
                  </p>
                </Reveal>
              ))}
            </div>
            <Reveal as="p" className="mt-12 text-center font-bold text-ink-soft">
              だから私たちは、「お金」ではなく「あなたの行動」を価値に変える仕組みをつくりました。
            </Reveal>
          </div>
        </section>

        {/* ===== How it works ===== */}
        <section id="how" className="bg-white pb-[clamp(40px,5vw,72px)]">
          <div className="mx-auto w-[min(1040px,92vw)]">
            <Reveal className="rounded-3xl bg-panel px-5 py-10 sm:px-10 sm:py-14">
              <div className="title-rule mb-12 text-center">
                <h2 className="section-title text-ink">
                  仕組みはとても<span className="text-brand">シンプル</span>
                </h2>
              </div>
              <ul className="flex flex-wrap items-start justify-center gap-x-1 gap-y-6">
                {flow.map((f, i) => (
                  <Fragment key={f.label}>
                    <li className="flex w-[28%] flex-col items-center gap-3 text-center sm:w-auto">
                      <span className="grid h-[78px] w-[78px] place-items-center rounded-full bg-white shadow-soft">{f.icon}</span>
                      <span className="text-[0.82rem] font-bold text-ink">{f.label}</span>
                    </li>
                    {i < flow.length - 1 && (
                      <li className="hidden shrink-0 self-center text-[#9db6ff] sm:block">
                        <ArrowRight className="h-5 w-5" />
                      </li>
                    )}
                  </Fragment>
                ))}
              </ul>
              <p className="mt-12 text-center font-medium text-ink-soft">
                SNSのシェア、記事作成、情報発信、コミュニティへの小さな貢献など、さまざまな活動が、あなたの学びを支えるポイントになります。
              </p>
              <p className="mt-3 text-center text-[0.8rem] text-muted">※ポイントの詳細・獲得条件は登録後にご案内します。</p>
            </Reveal>
          </div>
        </section>

        {/* ===== Activities ===== */}
        <section id="activities" className="bg-white py-[clamp(56px,7vw,104px)]">
          <div className="mx-auto w-[min(1040px,92vw)]">
            <Reveal className="title-rule mb-12 text-center">
              <h2 className="section-title text-ink">
                例えば、<span className="text-brand">こんな活動</span>があります
              </h2>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {activities.map((a, i) => (
                <Reveal key={i} delay={i * 80} className={`w-full rounded-2xl ${a.bg} px-6 py-8 text-center shadow-soft transition hover:-translate-y-2`}>
                  <div className="mx-auto mb-4 grid h-14 w-14 place-items-center">{a.icon}</div>
                  <h3 className="mb-3 text-[1.05rem] font-bold text-ink">{a.title}</h3>
                  <p className="text-[0.8rem] text-ink-soft">{a.desc}</p>
                </Reveal>
              ))}
            </div>
            <Reveal as="p" className="mt-12 text-center font-bold text-ink-soft">その他にも、さまざまなミッションをご用意しています。</Reveal>
            <Reveal as="p" className="mt-1.5 text-center text-[0.8rem] text-muted">※内容は時期によって変動します。</Reveal>
          </div>
        </section>

        {/* ===== Points usage ===== */}
        <section className="bg-white pb-[clamp(56px,7vw,104px)]">
          <div className="mx-auto w-[min(1040px,92vw)]">
            <Reveal className="grid items-center gap-8 overflow-hidden rounded-3xl bg-gradient-to-br from-[#eef4ff] to-[#f3effe] px-6 py-10 sm:px-10 lg:grid-cols-[210px_1fr_180px]">
              {/* phone */}
              <div className="mx-auto w-[196px] animate-float rounded-[30px] bg-dark p-3 pb-4 shadow-[0_24px_50px_rgba(16,26,54,0.34)]" aria-hidden>
                <div className="mx-auto mb-3 h-[5px] w-[54px] rounded bg-[#44506e]" />
                <div className="mb-3 flex items-center justify-center gap-1.5 text-sm font-bold text-white">
                  <BookMini className="h-[18px] w-[18px]" /> Eduhon
                </div>
                <div className="grid grid-cols-2 gap-2 rounded-2xl bg-white p-3">
                  {tiles.map((t) => (
                    <div key={t.label} className="flex flex-col items-center gap-1.5 rounded-[10px] bg-soft px-1.5 py-3 text-center text-[0.62rem] font-bold text-ink">
                      {t.icon}
                      {t.label}
                    </div>
                  ))}
                </div>
              </div>
              {/* text */}
              <div className="text-center lg:text-left">
                <h2 className="points-title text-ink">
                  貯めたポイントは、<br /><span className="text-brand">Eduhon</span>で利用できます。
                </h2>
                <p className="mt-4 font-medium text-ink-soft">
                  介護・医療に特化した日本語学習や、特定技能試験対策、面接対策など、日本就職に必要な学びをサポートします。
                </p>
              </div>
              {/* coin */}
              <div className="text-center" aria-hidden>
                <PCoinBig className="mx-auto h-[120px] w-[120px] animate-float [animation-delay:.4s]" />
                <p className="mt-1 text-[0.92rem] font-extrabold text-[#e08a00]">ポイントが<br />学びのチカラに！</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===== CTA (sakura band) ===== */}
        <section id="start" className="relative flex min-h-[340px] items-center overflow-hidden bg-gradient-to-r from-[#fde2ec] via-[#fdeef0] to-[#f4f0fb] max-md:flex-col max-md:items-stretch">
          <div className="absolute inset-0 z-0 max-md:relative max-md:h-[200px]">
            <img src="/sakura.svg" alt="" aria-hidden className="h-full w-full object-cover object-left" />
          </div>
          <div className="relative z-10 mx-auto flex w-[min(1080px,92vw)] flex-col items-end gap-5 text-right max-md:items-center max-md:bg-gradient-to-b max-md:from-[#fdeef0] max-md:to-[#f4f0fb] max-md:px-5 max-md:py-12 max-md:text-center">
            <Reveal as="p" className="cta-title text-ink [text-shadow:0_2px_10px_rgba(255,255,255,.7)]">
              あなたの「ちょっとした時間」が、<br />あなたの未来の学びにつながります。
            </Reveal>
            <Reveal>
              <a href="#start" className="btn-grad px-9 py-[18px] text-[1.05rem]">
                無料で詳細を見る <ArrowRight className="h-[18px] w-[18px]" />
              </a>
            </Reveal>
            <Reveal as="p" className="text-[0.8rem] font-semibold text-ink-soft">登録は1分で完了。クレジットカードは不要です。</Reveal>
          </div>
        </section>
      </main>

      {/* ===== Footer ===== */}
      <footer className="bg-dark py-16 text-[#c4cfe6]">
        <div className="mx-auto flex w-[min(1040px,92vw)] flex-wrap items-start justify-between gap-8 border-b border-white/10 pb-6">
          <div>
            <span className="flex items-center gap-2.5">
              <Logo className="h-7 w-7" />
              <span className="flex flex-col leading-tight">
                <strong className="text-[1.3rem] font-extrabold text-white">EduMission</strong>
                <small className="text-[0.6rem] tracking-wide text-[#b9c6ee]">Powered by Eduhon</small>
              </span>
            </span>
            <p className="mt-3 max-w-[320px] text-[0.72rem] text-[#8fa0c4]">
              EduMissionは、Eduhonが運営するポイントプラットフォームです。
            </p>
          </div>
          <nav className="flex flex-wrap gap-8" aria-label="フッターナビゲーション">
            <a href="#" className="text-sm hover:text-white">利用規約</a>
            <a href="#" className="text-sm hover:text-white">プライバシーポリシー</a>
            <a href="#" className="text-sm hover:text-white">お問い合わせ</a>
          </nav>
        </div>
        <p className="mx-auto mt-4 w-[min(1040px,92vw)] text-right text-[0.72rem] text-[#8fa0c4] max-md:text-center">© 2024 Eduhon Inc.</p>
      </footer>
    </>
  );
}
