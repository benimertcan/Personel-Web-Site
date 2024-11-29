import './App.css'
import './global.css'
import React, { useEffect, useState } from "react";
import ModeComponent from './components/ModeComponent';
import { LanguageProvider } from './context/LanguageContext';
import languagesData from './data';
import axios from 'axios';
import LanguageChanger from './components/LanguageChanger';
import Header from './components/Header';
import Skills from './components/Skills';

function App() {


  return (
    <>
      <LanguageProvider >
        <Header />
        <Skills />
      </LanguageProvider>
    </>
  )
}

export default App
