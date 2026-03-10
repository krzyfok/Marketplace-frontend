import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './pages/Home';
import { AuthProvider } from './contexts/AuthContext';
import { Toaster } from "react-hot-toast";
import { Navbar } from './components/Navbar';
import {AuthModal} from './components/AuthModal'

export default function App() {


  return (
    <AuthProvider>
      <Router>
        <Toaster position="top-left" reverseOrder={false} />
        <Navbar />
         <AuthModal /> 
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}
