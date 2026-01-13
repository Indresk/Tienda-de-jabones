import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Providers} from "./providers";
import {HeroUIProvider} from '@heroui/react';
import ThemeControl from './ThemeControl.jsx';


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <HeroUIProvider>
      <ThemeControl>
          <Providers>
            <App />
          </Providers>
      </ThemeControl>
    </HeroUIProvider>
  </StrictMode>,
)
