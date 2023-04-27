import { useContext } from "react";
import {LanguageContext} from './LanguageContext'

function LanguageSelector (){

    const {language, setLanguage} = useContext(LanguageContext)

    const handleChange = (event) => {
        setLanguage(event.target.value)
    }

    return(
        <select value={language} onChange={handleChange}>
            <option value='en'>English</option>
            <option value='es'>Spanish</option>
            <option value='si'>සිංහල</option>
        </select>
    )
}
 export default LanguageSelector