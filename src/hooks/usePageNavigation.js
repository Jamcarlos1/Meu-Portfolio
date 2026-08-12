import { useEffect, useState } from "react";

export function usePageNavigation(navItems) {
  const [activeSection, setActiveSection] = useState("");
  const [scrollState, setScrollState] = useState({
    scrolled: false,
    progress: 0,
    showTop: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const { scrollHeight, clientHeight } = document.documentElement;
      const total = scrollHeight - clientHeight;

      setScrollState({
        scrolled: window.scrollY > 24,
        showTop: window.scrollY > 700,
        progress: total > 0 ? (window.scrollY / total) * 100 : 0,
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [navItems]);

  return { activeSection, ...scrollState };
}
