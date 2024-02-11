import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import React from 'react'
import { Box, Button, HStack, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text, Tooltip } from '@chakra-ui/react'
import { LinkItem } from '../links/linkItem'


interface ContactIconButtonsProps {
  links: { type: string, href: string, text?: string }[]
}

export const ContactIconButtons = ({ links }: ContactIconButtonsProps) => {
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
        links.map((link, index) => {
          if (link.type !== 'linkedin') {
            return (
              <Popover key={index}>
                <PopoverTrigger>
                  <Box _hover={{cursor: 'pointer'}}>{getIcon(link.type)}</Box>
                </PopoverTrigger>
                <PopoverContent bg='transparent' borderColor='transparent' w='fit-content'>
                  <PopoverArrow bg='transparent' />
                  <PopoverBody display='flex' alignItems='center' w='fit-content'>
                    <Button colorScheme='orange' mx='auto'><LinkItem href={link.href} color='whitesmoke'>{link.text}</LinkItem></Button>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            )
          } else {
            return <LinkItem href={link.href}>{getIcon('linkedin')}</LinkItem>
          }
        })
      }
    </HStack>
  )
}
