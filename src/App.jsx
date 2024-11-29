import './App.css'
import './global.css'
import React, { useEffect, useState } from "react";
import ModeComponent from './components/ModeComponent';
import { LanguageProvider } from './context/LanguageContext';
import languagesData from './data';
import axios from 'axios';
import LanguageChanger from './components/LanguageChanger';
import Header from './components/Header';

function App() {


  return (
    <>
      <LanguageProvider >
        
          <div className='header-essentials flex flex-row justify-end'>
            <div className='flex flex-row'>
              <ModeComponent />
              <p className='font-semibold mx-3'>| </p>
              <LanguageChanger />
            </div>
          </div>
          <Header />
      
      </LanguageProvider>
    </>
  )
}

export default App
