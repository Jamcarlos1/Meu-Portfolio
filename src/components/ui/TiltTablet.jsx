import { useCallback, useEffect, useRef } from "react";

export function TiltTablet({ children }) {
  const wrapperRef = useRef(null);
  const frameRef = useRef(null);

  const setTilt = useCallback((rotateX, rotateY) => {
    if (frameRef.current) {
      frameRef.current.style.transform =
        `perspective(1300px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    }
  }, []);

  useEffect(() => setTilt(4, -8), [setTilt]);

  const handleMouseMove = useCallback((event) => {
    const element = wrapperRef.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt(4 - y * 14, -8 + x * 14);
  }, [setTilt]);

  return (
    <div
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt(4, -8)}
      style={{ perspective: "1300px" }}
    >
      <div
        ref={frameRef}
        className="relative rounded-[30px] p-2.5 transition-transform duration-300 ease-out"
        style={{
          background: "linear-gradient(155deg, #2E2A6E 0%, #100D33 100%)",
          boxShadow:
            "0 35px 60px -20px rgba(8,6,35,0.6), 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.10)",
        }}
      >
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-1.5 rounded-full bg-black/30" />
        <div className="rounded-[20px] overflow-hidden relative bg-[#0E0C2E]">
          {children}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(115deg, transparent 42%, rgba(255,255,255,0.14) 50%, transparent 58%)",
              backgroundSize: "260% 260%",
              animation: "sheen 7s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </div>
  );
}
