'use client'

import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { IconButton, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function NextPageIcon({direction}: { direction : 'back' | 'next'}) {
  const pathname = usePathname()

  if (pathname === '/about' && direction === 'next') {
    return (
      <Link as={NextLink} href='/projects'>
        <IconButton
          aria-label="Projects"
          colorScheme='orange'
          variant='solid'
          icon={<TriangleDownIcon />} />
      </Link>
    )
  } else if (pathname === '/projects' && direction === 'back') {
    return (
      <Link as={NextLink} href='/about'>
        <IconButton
          aria-label="About"
          colorScheme='orange'
          variant='solid'
          icon={<TriangleUpIcon />} />
      </Link>
    )
  }
}
