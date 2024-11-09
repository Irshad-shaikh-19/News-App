
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import NewsMain from './components/NewsMain'
import Footer from './components/Footer'

function App() {

  const[category, setCategory] = useState('general')

  return (
    <>
    <Navbar setCategory={setCategory} />

    <NewsMain category={category} />
    <Footer/>
    </>
  )
}

export default App
