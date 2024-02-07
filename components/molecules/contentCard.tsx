import React from 'react'
import {
  Card,
  CardBody,
  HStack,
  Heading,
  Link,
  Stack,
  Tag,
  TagLabel,
  Text,
  VStack,
} from '@chakra-ui/react'
import NextLink from 'next/link'

import { Project } from '@/app/types'
import { ExternalLink } from './ExternalLink'


interface ProjectCardProps { project: Project }
export const ProjectCard = ({ project }:  ProjectCardProps) => {
  return (
    <Card
      variant="filled"
      overflow="hidden"
      bgColor="foreground"
      color="whitesmoke">
      <CardBody>
        <Stack gap='1em'>
          <Heading size="md" color="primary.500">
            {project.title}
          </Heading>
          <Heading size="sm">{project.projectContext}</Heading>
          <Text>{project.description}</Text>
          <HStack>
            {project.stack.map((techno, index) => (
              <Tag key={index} colorScheme='orange' borderRadius='full' variant='solid'>
                <TagLabel>{ techno }</TagLabel>
              </Tag>
            ))}
          </HStack>
          <ExternalLink repositories={project.repositories} />
        </Stack>
      </CardBody>
    </Card>
  )
}

