'use client'

import { VStack } from '@chakra-ui/react'

import { MainTitle } from '@/components/mainTitle'
import { NavList } from '@/components/navList'
import { SkillsGrid } from '@/components/skillsGrid'

export const Header = () => {
  const navTitles = ['about', 'projects']

  return (
    <VStack gap='4em' color={'whitesmoke'} align='flex-start'>
      <MainTitle/>
      <NavList titles={navTitles} />
      <SkillsGrid/>
    </VStack>
  )
}
