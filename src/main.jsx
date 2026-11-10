import React from 'react'
import ReactDOM from 'react-dom/client'
import { PostHogProvider } from '@posthog/react'
import { posthog, initPostHog } from './utils/posthog'
import App from './App.jsx'
import './index.css'

// PostHog initialisieren (aktiviert Tracking & Session Replay, falls Key vorhanden)
initPostHog()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PostHogProvider client={posthog}>
      <App />
    </PostHogProvider>
  </React.StrictMode>,
)
