
import './App.css';
import NavBar from './components/NavBar';
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home';
import Cart from './components/Cart';
import DisplayItem from './components/DisplayItem';
function App() {
  return (
    <div>
     <NavBar/>
     <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/Cart' element={<Cart/>}>Cart</Route>
        <Route path='/:id' element={<DisplayItem/>}>Cart</Route>
      </Routes>
    </div>
  );
}

export default App;
