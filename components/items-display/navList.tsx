import { Box, HStack} from '@chakra-ui/react'
import { NavLinkItem } from '@/components/links/navLinkItem'

interface INavListProps {
  links: {
    title: string,
    href: string
  }[]
}
export const NavList = ({ links }: INavListProps) => (
  <HStack as="nav" className='text-gradient' gap="2em" pr="4">
    {links.map((link: any, index: number) => (
      <NavLinkItem title={link.title} href={`${link.href}`} key={index} />
    ))}
  </HStack>
)
