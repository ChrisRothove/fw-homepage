import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({project}: ProjectCardProps) {
  return (
    <article className="card project-card">
      <h2 className="section-header">{project.name}</h2>
      <div className="project-image" style={{ backgroundImage: `url('${project.src}')` }}></div>
      <sub><i>{ project.tech }</i></sub>
      <p>{project.desc}</p>
      <div className="project-links">
        {project.github && <a href={project.github} target="_new">Github Link</a>}
        {project.live && <a href={project.live} target="_new">Live Project</a>}
      </div>
    </article>
  )
}