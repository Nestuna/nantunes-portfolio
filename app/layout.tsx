'use client'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Box, Container, Fade, Flex, ScaleFade, SlideFade } from '@chakra-ui/react'
import { Header } from '@/app/header'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [pageIsMounted, setPageIsMounted] = useState(false)

  useEffect(() => {
    setPageIsMounted(true)
  }, [])

  return (
    <html lang="en">
      <body>
        <Providers>
          <Container maxW="75vw" minH='100vh' p='1em' color="whitesmoke" opacity={'.9'}>
            <ScaleFade in={pageIsMounted} transition={ { enter: { duration: '1'}}}>
              <Flex background='var(--border-background)' px='.5em' borderRadius='5%'>
                  <Flex background='var(--background)' p='1.5em 5em' borderRadius='5%' gap='3em'>
                    <Box flex="2">
                      <Fade in={pageIsMounted}
                            transition={ { enter: { duration: '2', ease: 'easeIn'}}}>
                        <Header />
                      </Fade>
                    </Box>
                    <Box id="main-content" flex="3" h='90vh' pr='2em' overflowY='auto'>
                      <Fade in={pageIsMounted} transition={ { enter: { duration: '3', ease: 'easeIn'}}} >
                        {children}
                      </Fade>
                    </Box>
                  </Flex>
                </Flex>
            </ScaleFade>
          </Container>
        </Providers>
      </body>
    </html>
  )
}
