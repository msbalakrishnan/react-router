import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from 'react-dom/client';
import './index.css';
import Nav1, { Nav } from './components/Nav1';
import App from './App';
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { PageNotFound } from './components/PageNotFound';
import { BrowserRouter, Outlet, Route, Router, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // "hellow "

  <BrowserRouter>
    <Nav1></Nav1> 
    <Routes>
    
      <Route path='/'  element={<Home></Home>} ></Route>
      <Route path='/contact' element={<Contact></Contact>} ></Route>
      <Route path='*' element={<PageNotFound></PageNotFound>} ></Route>

    </Routes>
    {/* <Outlet/> */}

  </BrowserRouter>
  // <BrowserRouter>
  //   <Routes>
  //     <Route path='/' element={ <Home/> }></Route>
  //     <Route path='/contact' element={<Contact/>}></Route>
  //     <Route path='/home'  element={<Home></Home>} ></Route>

  //     {/* <Route path='/' element={<Nav> </Nav>} >
  //       <Route index element={<Home />} />
  //       <Route path="/contact" element={<Contact />} />
  //       <Route path="*" element={<PageNotFound />} />
  //     </Route> */}
  //   </Routes>
  // </BrowserRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
