import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
export default function App() {


  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>

    </Router>
  )
}
