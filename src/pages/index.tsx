// pages/index.tsx
'use client'

import Navbar from '~/components/Header'
import HeroSection from '~/components/HeroSection'
import ProjectSection from '~/components/ProjectSection'
import ProblemSection from '~/components/ProblemSection'
import SolutionSection from '~/components/SolutionSection'
import WaitlistSection from '~/components/WaitlistSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProjectSection />
      <ProblemSection />
      <SolutionSection />
      <WaitlistSection />
    </>
  )
}
