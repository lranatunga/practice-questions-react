import { useEffect, useState } from "react"

function DarkModeToggle () {

    const [currentTheme, setCurrentTheme] = useState ('light')

    const toggleTheme = () => {
        currentTheme === 'light' ? setCurrentTheme ('dark') : setCurrentTheme ('light')
    }

    useEffect ( () => {
        document.body.className = currentTheme
    }, [currentTheme])
    return (
        <div className={`DarkModeToggle ${currentTheme}`} style={{backgroundColor:currentTheme, width:'200px', height:'200px', color:!currentTheme}}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <h3>Dark mode toggle</h3>
        </div>
    )
}

export default DarkModeToggle;











/**
 * 05 Dark Mode Toggle
 * 
 * Create a simple application with a dark mode toggle button. 
 * Use the useState hook to manage the dark mode state. When the user toggles the button, 
 * the background color and text color of the application should switch between light and dark themes.
 * 
 */