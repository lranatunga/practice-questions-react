import {Outlet} from'react-router-dom'
import Navigation from './Components/Navigation'
import Footer from './Components/Footer'

function Layout (){
    return(
        <div>
            <header>
                <Navigation/>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}
export default Layout