import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'

const NewsMain = ({ category }) => {
  const [news, setNews] = useState([])
  const API_KEY = `ea885ea654fa414bbe87e712293739fc`

 
  useEffect(() => {
    const fetchNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
      try {
        const response = await fetch(url)
        const data = await response.json()
        if (data.articles) {
          setNews(data.articles)
        } else {
          setNews([]) 
        }
      } catch (error) {
        console.error('Error fetching news:', error)
        setNews([]) 
      }
    }
    
    fetchNews()
  }, [category]) 

  return (
    <>
      <h2 className='text-center my-5'>
  Latest <span className='badge text-bg-danger d-inline ms-2'>{category.charAt(0).toUpperCase() + category.slice(1)} News</span>
</h2>
      <NewsCard newsdata={news} />
    </>
  )
}

export default NewsMain
