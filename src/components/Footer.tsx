import React from "react";
import { Box, Typography, Button, TextField, InputBase, IconButton, Link as MuiLink } from '@mui/material';

const socials = [
  {
    href: "https://twitter.com/",
    label: "Twitter",
    svg: (
      <svg viewBox="0 0 24 24" width={32} height={32} fill="currentColor"><path d="M22.46 5.924c-.793.352-1.646.59-2.542.698a4.48 4.48 0 0 0 1.965-2.475 8.94 8.94 0 0 1-2.828 1.082 4.48 4.48 0 0 0-7.64 4.086A12.72 12.72 0 0 1 3.11 4.86a4.48 4.48 0 0 0 1.39 5.98 4.44 4.44 0 0 1-2.03-.56v.057a4.48 4.48 0 0 0 3.6 4.39 4.5 4.5 0 0 1-2.02.077 4.48 4.48 0 0 0 4.18 3.11A8.98 8.98 0 0 1 2 19.54a12.7 12.7 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.19-.01-.38-.02-.57A9.1 9.1 0 0 0 24 4.59a8.93 8.93 0 0 1-2.54.7z"/></svg>
    )
  },
  {
    href: "https://instagram.com/",
    label: "Instagram",
    svg: (
      <svg viewBox="0 0 24 24" width={32} height={32} fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
    )
  },
  {
    href: "https://linkedin.com/",
    label: "LinkedIn",
    svg: (
      <svg viewBox="0 0 24 24" width={32} height={32} fill="currentColor"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z"/></svg>
    )
  }
];

export default function AppleFooter() {
  return (
    <Box component="footer" sx={{ bgcolor: '#fff', color: '#222', pt: 10, pb: 4, mt: 12 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
        {/* Sign up form */}
        <Box sx={{ width: '100%', maxWidth: 420, mb: 4 }}>
          <Typography sx={{ color: '#111', fontWeight: 700, fontSize: '1.18rem', mb: 2, textAlign: 'center' }}>
            Want early access? Sign up to join our waitlist and help shape the future of personalized wellness.
          </Typography>
          <Box component="form" sx={{ display: 'flex', gap: 1, width: '100%' }}>
            <InputBase
              placeholder="Your email address"
              sx={{
                flex: 1,
                bgcolor: '#f7f7f7',
                borderRadius: '40px',
                px: 2.5,
                py: 1.2,
                fontSize: '1rem',
                border: '1.5px solid #ede7f6',
                mr: 1,
              }}
              inputProps={{ 'aria-label': 'Your email address' }}
            />
            <Button
              variant="contained"
              sx={{
                borderRadius: '40px',
                px: 3,
                fontWeight: 700,
                fontSize: '1rem',
                bgcolor: '#3F51B5',
                color: '#fff',
                boxShadow: 'none',
                textTransform: 'none',
                '&:hover': {
                  bgcolor: '#303f9f',
                  color: '#fff',
                },
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>


        <Box sx={{ display: 'flex', gap: 3, mb: 4, mt: 5 }}>
          {socials.map((s, i) => (
            <IconButton
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              sx={{
                color: '#BBF246',
                bgcolor: 'transparent',
                borderRadius: 0,
                p: 0.5,
                fontSize: 28,
                border: 'none',
                boxShadow: 'none',
                transition: 'color 0.2s',
                mx: 1,
                '&:hover': {
                  color: '#111',
                  bgcolor: 'transparent',
                },
              }}
            >
              {s.svg}
            </IconButton>
          ))}
        </Box>
      </Box>
      <Typography sx={{ color: '#888', fontSize: '1rem', textAlign: 'center', mt: 1, borderTop: '1px solid #f0f0f0', pt: 2 }}>
        © 2024 LongevFit. All rights reserved.
      </Typography>
    </Box>
  );
} 