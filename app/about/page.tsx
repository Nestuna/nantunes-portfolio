import {  Stack, Text } from "@chakra-ui/react"
import { Card, CardBody, Wrap, WrapItem } from '@chakra-ui/react'
import Image from 'next/image'

import reactImage from '@/images/react.png'
import angularImage from '@/images/angular.png'

const About = () => (
  <Stack>
    <Text>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
          <br/><br/>
          Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested.
    </Text>
    <Skills />
  </Stack>
)

const Skills = () => {
  const skills = ['react', 'angular', 'react', 'angular','react', 'angular','react', 'angular','react', 'angular',]
  const skillImages: Record<string, object> = {
    react: reactImage,
    angular: angularImage
  }

  return (
    <Wrap id="skills" spacing="2em" justify="center" py='2em'>
      {skills.map((skill: string, index: number) => (
        <WrapItem key={index}>
          <SkillCard skill={skill} img={skillImages[skill]} />
        </WrapItem>
      ))}
    </Wrap>
  )
}

const SkillCard = ({ skill, img }: { skill: string, img: any }) => {
  return (
    <Card bgColor='foreground'>
      <CardBody>
        <Image
          src={img}
          alt={skill}
          width="75"
          height="75"
        />
      </CardBody>
    </Card>
  )
}

export default About



