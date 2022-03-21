import './App.css';
import './normal.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Fragment } from 'react';
import Header from './components/layout/Header';
import SideBar from './components/layout/SideBar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Resources from './components/pages/Resources';
import Resource from './components/pages/Resource';
import Contact from './components/pages/Contact';
import ResourceState from './context/ResourceContext/resourceState';

function App() {
  return (
    <ResourceState>
    <Fragment>
      <Router>
          <SideBar />
              <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route exact path='/About' element={<About />}/>
                <Route exact path='/Resources' element={<Resources />}/>
                <Route exact path='/Contact' element={<Contact />}/>
                <Route exact path='/Resource/:article' element={<Resource />}/>
              </Routes>
              <Header />
          </Router>
    </Fragment>
    </ResourceState>
  );
}

export default App;

