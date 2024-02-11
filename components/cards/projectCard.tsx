import React from 'react'

import { Project } from '@/app/types'
import { ContentCard } from '@/components/cards/contentCard'

interface ProjectCardProps {
  project: Project
}
export const ProjectCard = ({ project }: ProjectCardProps) => {
  const contentObj = {
    title: project.title,
    subtitle: project.projectContext,
    description: project.description,
    tags: project.stack,
    links: project.repositories
  }

  return (
    <ContentCard content={contentObj} variant='filled' />
  )
}
