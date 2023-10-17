import './App.css';
import React from 'react';
import { AppUI } from './AppUI';
import { TododProvider } from '../TodoContext';
 
function App() {

  return(
    <TododProvider>
      <AppUI/>
    </TododProvider>
  );
}

export default App;
