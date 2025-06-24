'use client'

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  useTheme,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'

const pages = [
  { name: 'Features', path: '#features' },
  { name: 'How it Works', path: '#how-it-works' },
  { name: 'About', path: '#about' },
  { name: 'Team', path: '#team' },
  { name: 'Contact', path: '#waitlist' },
]

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const router = useRouter()
  const pathname = usePathname()
  const theme = useTheme()

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position="sticky" sx={{ top: 0, zIndex: 1100 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo - Left Side */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              ml: { xs: 0, md: 6 },
            }}
            onClick={() => router.push('/')}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                background: 'linear-gradient(135deg, #BBF246 60%, #eaffc2 100%)',
                color: '#222',
                fontWeight: 700,
                fontSize: '1.2rem',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px 0 rgba(187,242,70,0.10)',
                letterSpacing: '-1px',
                mr: 1.5,
              }}
            >
              LF
            </Box>
            <Typography
              variant="h6"
              noWrap
              sx={{
                color: theme.palette.text.primary,
                textDecoration: 'none',
                fontFamily: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif`,
                fontWeight: 700,
                letterSpacing: '0em',
                fontSize: '1.5rem',
              }}
            >
              LongevFit
            </Typography>
          </Box>

          {/* Mobile Menu Button - Right Side */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: theme.palette.text.primary }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => {
                    handleCloseNavMenu()
                    router.push(page.path)
                  }}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Navigation - Right Side */}
          <Box 
            sx={{ 
              display: { xs: 'none', md: 'flex' },
              gap: 2,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => router.push(page.path)}
                sx={{
                  my: 2,
                  color: theme.palette.text.primary,
                  display: 'block',
                  backgroundColor: pathname === page.path ? 'rgba(0, 0, 0, 0.05)' : 'transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                  },
                  px: 2,
                  fontSize: '1.15rem',
                }}
                variant="text"
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar 