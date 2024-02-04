type SkillItem = {
  title: string,
  img: string | object,
}

type Project = {
  id: number,
  title: string,
  description: string
}

type Content = {
  about: string,
  skills: SkillItem[],
  projects: Project[]
}

