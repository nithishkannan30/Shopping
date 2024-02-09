
import './App.css';
import NavBar from './components/NavBar';
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home';
import Cart from './components/Cart';
function App() {
  return (
    <div className="container">
     <NavBar/>
     <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/Cart' element={<Cart/>}>Cart</Route>
      </Routes>
    </div>
  );
}

export default App;
