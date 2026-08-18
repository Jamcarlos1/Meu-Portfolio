import { Terminal } from "lucide-react";
import { LineGutter, WindowChrome } from "../ui/CodeWindow";
import { Reveal } from "../ui/Reveal";

export function AboutSection() {
  return (
    <section id="sobre" className="mb-24 scroll-mt-24">
      <Reveal>
        <div className="mb-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-mono text-[12px] text-[#9B9890]">
            <Terminal size={14} />
            <span>sobre.md</span>
          </div>
          <div className="hidden h-px flex-1 bg-gradient-to-r from-[#C7D2FE] via-[#E2E8F0] to-transparent sm:block" />
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-[#E6E0D8] bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.08),_transparent_38%),linear-gradient(180deg,_#FFFFFF_0%,_#F9F8FF_100%)] shadow-[0_20px_48px_rgba(15,23,42,0.06)]">
          <WindowChrome filename="sobre.md" />
          <div className="p-6 sm:p-7">
            <div className="mb-6 flex flex-wrap items-center gap-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#4338CA]">Perfil</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#8B5CF6]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#6B7280]">Disponível</span>
            </div>
            <LineGutter>
              <span className="text-[14.5px] text-[#3A424A]">Sou graduado em Sistemas de Informação e iniciei minha</span>
              <span className="text-[14.5px] text-[#3A424A]">trajetória na tecnologia em 2014. Em 2024, retomei de</span>
              <span className="text-[14.5px] text-[#3A424A]">forma mais intensa o desenvolvimento de software com</span>
              <span className="text-[14.5px] text-[#3A424A]">foco na transição da carreira pública para a área de</span>
              <span className="text-[14.5px] text-[#3A424A]">tecnologia, buscando aplicar meus conhecimentos em</span>
              <span className="text-[14.5px] text-[#3A424A]">projetos reais e em soluções com impacto direto para</span>
              <span className="text-[14.5px] text-[#3A424A]">usuários e negócios.</span>
              <span className="text-[14.5px] text-[#3A424A]">Como freelancer, desenvolvi interfaces responsivas,</span>
              <span className="text-[14.5px] text-[#3A424A]">integrei APIs e contribui com soluções em back-end,</span>
              <span className="text-[14.5px] text-[#3A424A]">além de trabalhar com Docker e serviços AWS.</span>
              <span className="text-[14.5px] text-[#3A424A]">Tenho perfil proativo, aprendizado rápido e boa</span>
              <span className="text-[14.5px] text-[#3A424A]">capacidade de adaptação em ambientes dinâmicos.</span>
              <span className="text-[14.5px] text-[#3A424A]">Busco uma oportunidade como desenvolvedor júnior para</span>
              <span className="text-[14.5px] text-[#3A424A]">evoluir tecnicamente, colaborar com uma equipe e</span>
              <span className="text-[14.5px] text-[#3A424A]">contribuir com projetos que tragam valor real ao produto.</span>
            </LineGutter>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
