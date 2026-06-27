import * as React from "react";

type P = { className?: string };
const base = (className?: string) => className ?? "w-6 h-6";

/* ---------- Brand ---------- */
export const Logo = ({ className }: P) => (
  <svg viewBox="0 0 32 32" className={base(className)} aria-hidden="true">
    <path d="M16 2 4 9v14l12 7 12-7V9L16 2Z" fill="#2f6bff" />
    <path d="M16 2 4 9l12 7 12-7-12-7Z" fill="#5b8cff" />
    <path d="M16 16v14l12-7V9l-12 7Z" fill="#2454d6" />
  </svg>
);

/* ---------- UI ---------- */
export const ArrowRight = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={base(className)} fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const Menu = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={base(className)} fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" aria-hidden="true">
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);
export const Close = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={base(className)} fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" aria-hidden="true">
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

/* ---------- Process strip ---------- */
export const Phone = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={base(className)} fill="none" stroke="#2f6bff" strokeWidth={1.7} aria-hidden="true">
    <rect x="6" y="2" width="12" height="20" rx="3" />
    <path d="M10 19h4" strokeLinecap="round" />
  </svg>
);
export const Clock = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={base(className)} fill="none" stroke="#2f6bff" strokeWidth={1.7} aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" strokeLinecap="round" />
  </svg>
);
export const PCoin = ({ className }: P) => (
  <svg viewBox="0 0 48 48" className={base(className)} aria-hidden="true">
    <defs>
      <linearGradient id="pc" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ffd34d" />
        <stop offset="1" stopColor="#f5a623" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="22" fill="url(#pc)" />
    <circle cx="24" cy="24" r="22" fill="none" stroke="#e8951a" strokeWidth="1.5" />
    <text x="24" y="32" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="24" fill="#fff">P</text>
  </svg>
);
export const GradCap = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={base(className)} fill="none" stroke="#2f6bff" strokeWidth={1.7} strokeLinejoin="round" aria-hidden="true">
    <path d="M2 9l10-5 10 5-10 5z" fill="#dfeaff" />
    <path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" strokeLinecap="round" />
    <path d="M22 9v5" strokeLinecap="round" />
  </svg>
);
export const FlagJP = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={base(className)} aria-hidden="true">
    <circle cx="12" cy="12" r="11" fill="#fff" stroke="#d7e0ee" strokeWidth="1" />
    <circle cx="12" cy="12" r="5" fill="#e23b48" />
  </svg>
);

/* ---------- Problems ---------- */
export const MoneyBag = ({ className }: P) => (
  <svg viewBox="0 0 48 48" className={base(className)} fill="none" aria-hidden="true">
    <path d="M19 12c0-3 2.4-5 5-5s5 2 5 5l-2 3h-6z" fill="#dfeaff" stroke="#2f6bff" strokeWidth="2" strokeLinejoin="round" />
    <path d="M16 15h16c3 4 6 9 6 15a9 9 0 0 1-9 9H19a9 9 0 0 1-9-9c0-6 3-11 6-15Z" fill="#eaf1ff" stroke="#2f6bff" strokeWidth="2" strokeLinejoin="round" />
    <path d="M24 22v10M21 25h4.2a2 2 0 0 1 0 4h-2.4a2 2 0 0 0 0 4H28" stroke="#2f6bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export const ClockAlarm = ({ className }: P) => (
  <svg viewBox="0 0 48 48" className={base(className)} fill="none" stroke="#2f6bff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="24" cy="26" r="15" fill="#eaf1ff" />
    <path d="M24 18v8l6 4" />
    <path d="M16 7l-7 6M32 7l7 6" />
  </svg>
);
export const Question = ({ className }: P) => (
  <svg viewBox="0 0 48 48" className={base(className)} fill="none" stroke="#2f6bff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="24" cy="24" r="18" fill="#eaf1ff" />
    <path d="M18.5 18.5a5.6 5.6 0 0 1 11 1.6c0 3.8-5.4 5-5.4 8.4" />
    <path d="M24 35h.02" />
  </svg>
);

