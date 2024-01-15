import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Inicio from "./components/Inicio";
import Menu from './components/Menu';
import Footer from './components/Footer';

import { Misiones } from "./components/misiones/Misiones";

function App() {
return (
    <>
        <BrowserRouter>
            <Menu/>
            <div className="divBody">
                <Routes>
                    <Route path="/inicio" element={<Inicio/>}/>
                    <Route path="/misiones" element={<Misiones/>}/>
                    <Route path="*" element={<Navigate to='/inicio' replace/>}/>
                </Routes>
            </div>
            <Footer/>
        </BrowserRouter>
    </>
);
}
export default App;


