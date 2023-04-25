
import { useState } from 'react'
import { createContext } from 'react'

export const TheamContext = createContext()


export default function TheamContextFunction ({children}) {

    const [darkmode, setDarkmode] = useState(false)
    const [content, setContent] = useState ('Dark Mode')
    const ToggleTheam =()=> {setDarkmode (!darkmode); setContent('Light Mode')}
    return(
        <TheamContext.Provider value={{darkmode}}>
          
        <button onClick={ToggleTheam} className={darkmode ? 'dark' : ''}  style={{backgroundColor:darkmode}}>{content}</button>
     
        {children}
        </ TheamContext.Provider>    
    )
}







