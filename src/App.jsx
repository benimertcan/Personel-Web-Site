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
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {


  return (
    <>
      <LanguageProvider >
        <Header />
        <div className="w-32 h-32 border-[16px] border-solid border-[#D9D9D9] rounded-full -mt-16 place-self-end mr-[25vw]"></div>
        <Skills />
       
        <Profile/>
        <Projects/>
        <Footer/>
      </LanguageProvider>
    </>
  )
}

export default App
