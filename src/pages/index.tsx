// pages/index.tsx

import Head from 'next/head'
import Navbar from '~/components/Header'
import HeroSection from '~/components/HeroSection'
import ProjectSection from '~/components/ProjectSection'
import ProblemSection from '~/components/ProblemSection'
import SolutionSection from '~/components/SolutionSection'
import HowItWorksSection from '~/components/HowItWorksSection'
import FeaturesGridSection from '~/components/FeaturesGridSection'
import WaitlistSection from '~/components/WaitlistSection'
import TestimonialsSection from '~/components/TestimonialsSection';
import Footer from '~/components/Footer'
export default function Home() {
  return (
    <>
<Head>
  {/* SEO Title & Description */}
  <title>LongevFit — AI-Powered Longevity App</title>
  <meta name="title" content="LongevFit — AI Wellness for Longevity & Strength" />
  <meta name="description" content="LongevFit helps you live longer, feel stronger, and think sharper with AI-powered fitness, nutrition, breathwork, and wellness tracking." />

  {/* Open Graph / Facebook */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.longevfit.com/" />
  <meta property="og:title" content="LongevFit — AI Wellness for Longevity & Strength" />
  <meta property="og:description" content="Live longer, feel stronger, and think sharper with LongevFit's AI wellness app." />
  <meta property="og:image" content="https://www.longevfit.com/og-image.jpg" />

  {/* Twitter */}
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://www.longevfit.com/" />
  <meta property="twitter:title" content="LongevFit — AI Wellness for Longevity & Strength" />
  <meta property="twitter:description" content="LongevFit helps you live longer, feel stronger, and think sharper with AI-powered fitness, nutrition, breathwork, and wellness tracking." />
  <meta property="twitter:image" content="https://www.longevfit.com/og-image.jpg" />

  {/* JSON-LD Structured Data */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "LongevFit",
        "operatingSystem": "iOS, Android",
        "applicationCategory": "HealthApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "description": "AI-powered fitness and wellness app for longevity, strength, and mental clarity. Includes workouts, breathwork, nutrition guidance, and habit tracking.",
        "screenshot": "https://www.longevfit.com/preview-image.jpg",
        "url": "https://www.longevfit.com",
        "creator": {
          "@type": "Organization",
          "name": "CoreAI"
        }
      })
    }}
  />
</Head>


      <Navbar />
      <HeroSection />
      <ProjectSection />
      <FeaturesGridSection />
  
      {/* <HowItWorksSection /> */}
 
 
      <SolutionSection />
      <Footer />
    </>
  )
}
