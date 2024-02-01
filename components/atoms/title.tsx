import { Heading } from '@chakra-ui/react'

export const Title = ({ text }: { text: string }) => (
  <Heading as='h2' size='lg' color='primary'>{text}</Heading>
)
