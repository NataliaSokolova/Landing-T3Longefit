'use client'

import { useState } from 'react'
import { Box, Typography, Container, TextField, Button, Alert, Paper } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export default function WaitlistSection() {
  const theme = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [confirmationMessage, setConfirmationMessage] = useState('')
  const [errors, setErrors] = useState<{[key: string]: string}>({})

  const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    // Show confirmation, clear form
    setConfirmationMessage('Thank you for joining the waitlist!')
    setFormData({ name: '', email: '', message: '' })
    
    setTimeout(() => {
      setConfirmationMessage('')
    }, 6000)
  }

  return (
    <Box
      component="section"
      id="waitlist"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 4,
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 4,
              color: theme.palette.text.primary,
            }}
          >
            Want early access? Sign up to join our waitlist and help shape the future of personalized wellness.
          </Typography>
          
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
            <TextField
              fullWidth
              label="Name *"
              value={formData.name}
              onChange={handleInputChange('name')}
              error={!!errors.name}
              helperText={errors.name}
              sx={{ mb: 3 }}
            />
            
            <TextField
              fullWidth
              label="Email *"
              type="email"
              value={formData.email}
              onChange={handleInputChange('email')}
              error={!!errors.email}
              helperText={errors.email}
              sx={{ mb: 3 }}
            />
            
            <TextField
              fullWidth
              label="Message *"
              multiline
              rows={3}
              value={formData.message}
              onChange={handleInputChange('message')}
              error={!!errors.message}
              helperText={errors.message}
              sx={{ mb: 4 }}
            />
            
            <Box sx={{ textAlign: 'center' }}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: theme.palette.secondary.main,
                  color: theme.palette.text.primary,
                  fontSize: '1.1rem',
                  px: 4,
                  py: 2,
                  borderRadius: '12px',
                  textTransform: 'none',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: theme.palette.secondary.dark,
                  },
                }}
              >
                Join Waitlist
              </Button>
            </Box>
            
            {confirmationMessage && (
              <Alert 
                severity="success" 
                sx={{ mt: 3 }}
              >
                {confirmationMessage}
              </Alert>
            )}
          </Box>
        </Paper>
      </Container>
    </Box>
  )
} 