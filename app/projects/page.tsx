import { ProjectsCardList } from '@/components/projectsList'

const Projects = () => {

  interface IProject {
    id: number,
    title: string,
    description: string,
  }

  const projects = [
    'Portfolio',
    'Cuistou',
    'Butterfly',
  ]

  return <ProjectsCardList projects={projects} />
}

export default Projects
