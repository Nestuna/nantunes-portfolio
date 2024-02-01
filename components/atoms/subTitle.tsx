import { Heading } from '@chakra-ui/react'

export const Title = ({ text }: { text: string }) => (
  <Heading as='h3' size='lg' color='primary'>{text}</Heading>
)
