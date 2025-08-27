import { Box, Typography, Container } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import ShowChartIcon from '@mui/icons-material/ShowChart';

const features = [
  {
    icon: <ShowChartIcon sx={{ fontSize: 32, color: '#BBF246' }} />, // match ProjectSection
    title: 'Personalized Workouts',
    text: 'AI-powered workout plans tailored to your goals, fitness level, and available equipment.'
  },
  {
    icon: <QueryStatsIcon sx={{ fontSize: 32, color: '#BBF246' }} />,
    title: 'Progress Tracking',
    text: 'Track your progress with detailed analytics, body measurements, and performance metrics.'
  },
  {
    icon: <FavoriteBorderIcon sx={{ fontSize: 32, color: '#BBF246' }} />,
    title: 'Nutrition Guidance',
    text: 'Meal plans and nutrition tracking to complement your workouts and maximize results.'
  },
  {
    icon: <CalendarMonthIcon sx={{ fontSize: 32, color: '#BBF246' }} />,
    title: 'Workout Scheduler',
    text: 'Plan your fitness routine with our intuitive calendar and never miss a workout.'
  },
  {
    icon: <ChatBubbleOutlineIcon sx={{ fontSize: 32, color: '#BBF246' }} />,
    title: 'Community Support',
    text: 'Connect with like-minded fitness enthusiasts and share your journey with our supportive community.'
  },
  {
    icon: <WorkspacePremiumOutlinedIcon sx={{ fontSize: 32, color: '#BBF246' }} />,
    title: 'Achievements & Rewards',
    text: 'Stay motivated with challenges, badges, and rewards as you hit milestones on your fitness journey.'
  },
];

export default function FeaturesGridSection() {
  return (
    <Box sx={{ bgcolor: '#fcfbff', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.5rem', md: '3rem' },
              fontWeight: 700,
              lineHeight: 1.2,
              textAlign: 'center',
              color: '#86868B',
              mb: 2,
              letterSpacing: '-1px',
            }}
          >
            Everything you need to reach your fitness goals
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'text.secondary',
              fontWeight: 400,
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.5rem' },
              textAlign: 'center',
              maxWidth: 600,
              mb: { xs: 6, md: 8 },
              opacity: 0.85,
            }}
          >
            Our app combines cutting-edge technology with expert fitness knowledge to deliver a personalized experience.
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
            gap: { xs: 3, md: 4 },
            justifyItems: 'center',
            alignItems: 'stretch',
          }}
        >
          {features.map((feature, i) => (
            <Box
              key={i}
              sx={{
                background: '#fff',
                borderRadius: '20px',
                border: '1.5px solid #ede7f6',
                boxShadow: '0 2px 16px 0 rgba(160, 120, 255, 0.06)',
                p: { xs: 3, md: 4 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: 210,
                maxWidth: 370,
                width: '100%',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px) scale(1.03)',
                  boxShadow: '0 8px 32px 0 rgba(160, 120, 255, 0.10)',
                },
              }}
            >
              <Box sx={{ bgcolor: '#f7ffe0', borderRadius: '50%', p: 1.2, mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 12px 0 rgba(187,242,70,0.10)' }}>
                {feature.icon}
              </Box>
              <Typography sx={{ fontWeight: 700, fontSize: { xs: '1.5rem', md: '1.8rem' }, color: '#111', mb: 1, mt: 0.5 }}>
                {feature.title}
              </Typography>
              <Typography sx={{ color: '#444', fontSize: { xs: '1.2rem', md: '1.3rem' }, opacity: 0.92, lineHeight: 1.6 }}>
                {feature.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
} 