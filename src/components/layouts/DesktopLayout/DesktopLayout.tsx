import ProjectCard from "@/components/ProjectCard/ProjectCard"
import webProjects from "@/data/web-projects"
import MainInfoCard from "@components/MainInfoCard/MainInfoCard.tsx"

export default function DesktopLayout() {
  return (
    <div className="two-up">
      <MainInfoCard />
      <section className="project-list">
        {webProjects.map(project => {
          return <ProjectCard project={project} />
        })}
      </section>
    </div>
  )
}