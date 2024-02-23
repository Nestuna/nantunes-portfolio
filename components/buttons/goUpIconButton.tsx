'use client'

import { ArrowUpIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import React from 'react'
import { LinkItem } from '../links/linkItem'

export const GoUpIconButton = () => {
  return (
    <LinkItem href='/#home'>
      <IconButton
        isRound={true}
        colorScheme='purple'
        aria-label='Go up'
        icon={<ArrowUpIcon />}
      />
    </LinkItem>
  )
}
