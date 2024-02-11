'use client'
import { Text } from '@chakra-ui/react'
import { LinkItem } from './linkItem'

interface ILinkItemProps {
  title: string
  href: string
}
export const NavLinkItem = ({ title, href }: ILinkItemProps) => {
  return (
    <LinkItem href={href}>
      <Text fontSize={{ base: 'sm', sm: 'lg'}}>| {title} </Text>
    </LinkItem>
  )
}
