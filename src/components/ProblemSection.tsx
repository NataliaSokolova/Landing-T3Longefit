'use client'

import Image from 'next/image'
import { Box, Typography, Container, Grid, Paper } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const problemCards = [
  {
    icon: '/images/2624acd560d84a19bd35621f25dbe68f.png',
    alt: 'Busy Professional Icon',
    text: 'Busy professionals want to be healthier — but they don\'t have the time, guidance, or consistency to keep going.'
  },
  {
    icon: '/images/34c19ba9cfee494abecc3fd34fe0eade.png',
    alt: 'Disconnected Apps Icon',
    text: 'They jump between fitness apps, diets, and mental health tools that don\'t talk to each other.'
  },
  {
    icon: '/images/19f9888bb0384033bcebb2dd9a1852db.png',
    alt: 'Intensity vs Longevity Icon',
    text: 'Most platforms sell intensity, not longevity.'
  }
]

export default function ProblemSection() {
  const theme = useTheme()

  return (
    <Box
      component="section"
      id="problem"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            fontWeight: 700,
            mb: { xs: 6, md: 8 },
            color: theme.palette.text.primary,
          }}
        >
          Fitness that fits life — not the other way around
        </Typography>
        
        <Grid container columns={12} columnSpacing={4}>
          {problemCards.map((card, index) => (
            <Grid span={{ xs: 12, md: 4 }} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  textAlign: 'center',
                  backgroundColor: 'transparent',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mb: 3,
                  }}
                >
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #eaffc2 0%, #BBF246 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 2px 8px 0 rgba(187,242,70,0.10)',
                    }}
                  >
                    <Typography
                      sx={{
                        color: '#1d1d1f',
                        fontWeight: 700,
                        fontSize: '1.5rem',
                        letterSpacing: '-1px',
                        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
                      }}
                    >
                      LF
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    lineHeight: 1.6,
                    color: theme.palette.text.secondary,
                  }}
                >
                  {card.text}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
} 