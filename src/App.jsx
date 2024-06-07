import React from "react"
import "./index.css"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {

    return (
        <div className="app">
            <Navbar />
            <AnimatedRoutes />
            <Footer />
        </div>
    )
}

export default App
