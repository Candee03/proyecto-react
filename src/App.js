import './App.scss';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Details } from './pages/Details';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <div className='cont-header'>
          <NavBar />
      </div>
      <Routes>
        <Route path='/proyecto-react/' element={<Home/>} />
        <Route path='/category/:idCategory' element={<Home/>} />
        <Route path='/detail/:idProduct' element={<Details/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
