import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './pages/Home/Home';
import { Toaster } from "react-hot-toast";
import { Navbar } from './pages/Home/components/Navbar';
import {AuthModal} from './components/AuthModal'
import { useAuth } from "./contexts/AuthContext";
export default function App() {

  const { isLoading } = useAuth();
  if (isLoading) {
      return <div className="flex h-screen items-center justify-center text-2xl">Loading...</div>;
    }
  return (
    
      <Router>
        <Toaster position="top-left" reverseOrder={false} />
        <Navbar/>
        <AuthModal/> 
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </Router>
    
  )
}
