import MainInfoCard from "@components/MainInfoCard/MainInfoCard.tsx"

export default function DesktopLayout() {
  return (
    <div className="two-up">
      <MainInfoCard />
      <section className="project-list">
        <article className="card project-card">
          <h2 className="section-header">Project Name</h2>
          <div className="project-image" style={{ backgroundImage: "url('/public/sample.jpg')" }}></div>
          <sub><i>Tech Stack Used...</i></sub>
          <p>This is a sample project used to test what this block of text will look like in a realistic project list.</p>
          <div className="project-links">
            <a href="" target="_new">Github Link</a>
            <a href="" target="_new">Live Project</a>
          </div>
        </article>
      </section>
    </div>
  )
}