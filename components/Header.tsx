"use client";
import { useEffect, useState } from "react";
import { Logo, Menu, Close, ArrowRight } from "./icons";

const links = [
  { href: "#problems", label: "お悩み" },
  { href: "#how", label: "仕組み" },
  { href: "#activities", label: "活動例" },
];

export default function Header() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        stuck ? "bg-white/85 backdrop-blur shadow-soft" : ""
      }`}
    >
      <div className="mx-auto flex max-w-[1140px] items-center justify-between px-5 py-3 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label="EduMission ホーム">
          <Logo className="h-8 w-8 drop-shadow-[0_4px_8px_rgba(47,107,255,0.35)]" />
          <span className="flex flex-col leading-tight">
            <strong className="text-[1.3rem] font-extrabold text-ink">EduMission</strong>
            <small className="text-[0.6rem] tracking-wide text-muted">Powered by Eduhon</small>
          </span>
        </a>

        <nav className="flex items-center gap-3" aria-label="メインナビゲーション">
          <a
            href="#start"
            className="hidden rounded-full border border-brand/40 bg-white/80 px-6 py-2.5 text-sm font-bold text-brand-deep shadow-soft backdrop-blur transition hover:bg-white sm:inline-flex"
          >
            無料で始める
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="grid h-11 w-11 place-items-center rounded-xl text-ink"
          >
            {open ? <Close className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </nav>
      </div>

      {/* mobile nav */}
      <div
        id="mobile-nav"
        className={`fixed inset-0 z-[45] bg-dark/55 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      >
        <div
          className={`absolute right-0 top-0 flex h-full w-[min(320px,84vw)] flex-col gap-4 bg-white px-8 pb-8 pt-24 transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="メニュー"
          onClick={(e) => e.stopPropagation()}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-3 font-bold text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#start"
            onClick={() => setOpen(false)}
            className="btn-grad mt-3 px-6 py-3 text-sm"
          >
            無料で始める <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
