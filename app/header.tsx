'use client'

import { Box, Flex, VStack } from '@chakra-ui/react'

import { MainTitle } from '@/components/molecules/mainTitle'
import { NavList } from '@/components/molecules/navList'
import { SkillsGrid } from '@/components/molecules/skillsGrid'
import { skills } from './content'
import { ProfileLinks } from '@/components/molecules/profileLinks'

export const Header = () => {
  const navTitles = [
    { title: 'about', href: '#about' },
    { title: 'projects', href: '#projects' },
  ]


  return (
    <VStack gap="5em" color={'whitesmoke'} align="center">
      <MainTitle />
      <SkillsGrid skills={skills} />
    </VStack>
  )
}
