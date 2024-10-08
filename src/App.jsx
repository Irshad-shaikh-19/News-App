
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import NewsMain from './components/NewsMain'
import Carousel from './components/Carousel'
import Banner from './components/Banner'
import Footer from './components/Footer'

function App() {

  const[category, setCategory] = useState('general')

  return (
    <>
    <Navbar setCategory={setCategory} />
    <Carousel/>
    <Banner/>
    <NewsMain category={category} />
    <Footer/>
    </>
  )
}

export default App
