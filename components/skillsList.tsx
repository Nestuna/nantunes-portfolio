import reactImage from '@/images/react.png'
import angularImage from '@/images/angular.png'
import { Wrap, WrapItem } from '@chakra-ui/react'
import { BadgeCard } from './atoms/badgeCard'

export const SkillsGrid = () => {
  const skills = ['angular', 'react', 'angular','react', 'angular','react', 'angular','react', 'angular',]
  const skillImages: Record<string, object> = {
    react: reactImage,
    angular: angularImage
  }

  return (
    <Wrap id="skills" spacing="1em" py='1em' justify='space-around'>
      {skills.map((skill: string, index: number) => (
        <WrapItem key={index}>
          <BadgeCard title={skill} img={skillImages[skill]} />
        </WrapItem>
      ))}
    </Wrap>
  )
}
