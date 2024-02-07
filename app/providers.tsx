// app/providers.tsx
'use client'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    primary: {
      300: '#FFAA6B',
      500: '#FFAA6B',
      700: '#ffa220'
    },
    secondary: {
      300: '#aea4ca80',
      500: '#aea4ca',
      700: '#745db3'
    },
    accent: {
      100: '#ee8aa7',
      300: '#ef4e7b',
      500: '#c72b57'
    },
    foreground: '#292436',

  }
})

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
