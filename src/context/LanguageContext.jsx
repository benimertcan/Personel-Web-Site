import React, { createContext, useState, useContext, useEffect } from 'react';
import languagesData from '../data';
import axios from 'axios';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  var lang = navigator.language || navigator.userLanguage;
  if(lang.includes("tr")){
    lang="en"
  }
  else{
    lang="tr"
  }
  const [language, setLanguage] = useState(lang);
  const translations={...languagesData}

useEffect(()=>{
  axios
  .get("https://reqres.in/api/workintech",languagesData[language])
  .then((response)=>{
    console.log(response) 
  })
  .catch((error)=>{console.log(error)})
},[language])

  const translate = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

