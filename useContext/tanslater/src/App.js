
import LanguageContextFunction from './Components/LanguageContext'
import LanguageSelector from './Components/LanguageSelector'
import Main from './Components/Main'

function App (){

  return(
    <LanguageContextFunction>
      <LanguageSelector/>
      <Main/>
    </LanguageContextFunction>
  )
}
export default App