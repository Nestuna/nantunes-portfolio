'use client'

import { Heading, VStack } from '@chakra-ui/react'

import { SkillsGrid } from '@/components/items-display/skillsGrid'
import { skills } from '../app/content'
import { Title } from './titles/title'
import { ProfileLinks } from './items-display/profileLinks'

export const SideHeader = () => {
  const navTitles = [
    { title: 'about', href: '#about' },
    { title: 'projects', href: '#projects' },
  ]
  const profileLinks = [
    { type: 'mail', href: '' },
    { type: 'phone', href: '' },
    { type: 'linkedin', href: '' },
  ]

  return (
    <VStack gap="5em" color={'whitesmoke'} align="center">
      <VStack gap="2em">
        <VStack className='main-title'>
          <Heading as="h1" size="2xl" >
            Nicolas Antunes
          </Heading>
          <Title>Fullstack Developper</Title>
        </VStack>
        <ProfileLinks links={profileLinks} />
      </VStack>
      <SkillsGrid skills={skills} />
    </VStack>
  )
}
