import { Box, Typography, Avatar, Container } from '@mui/material';

const testimonials = [
  {
    name: 'Anna K.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'LongevFit completely changed my approach to health. Everything is in one place, and it feels so easy!'
  },
  {
    name: 'Michael S.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'I love the personalized plans and how the app adapts to my schedule. The design is just beautiful.'
  },
  {
    name: 'Sophie L.',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: 'Finally, a fitness app that motivates me every day. The AI coach is like a real friend!'
  },
];

export default function TestimonialsSection() {
  return (
    <Box sx={{ bgcolor: '#fcfbff', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            fontWeight: 700,
            fontSize: { xs: '2rem', md: '2.5rem' },
            color: '#111',
            mb: 6,
            letterSpacing: '-1px',
          }}
        >
          What our users say
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
            gap: { xs: 4, md: 6 },
            alignItems: 'stretch',
          }}
        >
          {testimonials.map((t, i) => (
            <Box
              key={i}
              sx={{
                background: '#fff',
                borderRadius: '24px',
                boxShadow: '0 4px 24px 0 rgba(160, 120, 255, 0.08)',
                p: { xs: 4, md: 5 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                minHeight: 220,
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: '0 12px 32px 0 rgba(160, 120, 255, 0.13)',
                },
              }}
            >
              <Avatar src={t.avatar} alt={t.name} sx={{ width: 64, height: 64, mb: 2, boxShadow: '0 2px 8px 0 rgba(160,120,255,0.10)' }} />
              <Typography sx={{ fontWeight: 500, fontSize: '1.13rem', color: '#222', mb: 1, mt: 0.5 }}>
                {t.text}
              </Typography>
              <Typography sx={{ color: '#86868B', fontSize: '1rem', mt: 2, fontWeight: 600 }}>
                {t.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
} 