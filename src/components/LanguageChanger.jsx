import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import languagesData from '../data';


function LanguageChanger() {
    const { language, setLanguage,translate } = useLanguage();
    const changeLanguage=translate("changeLanguage");
    
    return (
        <>
      <button onClick={() => {if(language==="tr"){setLanguage('en')}else{setLanguage('tr')}}}>
        <h1>{changeLanguage}</h1>
        </button>
        </>
    )
}

export default LanguageChanger