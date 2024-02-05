import { Flex, ScaleFade } from '@chakra-ui/react'
import React from 'react'

export const FadeContainer = ({children}: { children: React.ReactNode}) => {
  return (
    <ScaleFade
    in={true}
    transition={{ enter: { duration: '1', ease: 'easeOut' } }}
    initialScale={0.8}>
    <Flex
      background="var(--border-background)"
      px=".5em"
      borderRadius="5%">
      <Flex
        background="var(--background)"
        p="1.5em 5em"
        borderRadius="5%"
        gap="3em">
          { children }
      </Flex>
    </Flex>
  </ScaleFade>

  )
}

