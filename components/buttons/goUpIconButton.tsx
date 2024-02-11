'use client'

import { ArrowUpIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import React from 'react'
import { LinkItem } from '../links/linkItem'

export const GoUpIconButton = () => {
  return (
    <LinkItem href='/#home'>
      <IconButton
        variant='outline'
        isRound={true}
        colorScheme='orange'
        aria-label='Go up'
        icon={<ArrowUpIcon />}
      />
    </LinkItem>
  )
}
