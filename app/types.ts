export interface Skill  {
  name: string,
  title?: string,
  level?: 1 | 2 | 3
}

export interface Project  {
  year: string,
  title: string
  projectContext: string,
  description: string
  stack: string [],
  repositories: { title: string, href: string }[],
  projectLink: string
}

export interface ILink {
  title: string,
  href: string
}
