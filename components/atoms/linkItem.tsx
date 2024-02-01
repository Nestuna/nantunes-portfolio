import { Box, Flex, Link, Slide } from '@chakra-ui/react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

interface ILinkItemProps {
  title: string
  href: string
}
export const LinkItem = ({ title, href }: ILinkItemProps) => {
  const path = usePathname()
  const active = path.slice(1) === href

  return (
    <Flex
      gap="1em"
      color={active ? 'var(--primary)' : ''}
      _hover={{ color: 'var(--primary)' }}>
      <Box flex="1">_________</Box>
      <Link
        as={NextLink}
        href={href}
        flex="1"
        sx={ active ?
          {
            color: 'var(--primary)',
            padding: '0 0 0 2em',
          } :
          {
          transition: 'all .5s ease-in-out',
          padding: '0 0 0 0',
        }}
        _hover={{
          color: 'var(--primary)',
          transition: 'all .5s ease-in-out',
          padding: '0 0 0 2em',
        }}>
        {title}
      </Link>
    </Flex>
  )
}
