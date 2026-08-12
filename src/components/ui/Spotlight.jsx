import { useCallback, useRef } from "react";

export function Spotlight({
  className = "",
  radius = 260,
  tint = "79,70,229",
  children,
  ...props
}) {
  const ref = useRef(null);
  const handleMouseMove = useCallback((event) => {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    element.style.setProperty("--sx", `${event.clientX - rect.left}px`);
    element.style.setProperty("--sy", `${event.clientY - rect.top}px`);
  }, []);

  return (
    <div ref={ref} onMouseMove={handleMouseMove} className={`relative ${className}`} {...props}>
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[inherit]"
        style={{
          background: `radial-gradient(${radius}px circle at var(--sx, 50%) var(--sy, 50%), rgba(${tint},0.09), transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
}
