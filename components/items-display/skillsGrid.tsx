'use client'

import { ScaleFade, Wrap, WrapItem, useBoolean } from '@chakra-ui/react'
import { BadgeCard } from '../cards/badgeCard'
import { Skill } from '@/app/types'
import { useEffect, useState } from 'react'

interface SkillsGridProps {
  skills: Skill[]
}
export const SkillsGrid = ({ skills }: SkillsGridProps) => {
  const [start, setStart] = useState(false)

  useEffect(() => {
    setTimeout(() => setStart(true), 1000)
  }, [])


  return (
    <Wrap id="skills" spacing="3em" py="1em" maxW='400px' justify='space-evenly' >
      {skills.map((skill: Skill, index: number) => {
        return (
          <WrapItem key={index}>
            <ScaleFade
              in={start}
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
