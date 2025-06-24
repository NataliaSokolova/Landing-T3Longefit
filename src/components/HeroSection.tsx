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
        height: '110vh',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        mx: { xs: 2, md: 10 },
        my: 10,
        borderRadius: '24px',
        overflow: 'hidden',
      }}
    >
      <Image
        src="/hero.jpg"
        alt="LongevFit Hero"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center 130%' }}
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
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          // borderRadius: '24px',
        }}
      />
      <Container maxWidth="lg">
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            color: 'white',
            mb: 12,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.7rem', md: '4.5rem' },
              fontWeight: 700,
              mb: 3,
              lineHeight: 1.1,
            }}
          >
            LongevFit — More Than Fitness
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              fontWeight: 400,
              mb: 4,
              opacity: 0.9,
            }}
          >
            Built for real people. For real life.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={scrollToWaitlist}
            sx={{
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.text.primary,
              fontSize: '1.25rem',
              px: 4,
              py: 1.5,
              borderRadius: '40px',
              textTransform: 'none',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: theme.palette.secondary.dark,
              },
            }}
          >
            Join Waitlist
          </Button>
        </Box>
      </Container>
    </Box>
  )
} 