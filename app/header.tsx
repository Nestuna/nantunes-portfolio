'use client'

import { VStack } from '@chakra-ui/react'

import { MainTitle } from '@/components/molecules/mainTitle'
import { NavList } from '@/components/molecules/navList'
import { SkillsGrid } from '@/components/molecules/skillsGrid'
import { skills } from './content'

export const Header = () => {
  const navTitles = [
    { title: 'about', href: '#about' },
    { title: 'projects', href: '#projects' },
  ]

  return (
    <VStack gap="4em" color={'whitesmoke'} align="flex-start">
      <MainTitle />
      <NavList links={navTitles} />
      <SkillsGrid skills={skills} />
    </VStack>
  )
}
