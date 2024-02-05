import { Box, VStack} from '@chakra-ui/react'
import { LinkItem } from '@/atoms/linkItem'

interface INavListProps {
  links: {
    title: string,
    href: string
  }[]
}
export const NavList = ({ links }: INavListProps) => (
  <VStack as="nav" gap="2em" pr="4" align='flex-start'>
    {links.map((link: any, index: number) => (
      <Box key={index}>
        <LinkItem title={link.title} href={`${link.href}`} />
      </Box>
    ))}
  </VStack>
)
