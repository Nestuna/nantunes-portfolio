'use client'

import { HStack } from '@chakra-ui/react'
import React from 'react'
import { LinkItem } from './linkItem'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { ILink } from '@/app/types'


export const ExternalLink = ({ title, href }: ILink) => {
  return (
    <LinkItem href={href}>
      <ExternalLinkIcon mb='5px' /> {title}
    </LinkItem>
  )
}
