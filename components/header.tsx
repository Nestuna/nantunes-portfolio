'use client'

import { VStack } from '@chakra-ui/react'

import { MainTitle } from '@/molecules/mainTitle'
import { NavList } from '@/molecules/navList'

export const Header = () => {
  const navTitles = ['about', 'projects', 'resume']

  return (
    <VStack gap='5em' color={'whitesmoke'} align='flex-start'>
      <MainTitle/>
      <NavList titles={navTitles} />
    </VStack>
  )
}
