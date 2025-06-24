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
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.grey[50],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                mb: 4,
                color: theme.palette.text.primary,
              }}
            >
              LongevFit is your AI-powered health companion
            </Typography>
            
            <List sx={{ py: 0 }}>
              {solutionFeatures.map((feature, index) => (
                <ListItem key={index} sx={{ px: 0, py: 1 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <CheckCircleIcon 
                      sx={{ 
                        color: theme.palette.secondary.main,
                        fontSize: '1.5rem'
                      }} 
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={feature}
                    sx={{
                      '& .MuiListItemText-primary': {
                        fontSize: '1.1rem',
                        lineHeight: 1.6,
                        color: theme.palette.text.secondary,
                      }
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
          
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                src="/images/4582fcc01fbc443795404c60ae2a6ea2.png"
                alt="LongevFit iPhone Mockup"
                width={320}
                height={640}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '320px',
                  borderRadius: '32px',
                  boxShadow: '0 8px 32px 0 rgba(0,0,0,0.22)',
                  background: '#222'
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
} 