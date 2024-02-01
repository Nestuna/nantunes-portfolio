import { Box, VStack} from '@chakra-ui/react'
import { LinkItem } from '@/atoms/linkItem'

interface INavListProps {
  titles: string[]
}
export const NavList = ({ titles  }: INavListProps) => (
  <VStack as="nav" gap="2em" pr="4" align='flex-start'>
    {titles.map((itemTitle, index) => (
      <Box key={index}>
        <LinkItem title={itemTitle} href={`${itemTitle}`} />
      </Box>
    ))}
  </VStack>
)
