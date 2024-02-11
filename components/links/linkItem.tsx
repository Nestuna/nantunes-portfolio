import { Box, Flex, Link, LinkProps, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'

interface LinkItemProps {
  children: React.ReactNode
  color?: string
}
export const LinkItem = ({ children, color, ...props }: LinkItemProps & LinkProps) => {
  return (
    <Link
      as={NextLink}
      href={props.href}
      color={ color ? color : 'primary.700' }
      _hover={{ opacity: 0.7 }}>
      <Text as='b'>{ children }</Text>
    </Link>
  )
}
