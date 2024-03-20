import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/screens/App.tsx'
import './lib/styles/styles.scss'
import { ThemeProvider } from '@mui/material'
import theme from './lib/config/theme.ts'
import Snack from "./components/box/snacks/Snack.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <Snack />
    </ThemeProvider>
  </React.StrictMode>,
)
