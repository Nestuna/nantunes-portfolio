import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'


type ProjectsProps = { projects: Project[] }
export const ProjectsCardList = ({ projects }: ProjectsProps) => {
  return (
    <Wrap id="projects" spacing="2em" justify="center">
      {projects.map((project: Project, index: number) => (
        <WrapItem key={index}>
         <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          bgColor='foreground'
          color='whitesmoke'>
          <Stack>
            <CardBody>
              <Heading size='md'>{ project.title }</Heading>

              <Text py='2'>
                Caffè latte is a coffee beverage of Italian origin made with espresso
                and steamed milk.
              </Text>
            </CardBody>

            <CardFooter alignContent={'end'}>
              <Button variant='solid' colorScheme='orange'>
                See details
              </Button>
            </CardFooter>
            </Stack>
          </Card>
        </WrapItem>
      ))}
    </Wrap>
  )
}
