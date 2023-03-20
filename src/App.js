import './App.scss';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Details } from './pages/Details';
import { Cart } from './pages/Cart';
import {CartContextProvider} from './context/cartContext';



const App = () => {
  return (
    <>
    <CartContextProvider>
    <BrowserRouter>
      <div className='cont-header'>
          <NavBar />
      </div>
      <Routes>
        <Route path='/proyecto-react/' element={<Home/>} />
        <Route path='/category/:idCategory' element={<Home/>} />
        <Route path='/detail/:idProduct' element={<Details/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
    </>
  );
};

export default App;
