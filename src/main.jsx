import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout'
import { About, Collections, Home, Login, Signup } from './components'

import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Collection from './components/Collection'

const Root = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='collections' element={<Collections />} />
        <Route path='collection/:id' element={<Collection />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
      </Route>
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Root />
)
