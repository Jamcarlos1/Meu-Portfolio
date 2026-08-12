import { Terminal } from "lucide-react";
import { LineGutter, WindowChrome } from "../ui/CodeWindow";
import { Reveal } from "../ui/Reveal";

export function AboutSection() {
  return (
    <section id="sobre" className="mb-24 scroll-mt-24">
      <Reveal>
        <div className="flex items-center gap-2 mb-5 font-mono text-[12px] text-[#9B9890]">
          <Terminal size={14} />
          <span>sobre.md</span>
        </div>
        <div className="bg-white border border-[#E5E1D6] rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(20,24,29,0.04)]">
          <WindowChrome filename="sobre.md" />
          <div className="p-7">
            <LineGutter>
              <span className="text-[14.5px] text-[#3A424A]">Sou graduado em Sistemas de Informação e iniciei minha</span>
              <span className="text-[14.5px] text-[#3A424A]">trajetória na tecnologia em 2014. Em 2024, retomei o</span>
              <span className="text-[14.5px] text-[#3A424A]">desenvolvimento de software com foco na transição da</span>
              <span className="text-[14.5px] text-[#3A424A]">carreira pública para a área de tecnologia.</span>
              <span className="text-[14.5px] text-[#3A424A]">Como freelancer, criei interfaces responsivas, integrei</span>
              <span className="text-[14.5px] text-[#3A424A]">APIs e contribuí com back-end, Docker e serviços AWS.</span>
              <span className="text-[14.5px] text-[#3A424A]">Tenho perfil persistente, aprendizado rápido e foco em</span>
              <span className="text-[14.5px] text-[#3A424A]">soluções que aprimorem a experiência e gerem valor.</span>
            </LineGutter>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
