import { useRef } from 'react'
import './App.css'
import About from './components/About/About'
import Blog from './components/Blog/Blog'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'

function App() {

  return (
    <>
      <Header/>
      <Home />
      <About />
      <Blog />
      <Footer />
    </>
  )
}

export default App
