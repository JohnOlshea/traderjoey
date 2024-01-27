import Navbar from '../Navbar';
import Footer from "../Footer";

export default function Layout({ children }) {
    return (
        <div className="container mx-auto">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}