import { Mail } from "lucide-react";
import { PROFILE } from "../../data/portfolio";
import { GithubIcon, LinkedinIcon } from "../icons/SocialIcons";
import { Reveal } from "../ui/Reveal";

const LINK_CLASS =
  "flex items-center gap-2 px-4 py-2.5 bg-white border border-[#E5E1D6] rounded-lg text-[14px] shadow-[0_1px_2px_rgba(20,24,29,0.04)] hover:border-[#4338CA] hover:text-[#4338CA] hover:-translate-y-0.5 transition-all";

export function ContactSection() {
  return (
    <footer id="contato" className="pb-16 pt-8 scroll-mt-24">
      <Reveal>
        <div className="overflow-hidden rounded-[2rem] border border-[#E7E2D9] bg-[radial-gradient(circle_at_top_left,_rgba(67,56,202,0.12),_transparent_28%),linear-gradient(135deg,_#FFFFFF_0%,_#F8F8FF_100%)] p-6 shadow-[0_22px_50px_rgba(15,23,42,0.06)] sm:p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <p className="font-mono text-[12px] text-[#9B9890]">contato.sh</p>
            <div className="hidden h-px flex-1 bg-gradient-to-r from-[#C7D2FE] via-[#E2E8F0] to-transparent sm:block" />
          </div>

          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#4338CA]">Vamos conversar?</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#14181D] sm:text-4xl">
                Estou aberto para novas oportunidades.
              </h3>
            </div>

            <div className="flex flex-wrap gap-3 md:justify-end">
              <a href={`mailto:${PROFILE.email}`} className={LINK_CLASS}>
                <Mail size={16} /> {PROFILE.email}
              </a>
              <a href={PROFILE.linkedin} className={LINK_CLASS}>
                <LinkedinIcon /> LinkedIn
              </a>
              <a href={PROFILE.github} className={LINK_CLASS}>
                <GithubIcon /> GitHub
              </a>
            </div>
          </div>
        </div>

        <p className="mt-8 font-mono text-[11.5px] text-[#C2BEB0]">
          feito com React + Tailwind
        </p>
      </Reveal>
    </footer>
  );
}
