import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Connexion from './Pages/Connexion/Connexion';
import User from './Pages/User/User';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
