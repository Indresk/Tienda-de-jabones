import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Providers} from "./providers";
import {HeroUIProvider} from '@heroui/react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroUIProvider>
      <main className="light text-foreground bg-background">
        <Providers>
          <App />
        </Providers>
      </main>
    </HeroUIProvider>
  </StrictMode>,
)