/* ---------- How it works ---------- */
export const Stopwatch = ({ className }: P) => (
  <svg viewBox="0 0 48 48" className={base(className)} fill="none" stroke="#2f6bff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="24" cy="27" r="15" fill="#dfeaff" />
    <path d="M24 27V18M19 6h10M38 14l3-3" />
  </svg>
);
export const PeopleChat = ({ className }: P) => (
  <svg viewBox="0 0 48 48" className={base(className)} fill="none" aria-hidden="true">
    <circle cx="17" cy="18" r="6" fill="#dfeaff" stroke="#2f6bff" strokeWidth="2" />
    <path d="M6 39c0-6 5-10 11-10s11 4 11 10" fill="#dfeaff" stroke="#2f6bff" strokeWidth="2" strokeLinecap="round" />
    <rect x="26" y="8" width="18" height="13" rx="4" fill="#2f6bff" />
    <path d="M32 21l-2 5 6-5" fill="#2f6bff" />
    <path d="M31 14h8M31 17h5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
export const Coins = ({ className }: P) => (
  <svg viewBox="0 0 48 48" className={base(className)} fill="none" aria-hidden="true">
    <ellipse cx="24" cy="13" rx="13" ry="5" fill="#ffd34d" stroke="#e8951a" strokeWidth="1.6" />
    <path d="M11 13v7c0 2.8 5.8 5 13 5s13-2.2 13-5v-7" fill="#ffce47" stroke="#e8951a" strokeWidth="1.6" />
    <path d="M11 20v7c0 2.8 5.8 5 13 5s13-2.2 13-5v-7" fill="#ffc53d" stroke="#e8951a" strokeWidth="1.6" />
    <path d="M11 27v7c0 2.8 5.8 5 13 5s13-2.2 13-5v-7" fill="#ffbe33" stroke="#e8951a" strokeWidth="1.6" />
  </svg>
);
export const Book = ({ className }: P) => (
  <svg viewBox="0 0 48 48" className={base(className)} fill="none" stroke="#2f6bff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M24 13C19 9 13 9 8 11v26c5-2 11-2 16 2 5-4 11-4 16-2V11c-5-2-11-2-16 2Z" fill="#dfeaff" />
    <path d="M24 13v26" />
  </svg>
);
export const Plane = ({ className }: P) => (
  <svg viewBox="0 0 48 48" className={base(className)} fill="none" aria-hidden="true">
    <path d="M6 26 41 11l-7 27-9-8-5 6-2-9z" fill="#dfeaff" stroke="#2f6bff" strokeWidth="2" strokeLinejoin="round" />
    <path d="M18 33l16-22" stroke="#2f6bff" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

/* ---------- Activities ---------- */
export const Megaphone = ({ className }: P) => (
  <svg viewBox="0 0 48 48" className={base(className)} fill="none" aria-hidden="true">
    <path d="M8 22v6a2 2 0 0 0 2 2h4l10 7V13L14 20h-4a2 2 0 0 0-2 2Z" fill="#fbcfe0" stroke="#e85d8a" strokeWidth="2" strokeLinejoin="round" />
    <path d="M30 16a8 8 0 0 1 0 16M35 11a13 13 0 0 1 0 26" stroke="#e85d8a" strokeWidth="2" strokeLinecap="round" />
    <path d="M14 30v6a3 3 0 0 0 6 0v-2" stroke="#e85d8a" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
export const Pencil = ({ className }: P) => (
  <svg viewBox="0 0 48 48" className={base(className)} fill="none" aria-hidden="true">
    <path d="M30 8l10 10L18 40H8v-10z" fill="#cdeede" stroke="#1fae73" strokeWidth="2" strokeLinejoin="round" />
    <path d="M26 12l10 10" stroke="#1fae73" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 40h12" stroke="#1fae73" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
export const Play = ({ className }: P) => (
  <svg viewBox="0 0 48 48" className={base(className)} fill="none" aria-hidden="true">
    <rect x="6" y="11" width="36" height="26" rx="6" fill="#e7e0fb" stroke="#7a5cf0" strokeWidth="2" />
    <path d="M21 19l9 5-9 5z" fill="#7a5cf0" />
  </svg>
);
export const ChatDots = ({ className }: P) => (
  <svg viewBox="0 0 48 48" className={base(className)} fill="none" aria-hidden="true">
    <path d="M40 23a14 14 0 0 1-20.5 12.4L9 38l2.6-9.5A14 14 0 1 1 40 23Z" fill="#fbe2c4" stroke="#e0921f" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="17" cy="23" r="2" fill="#e0921f" />
    <circle cx="24" cy="23" r="2" fill="#e0921f" />
    <circle cx="31" cy="23" r="2" fill="#e0921f" />
  </svg>
);

/* ---------- Phone app tiles ---------- */
export const Heart = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={base(className)} aria-hidden="true">
    <path d="M12 21s-7-4.4-9.3-8.4C1 9.4 2.6 6 6 6c2 0 3.2 1.2 4 2.3C10.8 7.2 12 6 14 6c3.4 0 5 3.4 3.3 6.6C19 16.6 12 21 12 21Z" fill="#ef5d8a" />
  </svg>
);
export const BookMini = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={base(className)} fill="none" stroke="#7a5cf0" strokeWidth={1.8} strokeLinejoin="round" aria-hidden="true">
    <path d="M12 6C9.5 4 6.5 4 4 5v13c2.5-1 5.5-1 8 1 2.5-2 5.5-2 8-1V5c-2.5-1-5.5-1-8 1Z" />
    <path d="M12 6v13" />
  </svg>
);
export const DocMini = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={base(className)} fill="none" stroke="#2f6bff" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <path d="M9 8h6M9 12h6M9 16h3" />
  </svg>
);
export const PeopleMini = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={base(className)} fill="none" stroke="#16a37b" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="9" cy="8" r="3" />
    <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
    <circle cx="17" cy="8" r="2.4" />
    <path d="M16 14.2A5 5 0 0 1 20.5 19" />
  </svg>
);

