import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Global styles
import './index.css';
import 'antd/dist/reset.css';
import './i18n';

// Optional: MUI baseline for consistent styling
import CssBaseline from '@mui/material/CssBaseline';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CssBaseline />
    <App />
  </StrictMode>
);
