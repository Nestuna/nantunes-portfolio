import { Box, Flex, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface LinkItemProps {
  children: React.ReactNode
  href: string,
  color?: string
}
export const LinkItem = ({ children, href, color }: LinkItemProps) => {
  return (
    <Link
      as={NextLink}
      href={href}
      color={ color ? color : 'primary.700' }
      _hover={{ opacity: 0.7 }}>
      <Text as='b'>{ children }</Text>
    </Link>
  )
}
