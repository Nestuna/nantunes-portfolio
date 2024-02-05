export interface Skill  {
  name: string,
  title?: string
}

export interface Project  {
  id: number,
  year: number,
  title: string
  projectContext: string,
  description: string
  stack: string [],
  repositories: { title: string, href: string }[],
  projectLink: string
}

