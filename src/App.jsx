import React from 'react'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Todo from './components/Todo'
import Table from './components/Table'
import Login from './pages/Login'
import Component from './components/Component'
import Parent from './components/Parent'
import Child from './components/Child'
import Imagecard from './components/Imagecard'
import Gallery from './components/Gallery'
import StyledLogin from './StyledLogin'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/log" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/table" element={<Table />} />
        <Route path="/comp" element={<Component />} />
        <Route path="/parent" element={<Parent />} />
        <Route path="/child" element={<Child />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/image" element={<Imagecard />} />
        <Route path="/slog" element={<StyledLogin />} />
      </Routes>
    </>
  )
}

export default App