/* ---------- Big P coin with sparkles ---------- */
export const PCoinBig = ({ className }: P) => (
  <svg viewBox="0 0 140 140" className={base(className)} aria-hidden="true">
    <defs>
      <linearGradient id="pcb" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ffe07a" />
        <stop offset="1" stopColor="#f5a623" />
      </linearGradient>
    </defs>
    <g fill="#ffd34d">
      <path d="M118 20l2.4 6.6L127 29l-6.6 2.4L118 38l-2.4-6.6L109 29l6.6-2.4z" />
      <path d="M122 60l1.6 4.4L128 66l-4.4 1.6L122 72l-1.6-4.4L116 66l4.4-1.6z" />
      <path d="M20 96l1.8 5L27 103l-5.2 1.8L20 110l-1.8-5.2L13 103l5.2-2z" opacity="0.9" />
    </g>
    <circle cx="70" cy="74" r="46" fill="url(#pcb)" />
    <circle cx="70" cy="74" r="46" fill="none" stroke="#e8951a" strokeWidth="3" />
    <circle cx="70" cy="74" r="38" fill="none" stroke="#ffe9b8" strokeWidth="2" opacity="0.7" />
    <text x="70" y="92" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="52" fill="#fff">P</text>
  </svg>
);

/* ---------- Misc ---------- */
export const Check = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={base(className)} fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 13l4 4L19 7" />
  </svg>
);
export const ChatBubble = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={base(className)} fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l.9-5A8 8 0 1 1 21 12Z" />
  </svg>
);
