import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './pages/home';
import { AuthProvider } from './contexts/AuthContext';
import { Toaster } from "react-hot-toast";
export default function App() {


  return (
    <AuthProvider>
      <Router>
        <Toaster position="top-left" reverseOrder={false} />
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}
