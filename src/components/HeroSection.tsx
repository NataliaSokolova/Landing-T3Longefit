'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { Box, Typography, Button, Container } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export default function HeroSection() {
  const heroImageRef = useRef<HTMLImageElement>(null)
  const theme = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      if (heroImageRef.current) {
        const hero = document.getElementById('hero')
        if (hero && window.scrollY < hero.offsetHeight) {
          heroImageRef.current.style.transform = `translateY(${window.scrollY * 0.25}px) scale(1.04)`
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Box
      component="section"
      id="hero"
      sx={{
        position: 'relative',
        minHeight: { xs: 650, sm: 650, md: '110vh' },
        display: 'flex',
        alignItems: { xs: 'flex-end', md: 'flex-end' },
        justifyContent: 'center',
        overflow: 'hidden',
        pb: { xs: 6, md: 0 },
      }}
    >
      <Image
        src="/hero.jpg"
        alt="LongevFit Hero"
        fill
        style={{
          objectFit: 'cover',
          objectPosition: 'center 130%',
        }}
        sizes="100vw"
        priority
        ref={heroImageRef}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.34) 100%)',
          zIndex: 1,
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box
          sx={{
            textAlign: 'center',
            color: 'white',
            pt: { xs: 7, sm: 10, md: 0 },
            pb: { xs: 3, sm: 8, md: 12 },
            px: { xs: 2, sm: 4, md: 0 },
            maxWidth: { xs: '100%', sm: 600, md: '100%' },
            mx: 'auto',
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', sm: '2.7rem', md: '4.5rem' },
              fontWeight: 700,
              mb: 3,
              lineHeight: 1.1,
              wordBreak: 'break-word',
              textShadow: '0 2px 16px rgba(0,0,0,0.25)',
            }}
          >
            LongevFit — More Than Fitness
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.5rem', md: '3rem' },
              fontWeight: 700,
              lineHeight: 1.2,
              mb: 4,
              opacity: 0.92,
              wordBreak: 'break-word',
              textShadow: '0 2px 8px rgba(0,0,0,0.18)',
            }}
          >
            Live longer. Think sharper. Feel stronger.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={scrollToWaitlist}
            sx={{
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.text.primary,
              fontSize: '1.1rem',
              px: 2,
              py: 1.5,
              borderRadius: '40px',
              textTransform: 'none',
              fontWeight: 600,
              width: 1,
              minHeight: 48,
              maxWidth: 190,
              mx: 'auto',
              display: 'block',
              mt: { xs: 2, sm: 3 },
              boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)',
              '&:hover': {
                backgroundColor: theme.palette.secondary.dark,
              },
            }}
          >
            Get Early Access
          </Button>
        </Box>
      </Container>
    </Box>
  )
} 