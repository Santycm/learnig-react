import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/normalize.css'
import './styles/app.css'

import { MainMenu } from './components/MainMenu'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainMenu />
  </React.StrictMode>
);
