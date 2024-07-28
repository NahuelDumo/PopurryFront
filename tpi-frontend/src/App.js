import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Menu from './components/Menu';
import Footer from './components/Footer';

import { Productos } from "./components/productos/Producto";

function App() {
return (
    <>
        <BrowserRouter>
            <Menu/>
            <div className="divBody">
                <Routes>
                    <Route path="/productos" element={<Productos/>}/>
                    <Route path="*" element={<Navigate to='/productos' replace/>}/>
                </Routes>
            </div>
            <Footer/>
        </BrowserRouter>
    </>
);
}
export default App;


