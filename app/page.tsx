import { SlideFade, Stack  } from '@chakra-ui/react'

import Projects from '@/components/projects'
import About from '@/components/about'
import Resume from '@/components/resume'

import { about, projects, experiences } from './content'


const Home = () => {
  return (
    <SlideFade
      in={true}
      transition={{
        enter: { duration: '1.5', ease: 'easeOut', delay: 1 },
      }}
      offsetY="15vw">
      <Stack h={{base: 'auto', lg :"75vh"}}>
        <About text={about}/>
        <Resume experiences={experiences}/>
        <Projects projects={projects} />
      </Stack>
    </SlideFade>
  )
}

export default Home
