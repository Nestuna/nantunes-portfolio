import reactImage from '@/images/react.png'
import angularImage from '@/images/angular.png'
import { ScaleFade, Wrap, WrapItem } from '@chakra-ui/react'
import { BadgeCard } from './atoms/badgeCard'

export const SkillsGrid = () => {
  const skills = [
    'typescript',
    'angular',
    'react',
    'jest',
    'webdriverio',
    'python',
    'django',
    'gitlabci',
    'docker'
  ]
  const skillImages: Record<string, object> = {
    react: reactImage,
    angular: angularImage,
  }

  return (
    <Wrap id="skills" spacing="1em" py="1em" justify="space-around">
      {
        skills.map((skill: string, index: number) => {
          return (
            <WrapItem key={index}>
              <ScaleFade
                in={true}
                initialScale={0.1}
                transition={{ enter: { duration: .5, delay: index / 6 } }}>
                <BadgeCard title={skill} img={`/images/${skill}.png`} />
              </ScaleFade>
            </WrapItem>
          )

        })
      }
    </Wrap>
  )
}
