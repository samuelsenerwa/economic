import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import {GlobalStyle} from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import {productData, productDataTwo} from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
function App() {
  return (
      <Router>
        {/* <Routes>
        <Route  path='/' elements ={<Navbar/>}/>
        <Route exact path='/Navbar' elements ={<Navbar/>}/>
        </Routes> */}
        <Hero/>
        <Products heading = 'Which is your favourite' data={productData}/>
        <Feature/>
        <Products heading = 'Sweet Treats Just for You' data={productDataTwo}/>
        <Footer/>
        <GlobalStyle/>
      </Router>
   
  );
}

export default App;
