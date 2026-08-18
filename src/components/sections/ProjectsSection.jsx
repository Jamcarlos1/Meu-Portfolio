import { useState } from "react";
import { ChevronRight, ExternalLink, GitCommit } from "lucide-react";
import { PROJECTS } from "../../data/portfolio";
import { GithubIcon } from "../icons/SocialIcons";
import { Reveal } from "../ui/Reveal";
import { Spotlight } from "../ui/Spotlight";
import { Tag } from "../ui/Tag";

function ProjectCard({ project, isActive, onToggle }) {
  return (
    <Spotlight
      radius={340}
      className={`group relative overflow-hidden rounded-[1.6rem] border bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.08),_transparent_42%)] transition-all duration-300 ${
        isActive
          ? "border-[#4338CA] bg-white shadow-[0_18px_40px_rgba(79,70,229,0.10)]"
          : "border-[#E7E2D9] bg-white/90 shadow-[0_10px_24px_rgba(15,23,42,0.04)] hover:-translate-y-0.5 hover:border-[#A5B4FC] hover:shadow-[0_18px_32px_rgba(15,23,42,0.06)]"
      }`}
    >
      <span className={`absolute left-0 top-0 bottom-0 w-[4px] rounded-r-full transition-colors duration-200 ${
        isActive ? "bg-gradient-to-b from-[#4338CA] to-[#7C3AED]" : "bg-transparent"
      }`} />
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isActive}
        className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left transition-colors sm:px-6"
      >
        <div className="flex items-center gap-4 min-w-0">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#E7E2D9] bg-[#F7F5F2] font-mono text-[12px] font-semibold text-[#4338CA]">
            {project.id}
          </span>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <p className="truncate text-[15.5px] font-semibold text-[#14181D]">{project.title}</p>
              {project.featured && (
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#4338CA] bg-[#EEF2FF] border border-[#C7D2FE] px-2 py-0.5 rounded-full">
                  destaque
                </span>
              )}
            </div>
            <p className="mt-1 font-mono text-[11.5px] text-[#6B7280]">{project.name}</p>
          </div>
        </div>
        <ChevronRight
          size={18}
          className={`shrink-0 text-[#6B7280] transition-all duration-200 ${isActive ? "rotate-90 text-[#4338CA]" : "group-hover:translate-x-0.5"}`}
        />
      </button>
    </Spotlight>
  );
}

function ProjectDetail({ project, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0D1320]/70 p-4 backdrop-blur-sm sm:p-6">
        <div className="relative mx-auto flex max-w-[1200px] flex-col gap-6 rounded-[2rem] border border-white/30 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.12),_transparent_30%),linear-gradient(180deg,_#FFFFFF_0%,_#F8F8FF_100%)] p-6 shadow-[0_24px_70px_rgba(15,23,42,0.18)] sm:p-8 lg:p-10">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-6 top-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E5E1D6] bg-white text-xl font-light text-[#5B6570] transition hover:border-[#4338CA] hover:text-[#4338CA]"
            aria-label="Fechar detalhes do projeto"
          >
            ×
          </button>

          <div className="flex flex-col gap-4 rounded-[1.5rem] border border-[#EEF2FF] bg-[linear-gradient(135deg,_rgba(79,70,229,0.08),_rgba(99,102,241,0.02))] p-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-[0.26em] text-[#4338CA]">Sobre o projeto</p>
              <h3 className="mt-3 text-3xl font-semibold text-[#151B25]">{project.title}</h3>
              <p className="mt-2 text-sm text-[#5B6570]">{project.name}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((technology) => (
                <Tag key={technology}>{technology}</Tag>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-5">
              <div className="rounded-[1.5rem] border border-[#E7E2D9] bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
                <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9B9890]">Descrição</h4>
                <p className="text-base leading-relaxed text-[#3A424A]">{project.description}</p>
              </div>
              <div className="rounded-[1.5rem] border border-[#E7E2D9] bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
                <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9B9890]">Desafio</h4>
                <p className="text-[14.5px] leading-relaxed text-[#3A424A]">{project.challenge}</p>
              </div>
            </div>

            {project.images?.length > 0 && (
              <div className={`grid gap-3 ${project.images.length === 1 ? "sm:grid-cols-1" : "sm:grid-cols-2"}`}>
                {project.images.map((src, index) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setSelectedImage(src)}
                    className={`overflow-hidden rounded-[1.5rem] border border-[#E7E2D9] bg-[#F7F6F3] p-2 shadow-[0_10px_24px_rgba(20,24,29,0.05)] transition hover:border-[#4338CA] hover:shadow-[0_12px_26px_rgba(67,56,202,0.12)] ${project.images.length === 1 ? "sm:col-span-1" : ""}`}
                  >
                    <div className={`overflow-hidden rounded-[1.1rem] bg-white ${project.images.length === 1 ? "p-1" : "p-1.5"}`}>
                      <img
                        src={src}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className={`${project.images.length === 1 ? "h-[300px] sm:h-[390px] lg:h-[460px]" : "h-[180px] sm:h-[220px]"} w-full rounded-[0.9rem] bg-white object-contain object-center"`}
                        style={{ imageRendering: "auto" }}
                      />
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {project.confidentialNote && (
            <div className="mt-2 rounded-[1.5rem] border border-[#D9E4FF] bg-[linear-gradient(135deg,_rgba(99,102,241,0.05),_rgba(14,165,233,0.04))] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4338CA]">
                Acesso restrito
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#3A424A]">
                {project.confidentialNote}
              </p>
            </div>
          )}

          <div className="mt-2 flex flex-wrap gap-4">
            {project.demo && (
              <a
                href={project.demo}
                className="inline-flex items-center gap-2 rounded-full bg-[#4338CA] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#2b2f8a]"
              >
                <ExternalLink size={14} /> Ver projeto
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                className="inline-flex items-center gap-2 rounded-full border border-[#E5E1D6] px-6 py-3 text-sm font-medium text-[#5B6570] transition hover:border-[#4338CA] hover:text-[#4338CA]"
              >
                <GithubIcon size={14} /> Código
              </a>
            )}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-h-full w-full max-w-[calc(100vw-3rem)] overflow-hidden rounded-[1.5rem] bg-black">
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl font-bold text-[#151B25] shadow-lg"
              aria-label="Fechar visualização da imagem"
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Visualização ampliada"
              className="h-full w-full max-h-[80vh] min-w-full object-contain"
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projetos" className="mb-24 scroll-mt-24">
      <Reveal>
        <div className="mb-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-mono text-[12px] text-[#9B9890]">
            <GitCommit size={14} />
            <span>log --projetos</span>
          </div>
          <div className="hidden h-px flex-1 bg-gradient-to-r from-[#C7D2FE] via-[#E2E8F0] to-transparent sm:block" />
        </div>
      </Reveal>
      <div className="grid gap-4 lg:grid-cols-[minmax(360px,1fr)_minmax(420px,0.9fr)]">
        <div className="space-y-4">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.id} delay={index * 80}>
              <ProjectCard
                project={project}
                isActive={activeProject === project.id}
                onToggle={() => setActiveProject((current) => current === project.id ? null : project.id)}
              />
            </Reveal>
          ))}
        </div>

        {activeProject && (
          <ProjectDetail
            project={PROJECTS.find((project) => project.id === activeProject)}
            onClose={() => setActiveProject(null)}
          />
        )}
      </div>
    </section>
  );
}
