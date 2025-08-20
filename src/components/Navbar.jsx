import { useState, useEffect } from "react";
import logo from "../assets/dlogo.png";

const links = [
  { href: "#about", label: "About Us" },
  { href: "#features", label: "Features" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#blogs", label: "Blogs" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "hidden";
      document.body.style.overflowY = "auto";
    }
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="mr-2 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white lg:hidden"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <a href="#hero" className="flex items-center gap-2">
            <img src={logo} alt="Dueprop Logo" className="h-9 w-9 rounded-full" />
            <span className="text-lg font-semibold text-slate-900">Dueprop</span>
          </a>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#login"
            className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
          >
            Login
          </a>
          <a
            href="#get-started"
            className="inline-flex items-center justify-center rounded-full bg-green-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-700 transition"
          >
            Get Started
          </a>
        </div>

        {/* Mobile menu overlay */}
        <div
          className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-xl lg:hidden transition-opacity duration-300 ${
            open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={() => setOpen(false)}
        >
          {/* Drawer */}
          <div
            className={`fixed right-0 top-0 z-50 h-full w-72 max-w-full bg-white shadow-xl p-6 flex flex-col gap-4 transform transition-transform duration-300 ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="ml-auto mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
              >
                <path
                  d="M6 6l12 12M6 18L18 6"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#login"
              className="mt-4 rounded-lg border border-slate-300 px-3 py-2 text-center"
            >
              Login
            </a>
            <a
              href="#get-started"
              className="rounded-lg bg-green-600 px-3 py-2 text-center text-white hover:bg-green-700 transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

