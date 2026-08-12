import { FileCode2 } from "lucide-react";
import { SKILLS } from "../../data/portfolio";
import { Reveal } from "../ui/Reveal";
import { Spotlight } from "../ui/Spotlight";

export function SkillsSection() {
  return (
    <Reveal>
      <section className="pt-20 mb-24">
        <div className="flex items-center gap-2 mb-5 font-mono text-[12px] text-[#9B9890]">
          <FileCode2 size={14} />
          <span>skills.json</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {SKILLS.map(({ name, tag, level, Icon }) => (
            <Spotlight
              key={name}
              radius={140}
              className="flex flex-col gap-2 bg-white border border-[#E5E1D6] rounded-xl px-4 py-3.5 shadow-[0_1px_2px_rgba(20,24,29,0.04)] hover:border-[#4338CA] hover:shadow-[0_6px_16px_rgba(20,24,29,0.08)] hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
            >
              <Icon size={18} className="text-[#4338CA]" strokeWidth={1.75} />
              <div>
                <p className="text-[13.5px] font-medium leading-tight">{name}</p>
                <p className="font-mono text-[11px] text-[#B9743F] leading-tight">{tag}</p>
                <p className="text-[11px] uppercase tracking-[0.08em] text-[#6B7280] mt-1">{level}</p>
              </div>
            </Spotlight>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
