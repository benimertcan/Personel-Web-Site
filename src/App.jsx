import './App.css'
import './global.css'
import React, { useEffect, useState } from "react";
import ModeComponent from './components/ModeComponent';
import { LanguageProvider } from './context/LanguageContext';
import languagesData from './data';
import axios from 'axios';
import LanguageChanger from './components/LanguageChanger';

function App() {
  
    
  return (
    <>
    <LanguageProvider>
    <ModeComponent />
    <LanguageChanger/>
    
    </LanguageProvider>
    </>
  )
}

export default App
