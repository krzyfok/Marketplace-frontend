import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import { AuthProvider } from './contexts/AuthContext';
export default function App() {


  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}
