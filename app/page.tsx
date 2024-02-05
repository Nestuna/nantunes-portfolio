import About from '@/components/about'
import { SlideFade, Stack, VStack } from '@chakra-ui/react'
import Projects from '../components/projects'

import { about, skills, projects } from './content'


const Home = () => {
  return (
    <SlideFade
      in={true}
      transition={{
        enter: { duration: '1.5', ease: 'easeOut' },
      }}
      offsetX="10vw">
      <Stack h="75vh">
        <About text={about}/>
        <Projects projects={projects} />
      </Stack>
    </SlideFade>
  )
}

export default Home
