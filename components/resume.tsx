import { Flex, Stack } from '@chakra-ui/react'

import { Experience } from '@/app/types'
import { ExperienceCard } from './cards/experienceCard'
import { Title } from '@/components/text/title'
import { SubTitle } from '@/components/text/subTitle'

type ExperienceProps = { experiences: Record<'pro' | 'training', Experience[]> }
export const Resume = ({ experiences }: ExperienceProps) => {
  return (
    <Stack id="resume" gap="2em">
      <Title color='accent.300'>Parcours</Title>
      <Flex justifyContent='center'>
        <SubTitle color='accent.100'>Professionnel</SubTitle>
      </Flex>
      <Stack spacing="2em" pb="2em">
        {experiences.pro.map((experience: Experience, index: number) => (
          <ExperienceCard experience={experience} key={index} />
        ))}
      </Stack>
      <Flex justifyContent='center'>
        <SubTitle color='accent.100'>Formation</SubTitle>
      </Flex>
      <Stack spacing="2em" pb="2em">
        {experiences.training.map((experience: Experience, index: number) => (
          <ExperienceCard experience={experience} key={index} />
        ))}
      </Stack>
    </Stack>
  )
}
export default Resume
