'use client'

import Image from 'next/image'
import { Box, Typography, Container, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const solutionFeatures = [
  'Personalized fitness, nutrition, and recovery plans that adapt to your life.',
  'Real-time adjustments based on your feedback, schedule, and progress.',
  'Holistic approach: workouts, meals, sleep, stress, and more — all connected.',
  'Guidance from real coaches and AI, so you\'re never alone.',
  'Progress tracking that celebrates consistency, not just intensity.'
]

export default function SolutionSection() {
  const theme = useTheme()

  return (
    <Box
      component="section"
      id="solution"
      sx={{
        py: { xs: 8, md: 16 },
        background: 'linear-gradient(120deg, #fff 60%, #f7f7f7 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow behind image */}
      <Box
        sx={{
          position: 'absolute',
          left: { xs: '50%', md: 80 },
          top: { xs: 60, md: '50%' },
          transform: { xs: 'translate(-50%, 0)', md: 'translate(0, -50%)' },
          width: { xs: 320, md: 480 },
          height: { xs: 320, md: 480 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, #eaffc2 0%, #fff 100%)',
          filter: 'blur(60px)',
          zIndex: 0,
          opacity: 0.5,
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 8, md: 12 },
          }}
        >
          {/* Left: Product Image */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: { xs: 220, md: 460 }, height: { xs: 420, md: 640 }, position: 'relative' }}>
              <Image
                src="/img1.jpg"
                alt="LongevFit iPhone Mockup"
                fill
                style={{
                  objectFit: 'contain',
                  borderRadius: '32px',
                  boxShadow: '0 8px 32px 0 rgba(0,0,0,0.10)',
                  background: '#fff',
                }}
                sizes="(max-width: 600px) 220px, 340px"
                priority
              />
            </Box>
          </Box>
          {/* Right: Text & Features */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              variant="h2"
              sx={{
                color: '#111',
                fontWeight: 800,
                fontSize: { xs: '2rem', md: '2.8rem' },
                mb: 2,
                lineHeight: 1.1,
                letterSpacing: '-1px',
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              LongevFit is your <span style={{ color: '#BBF246' }}>AI-powered</span> health companion
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: '#86868B',
                fontWeight: 400,
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                mb: 4,
                textAlign: { xs: 'center', md: 'left' },
                maxWidth: 500,
              }}
            >
              One app. All your wellness. Personalized by AI, backed by science.
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: 2,
                maxWidth: 500,
                mx: { xs: 'auto', md: 0 },
              }}
            >
              {solutionFeatures.map((feature, i) => (
                <Box
                  key={i}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    bgcolor: '#fff',
                    borderRadius: '999px',
                    boxShadow: '0 2px 12px 0 rgba(0,0,0,0.04)',
                    px: 2.5,
                    py: 1.5,
                    gap: 1.5,
                    minWidth: 0,
                  }}
                >
                  <CheckCircleIcon sx={{ color: '#BBF246', fontSize: 22 }} />
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: '1rem', md: '1.08rem' },
                      color: '#222',
                      fontWeight: 500,
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {feature}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
} 