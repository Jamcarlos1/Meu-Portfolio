import { useState } from "react";
import { ArrowUpRight, Code2, Menu, X } from "lucide-react";
import { NAV_ITEMS, PROFILE } from "../../data/portfolio";

export function Navbar({ activeSection, scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const overDarkHero = !scrolled;

  const textColor = overDarkHero ? "text-white/70" : "text-[#6B6F76]";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[#FAF9F6]/85 border-b border-[#E5E1D6] shadow-[0_1px_12px_rgba(20,24,29,0.04)]"
          : "border-b border-transparent"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between font-mono text-[13px]">
        <a href="#" className="flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-[#4338CA] text-white flex items-center justify-center">
            <Code2 size={14} strokeWidth={2.5} />
          </span>
          <span className={overDarkHero ? "text-white font-medium" : "text-[#14181D] font-medium"}>
            {PROFILE.name}
          </span>
        </a>

        <div className={`items-center gap-6 hidden sm:flex ${textColor}`}>
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative pb-0.5 capitalize transition-colors ${
                  isActive
                    ? overDarkHero ? "text-white" : "text-[#14181D]"
                    : overDarkHero ? "hover:text-white" : "hover:text-[#14181D]"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className={`absolute left-0 right-0 -bottom-[1px] h-[1.5px] ${
                    overDarkHero ? "bg-white" : "bg-[#4338CA]"
                  }`} />
                )}
              </a>
            );
          })}
        </div>

        <div className="hidden sm:flex items-center gap-2">
          <a
            href={`mailto:${PROFILE.email}`}
            className={`px-4 py-2 rounded-full text-[12.5px] font-medium transition-colors ${
              overDarkHero
                ? "bg-white text-[#14181D] hover:bg-white/90"
                : "bg-[#14181D] text-white hover:bg-[#252B32]"
            }`}
          >
            Fale comigo
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            aria-label="Enviar e-mail"
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
              overDarkHero
                ? "bg-white/10 text-white hover:bg-white/20"
                : "bg-[#F1EFE8] text-[#14181D] hover:bg-[#E5E1D6]"
            }`}
          >
            <ArrowUpRight size={15} />
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
          className={`sm:hidden p-2 rounded-lg transition-colors ${
            overDarkHero ? "text-white" : "text-[#14181D]"
          }`}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div
          className="sm:hidden bg-[#FAF9F6] border-b border-[#E5E1D6] px-6 py-5 flex flex-col gap-4 font-mono text-[14px]"
          style={{ animation: "fadeIn 0.2s ease" }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
              className="text-[#14181D] capitalize"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`mailto:${PROFILE.email}`}
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-[13px] font-medium bg-[#14181D] text-white"
          >
            Fale comigo <ArrowUpRight size={13} />
          </a>
        </div>
      )}
    </nav>
  );
}
