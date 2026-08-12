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
      radius={320}
      className={`bg-white border rounded-2xl overflow-hidden transition-all duration-200 ${
        isActive
          ? "border-[#4338CA] shadow-[0_8px_24px_rgba(20,24,29,0.08)]"
          : "border-[#E5E1D6] shadow-[0_1px_3px_rgba(20,24,29,0.04)] hover:shadow-[0_6px_18px_rgba(20,24,29,0.06)]"
      }`}
    >
      <span className={`absolute left-0 top-0 bottom-0 w-[3px] transition-colors duration-200 ${
        isActive ? "bg-[#4338CA]" : "bg-transparent"
      }`} />
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isActive}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#FCFBF9] transition-colors"
      >
        <div className="flex items-center gap-4">
          <span className="font-mono text-[12px] text-[#C2BEB0]">{project.id}</span>
          <div>
            <div className="flex items-center gap-2">
              <p className="font-medium text-[15.5px]">{project.title}</p>
              {project.featured && (
                <span className="font-mono text-[10.5px] text-[#4338CA] bg-[#EEEDFC] px-2 py-0.5 rounded-full">
                  destaque
                </span>
              )}
            </div>
            <p className="font-mono text-[12px] text-[#8A8E93]">{project.name}</p>
          </div>
        </div>
        <ChevronRight
          size={18}
          className={`text-[#9B9890] transition-transform duration-200 ${isActive ? "rotate-90" : ""}`}
        />
      </button>
    </Spotlight>
  );
}

function ProjectDetail({ project, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 p-6">
        <div className="relative mx-auto flex max-w-[1200px] flex-col gap-6 rounded-[2rem] bg-white p-8 shadow-[0_18px_48px_rgba(20,24,29,0.12)] ring-1 ring-[#D9D5CF] sm:p-10">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-6 top-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E5E1D6] bg-white text-sm font-bold text-[#5B6570] transition hover:border-[#4338CA] hover:text-[#4338CA]"
            aria-label="Fechar detalhes do projeto"
          >
            ×
          </button>

          <div className="flex flex-col gap-4 rounded-[1.5rem] border border-[#EEEBE3] bg-[#F8FAFB] p-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-mono uppercase tracking-[0.23em] text-[#9B9890]">Sobre o projeto</p>
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
              <div className="rounded-3xl border border-[#EEEBE3] bg-white p-6">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#9B9890]">Descrição</h4>
                <p className="text-base leading-relaxed text-[#3A424A]">{project.description}</p>
              </div>
              <div className="rounded-3xl border border-[#EEEBE3] bg-white p-6">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#9B9890]">Desafio</h4>
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
        <div className="flex items-center gap-2 mb-8 font-mono text-[12px] text-[#9B9890]">
          <GitCommit size={14} />
          <span>log --projetos</span>
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
