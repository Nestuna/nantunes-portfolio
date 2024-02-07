'use client'
import { Box, Flex, Link, Slide, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { LinkItem } from './linkItem'

interface ILinkItemProps {
  title: string
  href: string
}
export const NavLinkItem = ({ title, href }: ILinkItemProps) => {
  return (
    <LinkItem href={href} color='secondary'>
      <Text fontSize='lg'>{title}</Text>
    </LinkItem>
  )
}
