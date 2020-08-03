export type Image = {
  alternativeText: string
  url: string
}

export type Button = {
  label: string
  url: string
}

export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: Button
  image: Image
}

export type SectionAboutProjectProps = {
  image: Image
  title: string
  description: string
}

export type TechIcon = {
  title: string
  icon: Image
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type Concept = {
  title: string
}

export type SectionConceptsProps = {
  title: string
  concepts: Concept[]
}

export type Module = {
  title: string
  subtitle: string
  description: string
}

export type SectionModuleProps = {
  title: string
  modules: Module[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  priceDiscount: number
  benefits: string
  button: Button
}

export type SocialLink = {
  title: string
  url: string
}

export type Author = {
  name: string
  role: string
  photo: Image
  description: string
  socialLinks: SocialLink[]
}

export type SectionAboutUsProps = {
  title: string
  authors: Author[]
}

export type Review = {
  id: number
  name: string
  text: string
  photo?: Image
}

export type SectionReviewsProps = {
  title: string
  reviews: Review[]
}

export type Question = {
  question: string
  answer: string
}

export type SectionFaqProps = {
  title: string
  questions: Question[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModule: SectionModuleProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
