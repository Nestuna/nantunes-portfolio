import { Heading, HeadingProps } from '@chakra-ui/react'
import React from 'react'

export const Title = ({ children, color, ...props }: { children: React.ReactNode, color?: string } & HeadingProps) => (
  <Heading as='h2' size='lg' color={color || 'primary.500'} {...props}>{children}</Heading>
)
