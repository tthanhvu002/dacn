import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { useState,useMemo } from 'react'
import { themeSettings } from './theme'

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        hello world
      </ThemeProvider>
    </div>
  )
}

export default App
