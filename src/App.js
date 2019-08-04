import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import "./scss/main.scss"

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Project'
import Login from './components/Login'
import Footer from './components/Footer'



function App() {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Navbar />
        <Route path="/" exact component={Home} ></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/projects" component={Projects}></Route>
        <Route path="/contact" component={Contact} ></Route>
        <Route path="/login" component={Login}></Route>


        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
