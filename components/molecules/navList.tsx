import { Box, HStack} from '@chakra-ui/react'
import { NavLinkItem } from '@/components/atoms/navLinkItem'

interface INavListProps {
  links: {
    title: string,
    href: string
  }[]
}
export const NavList = ({ links }: INavListProps) => (
  <HStack as="nav" gap="2em" pr="4" align='flex-start'
    sx={{
    'box-shadow':
      `inset linear-gradient(
        to bottom,
        black calc(100% - 48px),
        transparent 100%
      )`
    }}>
    {links.map((link: any, index: number) => (
      <Box key={index}>
        <NavLinkItem title={link.title} href={`${link.href}`} />
      </Box>
    ))}
  </HStack>
)
