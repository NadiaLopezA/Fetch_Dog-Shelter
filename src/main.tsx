import React from 'react';
import ReactDOM from 'react-dom/client';

import { DogShelterApp } from './DogShelterApp';

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DogShelterApp />
  </React.StrictMode>
)
