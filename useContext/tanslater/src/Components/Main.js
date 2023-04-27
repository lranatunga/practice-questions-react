import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const translation ={
    en:{
        title: 'Welcome'
    },
    es:{
        title: 'Bienvenido'
    },
    si:{
        title: 'සාදරයෙන් පිළිගනිමු'
    }
}

function Main (){
    const {language} = useContext(LanguageContext)
    const {title} = translation [language]

    return(
        <div>
            <h1>{title}</h1>
        </div>
    )
}
export default Main