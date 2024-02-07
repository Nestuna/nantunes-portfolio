import { Heading, Stack } from '@chakra-ui/react'

import { Project } from '@/app/types'
import { ProjectCard } from '@/components/cards/projectCard'
import { Title } from './titles/title'

type ProjectsProps = { projects: Project[] }
export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <Stack id="projects" gap="2em">
      <Title color='primary.700'>Projets</Title>
      <Stack spacing="2em" pb="2em">
        {projects.map((project: Project, index: number) => (
          <ProjectCard project={project} key={index} />
        ))}
      </Stack>
    </Stack>
  )
}
export default Projects
