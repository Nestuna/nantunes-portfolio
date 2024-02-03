'use client'

import { VStack } from '@chakra-ui/react'

import { MainTitle } from '@/components/mainTitle'
import { NavList } from '@/components/navList'
import { SkillsGrid } from '@/components/skillsList'

export const Header = () => {
  const navTitles = ['about', 'projects']

  return (
    <VStack gap='3em' color={'whitesmoke'} align='flex-start'>
      <MainTitle/>
      <NavList titles={navTitles} />
      <SkillsGrid/>
    </VStack>
  )
}
