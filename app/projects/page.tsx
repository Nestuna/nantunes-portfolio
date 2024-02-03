import { ProjectsCardList } from '@/components/projectsList'

const Projects = () => {
  const projects = [
    'Portfolio',
    'Cuistou',
    'Butterfly',
  ]

  return <ProjectsCardList projects={projects} />
}

export default Projects
