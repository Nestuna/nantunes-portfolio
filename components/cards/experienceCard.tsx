import React from 'react'

import { Experience } from '@/app/types'
import { ContentCard } from './contentCard'

interface ExperienceCardProps {
  experience: Experience
}
export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const contentObj = {
    title: experience.title,
    year: experience.year,
    subtitle: experience.organisation,
    description: experience.description || '',
    tags: experience.skills,
  }

  return (
    <ContentCard content={contentObj} variant='outline' color='accent.100'/>
  )
}
