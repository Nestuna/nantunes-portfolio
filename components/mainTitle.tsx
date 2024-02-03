import { Box, Flex, VStack, Link, Heading, Text } from '@chakra-ui/react'
import { Title } from './atoms/title'

export const MainTitle = () => (
  <VStack gap='1em' align='flex-start'>
    <Heading as="h1" size='2xl' color='primary'>Nicolas Antunes</Heading>
    <Title text={'Fullstack Developper'}/>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Text>
  </VStack>
)
