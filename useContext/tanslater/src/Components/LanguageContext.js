import { useState } from "react";
import { createContext } from "react";

export const LanguageContext = createContext()

function LanguageContextFunction ({children}){
    const [language, setLanguage] = useState('en')
    return (
        <LanguageContext.Provider value={{language, setLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageContextFunction