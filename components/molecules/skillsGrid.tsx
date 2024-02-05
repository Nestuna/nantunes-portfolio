import { ScaleFade, Wrap, WrapItem } from '@chakra-ui/react'
import { BadgeCard } from '../atoms/badgeCard'
import { Skill } from '@/app/types'

interface SkillsGridProps {
  skills: Skill[]
}
export const SkillsGrid = ({ skills }: SkillsGridProps) => {
  return (
    <Wrap id="skills" spacing="1em" py="1em" justify="space-around">
      {skills.map((skill: Skill, index: number) => {
        return (
          <WrapItem key={index}>
            <ScaleFade
              in={true}
              initialScale={0.1}
              transition={{ enter: { duration: 0.5, delay: index / 6 } }}>
              <BadgeCard
                title={skill.title || skill.name}
                img={`/images/${skill.name}.png`}
              />
            </ScaleFade>
          </WrapItem>
        )
      })}
    </Wrap>
  )
}
