import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <div>
      <div className='bg-slate-900'>
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>


      <Toaster position="top-center" reverseOrder={false} />
    </div>
  )
}

export default App
