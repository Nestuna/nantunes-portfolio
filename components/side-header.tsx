'use client'

import { HStack, Heading, VStack } from '@chakra-ui/react'

import { SkillsGrid } from '@/components/items-display/skillsGrid'
import { skills } from '../app/content'
import { Title } from '@/components/text/title'
import { ContactIconButtons } from '@/components/buttons/contactIconButtons'

export const SideHeader = () => {
  const navTitles = [
    { title: 'about', href: '#about' },
    { title: 'projects', href: '#projects' },
  ]
  const profileLinks = [
    { type: 'mail', href: 'mailto:nicolasantunespereira@gmail.com', text: 'nicolasantunespereira@gmail.com' },
    { type: 'phone', href: 'tel:0612821661', text: '06 12 82 16 61' },
    { type: 'linkedin', href: 'https://linkedin.com/in/n-antunes/'},
  ]

  return (
    <VStack gap="5em" color={'whitesmoke'} align="center">
      <VStack gap="2em">
        <VStack className='text-gradient'>
          <Heading as="h1" size="2xl" textAlign='center'>
            Nicolas Antunes
          </Heading>
          <Title textAlign='center'>Développeur Fullstack</Title>
        </VStack>
        <ContactIconButtons links={profileLinks} />
      </VStack>
      <SkillsGrid skills={skills} />
    </VStack>
  )
}
