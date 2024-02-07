import { Heading } from '@chakra-ui/react'
import React from 'react'

export const SubTitle = ({ children, color }: { children: React.ReactNode, color?: string }) => (
  <Heading as='h3' size='md' color={color || 'primary.500'}>{children}</Heading>
)
