export interface Skill  {
  name: string,
  title?: string,
  level?: 1 | 2 | 3
}

export interface Project  {
  year: string,
  title: string
  projectContext: string,
  description: string,
  stack: string [],
  repositories: { title: string, href: string }[],
  projectLink: string
}

export interface Experience {
  year: string,
  title: string,
  organisation: string,
  description: string
  skills: string [],
}

export interface CardContent {
  title: string,
  subtitle: string,
  description: string,
  tags: string[],
  links?: ILink[]
}

export interface ILink {
  title: string,
  href: string
}
