import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Pricing from './pages/Pricing';
import TryFree from './pages/TryFree';
import SuperpowerDetail from './pages/SuperpowerDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Login />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/try-free" element={<TryFree />} />
          <Route path="/superpower/:id" element={<SuperpowerDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
