import React from "react";
import { Box, Typography, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import BoltIcon from '@mui/icons-material/Bolt';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PsychologyIcon from '@mui/icons-material/Psychology';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';

export default function ProjectSection() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        py: 8,
        bgcolor: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
            gap: 6,
            alignItems: 'center',
            mb: 12,
          }}
        >
          {/* Left Column - Text Content */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.5rem', md: '3rem' },
                fontWeight: 700,
                lineHeight: 1.2,
                color: '#111',
                '& span:last-child': {
                  color: '#86868B',
                },
              }}
            >
              <span>LongeFit</span>
              <span> - Project for a Longer, Better Life</span>
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                color: 'text.secondary',
                lineHeight: 1.6,
                fontWeight: 400,
              }}
            >
              In a world where burnout, stress, and quick-fix fitness fads dominate, LongevFit offers a smarter, more personalized path — one where your workouts, nutrition, and well-being are deeply connected and tailored to you.
            </Typography>
          </Box>

          {/* Right Column - Visual Element */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', lg: 'flex-end' },
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                maxWidth: 400,
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: 320,
                  background: 'linear-gradient(135deg, #BBF247 0%, #eaffc2 100%)',
                  borderRadius: '24px',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      bgcolor: 'rgba(255, 255, 255, 0.2)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                    }}
                  >
                    <BoltIcon
                      sx={{
                        fontSize: 40,
                        color: 'white',
                      }}
                    />
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '1.5rem',
                    }}
                  >
                    Your Personal Health Journey
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(134, 134, 139, 0.8)',
                      fontSize: '1.125rem',
                    }}
                  >
                    Start here!
                  </Typography>
                </Box>
              </Box>
              {/* Decorative elements */}
              <Box
                sx={{
                  position: 'absolute',
                  top: -16,
                  right: -16,
                  width: 32,
                  height: 32,
                  bgcolor: '#BBF247',
                  borderRadius: '50%',
                  opacity: 0.6,
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -16,
                  left: -16,
                  width: 24,
                  height: 24,
                  bgcolor: '#BBF247',
                  borderRadius: '50%',
                  opacity: 0.4,
                }}
              />
            </Box>
          </Box>
        </Box>

        {/* First Row - 2 Columns */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 4,
            mb: 8,
          }}
        >
          {/* Left Column - Smart Workouts */}
          <Box
            sx={{
              p: 4,
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
              border: '1px solid rgba(0,0,0,0.05)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              },
            }}
          >
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #007AFF 0%, #5856D6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 3,
              }}
            >
              <FitnessCenterIcon sx={{ fontSize: 28, color: 'white' }} />
            </Box>
            <Typography
              variant="h4"
              sx={{
                fontSize: '1.75rem',
                fontWeight: 600,
                mb: 2,
                color: '#1d1d1f',
              }}
            >
              Smart Workouts
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.125rem',
                lineHeight: 1.6,
                color: '#86868b',
                mb: 3,
              }}
            >
              AI-powered training that adapts to your progress, energy levels, and goals. Every workout feels fresh and challenging.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: '#007AFF',
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: '#007AFF',
                  fontWeight: 500,
                  fontSize: '0.875rem',
                }}
              >
                Learn more
              </Typography>
            </Box>
          </Box>

          {/* Right Column - Mindful Nutrition */}
          <Box
            sx={{
              p: 4,
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
              border: '1px solid rgba(0,0,0,0.05)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              },
            }}
          >
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #34C759 0%, #30D158 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 3,
              }}
            >
              <RestaurantIcon sx={{ fontSize: 28, color: 'white' }} />
            </Box>
            <Typography
              variant="h4"
              sx={{
                fontSize: '1.75rem',
                fontWeight: 600,
                mb: 2,
                color: '#1d1d1f',
              }}
            >
              Mindful Nutrition
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.125rem',
                lineHeight: 1.6,
                color: '#86868b',
                mb: 3,
              }}
            >
              Personalized meal plans that fuel your workouts and support your recovery. No more guessing what to eat.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: '#34C759',
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: '#34C759',
                  fontWeight: 500,
                  fontSize: '0.875rem',
                }}
              >
                Learn more
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Second Row - Single Column */}
        <Box
          sx={{
            p: 6,
            borderRadius: '24px',
            background: 'linear-gradient(135deg, #1d1d1f 0%, #2d2d30 100%)',
            color: 'white',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at 30% 20%, rgba(187, 242, 70, 0.1) 0%, transparent 50%)',
              pointerEvents: 'none',
            },
          }}
        >
          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
            }}
          >
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #BBF246 0%, #eaffc2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 2,
              }}
            >
              <PsychologyIcon sx={{ fontSize: 40, color: '#1d1d1f' }} />
            </Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 700,
                mb: 2,
                color: 'white',
              }}
            >
              Holistic Wellness
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: '1.25rem',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Beyond just fitness. We integrate mental health, sleep tracking, and stress management to give you a complete picture of your well-being.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                mt: 2,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <MonitorHeartIcon sx={{ fontSize: 20, color: '#BBF246' }} />
                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontWeight: 500,
                  }}
                >
                  Sleep tracking
                </Typography>
              </Box>
              <Box
                sx={{
                  width: 4,
                  height: 4,
                  borderRadius: '50%',
                  bgcolor: 'rgba(255, 255, 255, 0.3)',
                }}
              />
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <PsychologyIcon sx={{ fontSize: 20, color: '#BBF246' }} />
                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontWeight: 500,
                  }}
                >
                  Stress management
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
} 