import { ArrowUp } from "lucide-react";

export function ScrollProgress({ progress }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-30 h-[3px] bg-transparent">
      <div
        className="h-full transition-[width] duration-150 ease-out"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #4338CA, #7C74F0)",
        }}
      />
    </div>
  );
}

export function BackToTop({ visible }) {
  return (
    <button
      type="button"
      aria-label="Voltar ao topo"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 w-11 h-11 rounded-full bg-[#14181D] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(20,24,29,0.25)] hover:bg-[#252B32] transition-all duration-300 z-20 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <ArrowUp size={18} />
    </button>
  );
}
