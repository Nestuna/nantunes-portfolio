import {
  Card,
  CardBody,
  HStack,
  Heading,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react'
import NextLink from 'next/link'

import { Project } from '@/app/types'

type ProjectsProps = { projects: Project[] }
export const Projects = ({ projects }: ProjectsProps) => {
  const projectsOrderedById = projects.reduce((projects: Project[], item) => {
    projects[item.id - 1] = item
    return projects
  }, [])

  return (
    <Stack id="projects" gap="2em">
      <Heading size="lg">Projects</Heading>
      <Stack spacing="2em" pb="2em">
        {projectsOrderedById.map((project: Project, index: number) => (
          <Card
            key={index}
            variant="filled"
            overflow="hidden"
            bgColor="foreground"
            color="whitesmoke">
            <CardBody>
              <Heading size="md" color="primary">
                {project.title}
              </Heading>
              <Heading size="sm">{project.projectContext}</Heading>
              <Text>{project.description}</Text>
              <HStack>
                {project.stack.map((techno, index) => (
                  <Text as='b' key={index}>| { techno }</Text>
                ))}
              </HStack>
              <HStack>
                {project.repositories.map((repo: any, index: number) => (
                  <Link as={NextLink} href={repo.href} key={index}>
                    {repo.title}
                  </Link>
                ))}
              </HStack>
            </CardBody>
          </Card>
        ))}
      </Stack>
    </Stack>
  )
}
export default Projects
