// app/providers.tsx
'use client'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    primary: {
      500: '#FFAA6B',
      700: '#ffa220'
    },
    secondary: '#de8faf',
    foreground: '#292436',

  }
})

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
