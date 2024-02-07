import { Heading } from '@chakra-ui/react'
import React from 'react'

export const Title = ({ children }: { children: React.ReactNode }) => (
  <Heading as='h2' size='lg'>{children}</Heading>
)
