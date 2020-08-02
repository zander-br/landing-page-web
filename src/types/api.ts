export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string

  button: {
    label: string
    url: string
  }

  image: {
    alternativeText: string
    url: string
  }
}

export type SectionAboutProjectProps = {
  image: {
    alternativeText: string
    url: string
  }
  title: string
  description: string
}

export type SectionTechProps = {
  title: string
  techIcons: {
    title: string
    icon: {
      alternativeText: string
      url: string
    }
  }[]
}

type Concept = {
  title: string
}

export type SectionConceptsProps = {
  title: string
  concepts: Concept[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
}
