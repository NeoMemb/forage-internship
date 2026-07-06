// import 'bpk-stylesheets/base';
import '@skyscanner/backpack-web/bpk-stylesheets/base.css';
// import 'bpk-stylesheets/font';
import '@skyscanner/backpack-web/bpk-stylesheets/font.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
