import {
  ScaleFade,
  Tooltip,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { Skill } from '@/app/types'
import { Image } from '@chakra-ui/react'

interface SkillsGridProps {
  skills: Skill[]
}
export const SkillsGrid = ({ skills }: SkillsGridProps) => {
  return (
    <Wrap
      id="skills"
      spacing="3em"
      py="1em"
      maxW="400px"
      justify="space-evenly">
      {skills.map((skill: Skill, index: number) => {
        const title = skill.title || skill.name
        return (
          <WrapItem key={index}>
            <ScaleFade
              in={true}
              initialScale={0.1}
              transition={{ enter: { duration: 0.5, delay: index / 6 } }}>
              <Tooltip label={title.toUpperCase()}>
                <Image
                  src={`/images/${skill.name}.png`}
                  alt={title}
                  boxSize={40}
                />
              </Tooltip>
            </ScaleFade>
          </WrapItem>
        )
      })}
    </Wrap>
  )
}
