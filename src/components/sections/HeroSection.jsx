import { ArrowRight, Code2 } from "lucide-react";
import { GithubIcon } from "../icons/SocialIcons";
import { HERO_SKILLS, NAV_ITEMS, PROFILE, SOFT_SKILLS, STAT } from "../../data/portfolio";
import { TiltTablet } from "../ui/TiltTablet";

const PARTICLES = [
  { top: "18%", left: "6%", size: 5, delay: "0s" },
  { top: "70%", left: "3%", size: 3, delay: "1.2s" },
  { top: "30%", left: "48%", size: 4, delay: "0.6s" },
];

function HeroContent() {
  return (
    <div className="relative z-10">
      <div
        className="inline-flex items-center gap-2 mb-6 font-mono text-[12.5px] text-white/80 bg-white/10 border border-white/15 rounded-full px-3 py-1"
        style={{ animation: "fadeInDown 0.5s ease" }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#97E4C0]" />
        <span>aberto(a) a oportunidades</span>
      </div>
      <p className="text-white/70 text-[15px] mb-2">
        Olá, sou {PROFILE.name.split(" ")[0]} 👋
      </p>
      <h1
        className="text-[38px] sm:text-[46px] leading-[1.08] font-semibold text-white mb-6 tracking-tight"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        Interfaces & produtos web
      </h1>
      <p className="text-white/70 text-[16px] max-w-md leading-relaxed mb-8">
        {PROFILE.pitch}
      </p>
      <div className="flex flex-wrap items-center gap-3 mb-10">
        <a
          href={PROFILE.github}
          className="flex items-center gap-2 px-5 py-3 bg-white text-[#14181D] rounded-full text-[14px] font-medium hover:bg-white/90 hover:-translate-y-0.5 transition-all"
        >
          <GithubIcon /> Ver GitHub
        </a>
        <a
          href="#projetos"
          className="flex items-center gap-2 px-5 py-3 border border-white/25 text-white rounded-full text-[14px] font-medium hover:bg-white/10 hover:-translate-y-0.5 transition-all"
        >
          Ver projetos <ArrowRight size={15} />
        </a>
      </div>
      <div className="flex items-center gap-5 pt-6 border-t border-white/15 max-w-md">
        <div>
          <p
            className="text-[28px] font-semibold text-white leading-none"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {STAT.value}
          </p>
          <p className="text-white/60 text-[12.5px] mt-1">{STAT.label}</p>
        </div>
        <div className="w-px h-9 bg-white/15" />
        <div className="flex flex-wrap gap-2">
          {HERO_SKILLS.map((skill) => (
            <span
              key={skill}
              className="font-mono text-[11.5px] text-white/80 bg-white/10 border border-white/15 rounded-full px-2.5 py-1"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 max-w-md">
        {SOFT_SKILLS.map((skill) => (
          <span
            key={skill}
            className="font-mono text-[11.5px] text-white/80 bg-white/10 border border-white/15 rounded-full px-2.5 py-1"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function TabletPreview() {
  return (
    <div className="relative hidden sm:block h-[400px]">
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-start justify-center select-none pointer-events-none font-semibold tracking-tight overflow-hidden"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "168px",
          lineHeight: 1,
          color: "rgba(255,255,255,0.08)",
        }}
      >
        {"</>"}
      </span>
      <div className="absolute inset-x-8 top-6 bottom-6">
        <TiltTablet>
          <div
            className="w-full h-[300px] relative flex flex-col overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #181654 0%, #2E2A94 45%, #4F46E5 100%)",
            }}
          >
            <div className="flex items-center justify-between px-4 pt-3.5 pb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded-[3px] bg-white/90 flex items-center justify-center">
                  <Code2 size={8} className="text-[#4338CA]" strokeWidth={3} />
                </span>
                <span className="text-white text-[8px] font-medium">
                  {PROFILE.name}
                </span>
              </div>
              <div className="flex items-center gap-2 text-[7px] text-white/60 capitalize">
                {NAV_ITEMS.map(({ id, label }) => (
                  <span key={id}>{label}</span>
                ))}
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center px-4">
              <div className="inline-flex w-fit items-center gap-1 mb-2 text-[6.5px] text-white/80 bg-white/10 border border-white/15 rounded-full px-2 py-0.5">
                <span className="w-1 h-1 rounded-full bg-[#97E4C0]" />
                <span>aberto(a) a oportunidades</span>
              </div>
              <p
                className="text-white text-[15px] font-semibold leading-tight mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Interfaces &<br />
                produtos web
              </p>
              <div className="flex gap-1.5">
                <span className="text-[6.5px] font-medium bg-white text-[#14181D] rounded-full px-2 py-1">
                  Ver GitHub
                </span>
                <span className="text-[6.5px] font-medium border border-white/25 text-white rounded-full px-2 py-1">
                  Ver projetos
                </span>
              </div>
            </div>
            <div className="absolute left-0 right-0 bottom-0 bg-white/95 px-5 py-3.5 flex items-center justify-between">
              <div>
                <p className="text-[11.5px] text-[#6B6F76] leading-tight">
                  {STAT.label}
                </p>
                <p className="font-mono text-[10.5px] text-[#4338CA] mt-0.5">
                  status: em progresso
                </p>
              </div>
              <p
                className="text-[22px] font-semibold text-[#4338CA]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {STAT.value}
              </p>
            </div>
          </div>
        </TiltTablet>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <header
      id="perfil"
      className="relative overflow-hidden pt-32 pb-24 sm:pt-40"
      style={{
        background:
          "linear-gradient(135deg, #181654 0%, #2E2A94 45%, #4F46E5 100%)",
      }}
    >
      {PARTICLES.map((particle, index) => (
        <span
          key={`${particle.top}-${particle.left}`}
          aria-hidden="true"
          className="absolute rounded-full bg-white/30 blur-[1px] pointer-events-none hidden sm:block"
          style={{
            top: particle.top,
            left: particle.left,
            width: particle.size,
            height: particle.size,
            animation: `floatSlow ${4 + index}s ease-in-out infinite`,
            animationDelay: particle.delay,
          }}
        />
      ))}
      <div className="max-w-4xl mx-auto px-6 relative">
        <div className="grid sm:grid-cols-[1.05fr,0.95fr] gap-14 items-center">
          <HeroContent />
          <TabletPreview />
        </div>
      </div>
    </header>
  );
}
