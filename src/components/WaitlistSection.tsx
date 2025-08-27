import { Box, Typography, Button, Container } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

export default function WaitlistSection() {
  return (
    <Box
      component="section"
      id="waitlist"
      sx={{
        width: '100%',
        minHeight: { xs: 340, md: 420 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 8, md: 14 },
        background: '#fff',
      }}
    >
      <Box sx={{ width: '100%', textAlign: 'center', borderRadius: '32px', border: '1.5px solid #eaffc2', boxShadow: '0 8px 32px 0 rgba(60,60,60,0.10)', background: '#fff', py: { xs: 4, md: 8 } }}>
        <Typography
          variant="h2"
          sx={{
            color: '#1d1d1f',
            fontWeight: 800,
            fontSize: { xs: '2rem', md: '2.7rem' },
            mb: 3,
            letterSpacing: '-1px',
          }}
        >
          Ready to transform your fitness journey?
        </Typography>
        <Typography
          sx={{
            color: '#1d1d1f',
            fontWeight: 400,
            fontSize: { xs: '1.1rem', md: '1.25rem' },
            mb: 5,
            maxWidth: 600,
            mx: 'auto',
          }}
        >
          Join thousands of users who have already changed their lives<br />with FitPulse.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2, flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            size="large"
            startIcon={<DownloadIcon />}
            sx={{
              background: '#3F51B5',
              color: '#fff',
              fontWeight: 700,
              fontSize: '1.1rem',
              px: 4,
              py: 1.5,
              borderRadius: '12px',
              boxShadow: 'none',
              textTransform: 'none',
              '&:hover': {
                background: '#303f9f',
                color: '#fff',
              },
            }}
          >
            Download Now
          </Button>
        </Box>
        <Typography sx={{ color: '#444', fontSize: '0.98rem', opacity: 0.85, mt: 1 }}>
          Available on iOS and Android. No credit card required for trial.
        </Typography>
      </Box>
    </Box>
  );
} 