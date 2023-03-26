import './App.scss';
import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import {CartContextProvider} from './context/cartContext';
/*-------Componente NavBar---------- */
import NavBar from './common/NavBar/NavBar';
/*-------PAGES--------*/
import Home from './pages/Home';
import Details from './pages/Details';
import Cart from './pages/Cart';
import SobreNosotros from './pages/SobreNosotros';
import Error from './pages/Error';



const App = () => {
  return (
    <>
    <CartContextProvider>
      <BrowserRouter>
        <div className='cont-header'>
            <NavBar />
        </div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/category/:idCategory' element={<Home/>} />
          <Route path='/detail/:idProduct' element={<Details/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/sobre-nosotros' element={<SobreNosotros/>} />
          <Route path='*' element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
    </>
  );
};

export default App;
