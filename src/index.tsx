import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppComponent } from './App';

const container = document.getElementById('root');

const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <AppComponent />
  </React.StrictMode>
);
