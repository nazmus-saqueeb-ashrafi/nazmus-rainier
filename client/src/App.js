import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Detail from './pages/Detail';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/register" element={<Register />} exact />
        <Route path="/home/:id" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} /> {/* id here is appointment id */}
        
      </Routes>

    </Router>
  );
}

export default App;
