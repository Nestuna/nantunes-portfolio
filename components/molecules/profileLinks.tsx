import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import React from 'react'
import { HStack } from '@chakra-ui/react'


interface ProfileLinksProps {
  links: { type: string, href: string }[]
}

export const ProfileLinks = ({ links }: ProfileLinksProps) => {
  const size = '25'

  const getIcon = (linkType: string) => {
    switch (linkType) {
      case 'mail':
        return <EmailIcon boxSize={size}/>
      case 'phone':
        return <PhoneIcon boxSize={size}/>
      case 'linkedin':
        return <Image src='/images/linkedin.webp' alt='linkedin' width={size} height='50'/>
    }
  }
  return (
    <HStack gap='2em' justify='center'>
      {
        links.map((link, index) => (
          getIcon(link.type)
        ))
      }
    </HStack>
  )
}
