import React from "react";
import { Box, Typography, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import BoltIcon from '@mui/icons-material/Bolt';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PsychologyIcon from '@mui/icons-material/Psychology';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import HowItWorksSection from "./HowItWorksSection";
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
              <span> - Your AI Companion for a Longer, Sharper, Stronger Life</span>
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
is the world’s first AI-powered Longevity Operating System — a daily companion that helps users live longer, think sharper, and feel stronger through personalized science-backed protocols across fitness, brain health, nutrition, and recovery.            </Typography>
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
                  height: 220,
                  background: ' #BBF247',
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
                      width: 50,
                      height: 50,
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
                        fontSize: 30,
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
                    variant="h4"
                    sx={{
                      color: "white",
                      fontSize: '1.5rem',
                      fontWeight: 700,
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
                  width: 32,
                  height: 32,
                  bgcolor: '#BBF247',
                  borderRadius: '50%',
                  opacity: 0.4,
                }}
              />
            </Box>
          </Box>
        </Box>

        {/* THE PROBLEM WE SOLVE SECTION */}
        <Container maxWidth="lg" sx={{ mt: { xs: 10, md: 16 }, mb: { xs: 10, md: 16 } }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.5rem', sm: '2.2rem', md: '3.5rem' },
                fontWeight: 800,
                lineHeight: 1.1,
                textAlign: 'center',
                background: 'linear-gradient(90deg, #BBF246 0%, #eaffc2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
                letterSpacing: '-1px',
              }}
            >
              Fitness that fits life — not the other way around
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'text.secondary',
                fontWeight: 400,
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.5rem' },
                textAlign: 'center',
                maxWidth: 600,
                mb: 0,
                opacity: 0.85,
              }}
            >
              Why most people struggle with health: fragmented tools, lack of time, and no holistic support. LongevFit brings it all together.
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr', md: 'repeat(3, 1fr)' },
              gap: { xs: 3, sm: 4, md: 6 },
              justifyItems: 'center',
              alignItems: 'stretch',
              position: 'relative',
            }}
          >
            {/* Card 1: Busy professionals */}
            <Box
              sx={{
                background: 'linear-gradient(135deg, #f7f7f7 60%, #fff 100%)',
                borderRadius: '32px',
                boxShadow: '0 8px 32px 0 rgba(0,0,0,0.06)',
                p: { xs: 3, sm: 4, md: 5 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: { xs: 120, sm: 180, md: 220 },
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: '0 16px 48px 0 rgba(0,0,0,0.10)',
                },
              }}
            >
              <Box sx={{ bgcolor: '#f7ffe0', borderRadius: '50%', p: 1.2, mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BoltIcon sx={{ fontSize: 32, color: '#BBF246' }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '1.3rem', md: '1.6rem' },
                  color: '#222',
                  textAlign: 'center',
                }}
              >
                Busy professionals want to be healthier
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  opacity: 0.8,
                  mt: 1,
                  textAlign: 'center',
                  fontSize: { xs: '0.98rem', sm: '1.05rem', md: '1.18rem' },
                }}
              >
                But they don't have the time, guidance, or consistency to keep going.
              </Typography>
            </Box>
            {/* Card 2: Fragmented tools */}
            <Box
              sx={{
                background: 'linear-gradient(135deg, #f7f7f7 60%, #fff 100%)',
                borderRadius: '32px',
                boxShadow: '0 8px 32px 0 rgba(0,0,0,0.06)',
                p: { xs: 3, sm: 4, md: 5 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: { xs: 120, sm: 180, md: 220 },
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: '0 16px 48px 0 rgba(0,0,0,0.10)',
                },
              }}
            >
              <Box sx={{ bgcolor: '#f3e8ff', borderRadius: '50%', p: 1.2, mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <PsychologyIcon sx={{ fontSize: 32, color: '#a259ff' }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '1.3rem', md: '1.6rem' },
                  color: '#222',
                  textAlign: 'center',
                }}
              >
                Fragmented tools, no holistic support
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  opacity: 0.8,
                  mt: 1,
                  textAlign: 'center',
                  fontSize: { xs: '0.98rem', sm: '1.05rem', md: '1.18rem' },
                }}
              >
                Jumping between fitness apps, diets, and mental health tools that don't talk to each other.
              </Typography>
            </Box>
            {/* Card 3: Most platforms sell intensity */}
            <Box
              sx={{
                background: 'linear-gradient(135deg, #f7f7f7 60%, #fff 100%)',
                borderRadius: '32px',
                boxShadow: '0 8px 32px 0 rgba(0,0,0,0.06)',
                p: { xs: 3, sm: 4, md: 5 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: { xs: 120, sm: 180, md: 220 },
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: '0 16px 48px 0 rgba(0,0,0,0.10)',
                },
              }}
            >
              <Box sx={{ bgcolor: '#fce4ec', borderRadius: '50%', p: 1.2, mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FitnessCenterIcon sx={{ fontSize: 32, color: '#f246bb' }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '1.3rem', md: '1.6rem' },
                  color: '#222',
                  textAlign: 'center',
                }}
              >
                Most platforms sell intensity, not longevity
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  opacity: 0.8,
                  mt: 1,
                  textAlign: 'center',
                  fontSize: { xs: '0.98rem', sm: '1.05rem', md: '1.18rem' },
                }}
              >
                Short-term results, but not sustainable for real life.
              </Typography>
            </Box>
            {/* Card 4: True wellness is about consistency */}
            <Box
              sx={{
                background: 'linear-gradient(135deg, #f7f7f7 60%, #fff 100%)',
                borderRadius: '32px',
                boxShadow: '0 8px 32px 0 rgba(0,0,0,0.06)',
                p: { xs: 3, sm: 4, md: 5 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 180,
                mt: { md: 0, xs: 4 },
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: '0 16px 48px 0 rgba(0,0,0,0.10)',
                },
              }}
            >
              <Box sx={{ bgcolor: '#e0f7fa', borderRadius: '50%', p: 1.2, mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MonitorHeartIcon sx={{ fontSize: 32, color: '#00b894' }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '1.3rem', md: '1.6rem' },
                  color: '#222',
                  textAlign: 'center',
                }}
              >
                True wellness is about consistency
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  opacity: 0.8,
                  mt: 1,
                  textAlign: 'center',
                  fontSize: { xs: '0.98rem', sm: '1.05rem', md: '1.18rem' },
                }}
              >
                LongevFit helps you build habits that last.
              </Typography>
            </Box>
            {/* Card 5: Wellness is a journey */}
            <Box
              sx={{
                background: 'linear-gradient(135deg, #f7f7f7 60%, #fff 100%)',
                borderRadius: '32px',
                boxShadow: '0 8px 32px 0 rgba(0,0,0,0.06)',
                p: { xs: 3, sm: 4, md: 5 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 180,
                mt: { md: 0, xs: 4 },
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: '0 16px 48px 0 rgba(0,0,0,0.10)',
                },
              }}
            >
              <Box sx={{ bgcolor: '#fffde7', borderRadius: '50%', p: 1.2, mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <RestaurantIcon sx={{ fontSize: 32, color: '#ffb300' }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '1.3rem', md: '1.6rem' },
                  color: '#222',
                  textAlign: 'center',
                }}
              >
                Wellness is a journey, not a destination
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  opacity: 0.8,
                  mt: 1,
                  textAlign: 'center',
                  fontSize: { xs: '0.98rem', sm: '1.05rem', md: '1.18rem' },
                }}
              >
                LongevFit supports you every step of the way.
              </Typography>
            </Box>
            {/* Card 6: Personalized for your real life */}
            <Box
              sx={{
                background: 'linear-gradient(135deg, #f7f7f7 60%, #fff 100%)',
                borderRadius: '32px',
                boxShadow: '0 8px 32px 0 rgba(0,0,0,0.06)',
                p: { xs: 3, sm: 4, md: 5 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 180,
                mt: { md: 0, xs: 4 },
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: '0 16px 48px 0 rgba(0,0,0,0.10)',
                },
              }}
            >
              <Box sx={{ bgcolor: '#e0f7fa', borderRadius: '50%', p: 1.2, mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BoltIcon sx={{ fontSize: 32, color: '#00bcd4' }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '1.3rem', md: '1.6rem' },
                  color: '#222',
                  textAlign: 'center',
                }}
              >
                Personalized for your real life
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  opacity: 0.8,
                  mt: 1,
                  textAlign: 'center',
                  fontSize: { xs: '0.98rem', sm: '1.05rem', md: '1.18rem' },
                }}
              >
                Your plan adapts to your needs, schedule, and progress.
              </Typography>
            </Box>
          </Box>
        </Container>

        {/* Second Row - Single Column */}
        {/* <Box
          sx={{
            p: 6,
            borderRadius: '24px',
            background: 'black',
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
              pointerEvents: 'none',
            },
          }}
        >
          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              background:'black',
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
        </Box> */}

        {/* <HowItWorksSection /> */}
      </Container>
    </Box>
  );
} 