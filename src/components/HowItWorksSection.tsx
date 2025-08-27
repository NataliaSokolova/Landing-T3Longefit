import { Box, Typography, Container } from '@mui/material';

const steps = [
  {
    number: 1,
    title: 'Sign up and set your goals',
    text: 'Start by creating your profile and telling us your fitness goals.'
  },
  {
    number: 2,
    title: 'Receive your personalized plan',
    text: 'Our AI creates a workout and nutrition plan tailored for you.'
  },
  {
    number: 3,
    title: 'Track progress and get AI feedback',
    text: 'Monitor your improvements and get tips to stay motivated.'
  }
];

export default function HowItWorksSection() {
  return (
    <Box  
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
      }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            textAlign: 'center',
            fontWeight: 700,
            fontSize: { xs: '1.7rem', md: '2.3rem' },
            mb: { xs: 6, md: 8 },
            color: '#fff',
          }}
        >
          How it works
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
            gap: { xs: 4, md: 6 },
            justifyItems: 'center',
            alignItems: 'stretch',
          }}
        >
          {steps.map((step, i) => (
            <Box
              key={i}
              sx={{
                background: 'linear-gradient(135deg, #eaffc2 0%, #BBF246 100%)',
                borderRadius: '24px',
                boxShadow: '0 4px 24px 0 rgba(0,0,0,0.06)',
                p: { xs: 4, md: 5 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: 280,
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: '0 12px 32px 0 rgba(0,0,0,0.10)',
                },
              }}
            >
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #eaffc2 0%, #BBF246 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 3,
                  color: '#1d1d1f',
                  fontWeight: 700,
                  fontSize: '2rem',
                  boxShadow: '0 4px 24px 0 rgba(187,242,70,0.18)',
                }}
              >
                {step.number}
              </Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  color: '#1d1d1f',
                  textAlign: 'center',
                  mb: 1.5,
                }}
              >
                {step.title}
              </Typography>
              <Typography
                sx={{
                  color: '#222',
                  fontSize: { xs: '1rem', md: '1.08rem' },
                  textAlign: 'center',
                  opacity: 0.85,
                }}
              >
                {step.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
} 