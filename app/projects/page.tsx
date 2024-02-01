import { ProjectsCardList } from "@/components/molecules/projectsList"

const Projects = () => {
  const projects = ['portfolio', 'portfolio', 'portfolio', 'portfolio', 'portfolio' ]

  return (
    <ProjectsCardList projects={projects} />
  )
}

export default Projects
