import { Box, Flex, VStack, Link, Heading, Text, Stack } from '@chakra-ui/react'
import { Title } from '../atoms/title'
import { ProfileLinks } from './profileLinks'

export const MainTitle = () => {
  const profileLinks = [
    { type: 'mail', href: '' },
    { type: 'phone', href: '' },
    { type: 'linkedin', href: '' },
  ]
  return (
    <VStack gap="2em">
      <VStack className='main-title'>
        <Heading as="h1" size="2xl" >
          Nicolas Antunes
        </Heading>
        <Title>Fullstack Developper</Title>
      </VStack>
      <ProfileLinks links={profileLinks} />
    </VStack>
  )
}
