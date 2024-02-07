import { Heading } from '@chakra-ui/react'
import React from 'react'

export const Title = ({ children, color }: { children: React.ReactNode, color?: string }) => (
  <Heading as='h2' size='lg' color={color || 'primary.500'}>{children}</Heading>
)
