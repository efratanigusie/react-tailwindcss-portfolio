import './css/main.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

reportWebVitals();
