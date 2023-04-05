import Header from "./header";
import { Navigation } from "./navigation";
import Footer from "./footer";
import Card from "./card";


const Layout = () => {
return (
<div>
    <Header />
    <Navigation />
    <main>
        <Card />
        <Card />
        <Card />
        <Card />
    </main>
    <Footer/>
</div>
)
}
export default Layout;









/**
 * 06 Combine Components to Create a Layout
 * 
 * Create a new functional component called "Layout" in a file named "Layout.js".
 * The component should use the Header, Navigation, and Footer components you created earlier, as well as a "content" section.
 * In the content section, use any components you have created (e.g., Card, FruitList, etc.).
 * Use appropriate HTML tags and CSS styles to organize the layout (e.g., flexbox or CSS grid).
 * Import and use the Layout component in your "App.js" file.
 * 
 */