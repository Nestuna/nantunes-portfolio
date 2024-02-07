import About from '@/components/about'
import { SlideFade, Stack  } from '@chakra-ui/react'
import Projects from '../components/projects'

import { about, projects, experiences } from './content'
import Resume from '@/components/resume'


const Home = () => {
  return (
    <SlideFade
      in={true}
      transition={{
        enter: { duration: '1.5', ease: 'easeOut' },
      }}
      offsetY="15vw">
      <Stack h="75vh">
        <About text={about}/>
        <Projects projects={projects} />
        <Resume experiences={experiences}/>
      </Stack>
    </SlideFade>
  )
}

export default Home
