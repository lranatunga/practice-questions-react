import { TheamContext } from './Theam'
import { useContext } from 'react'

function Main () {
    const {darkmode} = useContext(TheamContext)
    return (
        <div className={darkmode ? 'dark' : ''}  style={{backgroundColor:darkmode}}>
                Hello
        </div>
    )
}
export default Main