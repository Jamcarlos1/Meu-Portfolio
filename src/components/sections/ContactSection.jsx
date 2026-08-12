import { Mail } from "lucide-react";
import { PROFILE } from "../../data/portfolio";
import { GithubIcon, LinkedinIcon } from "../icons/SocialIcons";
import { Reveal } from "../ui/Reveal";

const LINK_CLASS =
  "flex items-center gap-2 px-4 py-2.5 bg-white border border-[#E5E1D6] rounded-lg text-[14px] shadow-[0_1px_2px_rgba(20,24,29,0.04)] hover:border-[#4338CA] hover:text-[#4338CA] hover:-translate-y-0.5 transition-all";

export function ContactSection() {
  return (
    <footer id="contato" className="border-t border-[#E5E1D6] pt-8 pb-16 scroll-mt-24">
      <Reveal>
        <p className="font-mono text-[12px] text-[#9B9890] mb-4">contato.sh</p>
        <div className="flex flex-wrap gap-3">
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
        <p className="mt-10 font-mono text-[11.5px] text-[#C2BEB0]">
          feito com React + Tailwind
        </p>
      </Reveal>
    </footer>
  );
}
