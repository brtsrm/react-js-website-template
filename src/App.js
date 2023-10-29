import Header from "./pages/Layout/Header";
import Footer from "./pages/Layout/Footer";
import "bootstrap/dist/css/bootstrap.css";
import './assets/css/style.scss'
import AllRouter from "./AllRouter";

function App() {

    return (
        <>
            <Header/>
            <AllRouter/>
            <Footer/>
        </>
    );
}

export default App;
