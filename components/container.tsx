import { Flex, ScaleFade } from '@chakra-ui/react'
import React from 'react'

interface FadeContainerProps { children: React.ReactNode }
export const FadeContainer = ({ children, ...props }: any) => (
  <ScaleFade
    in={true}
    transition={{ enter: { duration: '1', ease: 'easeOut' } }}
    initialScale={0.8}>
    <Flex
      m='auto'
      background="var(--border-background)"
      px={{base: '.1em', lg: ".5em"}}
      borderRadius={{base: 0, lg: "5%"}}
      maxW={{ lg: '90vw', xl: '75vw'}}
      minH="100vh"
      color="whitesmoke"
      opacity={'.9'}>
      <Flex
        background="var(--background)"
        p="1.5em"
        borderRadius={{base: 0, lg: "5%"}}
        gap="3em"
        flexDirection={['column', null, null, 'row']}
        w={{sm: '100vw'}}>
          { children }
      </Flex>
    </Flex>
  </ScaleFade>
)

