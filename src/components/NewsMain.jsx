import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'

const NewsMain = ({ category }) => {
  const [news, setNews] = useState([])
  const API_KEY = `9341816a2dbca2ab0ae3f887f96b59ce`

  useEffect(() => {
    const fetchNews = async () => {
      const url = `https://gnews.io/api/v4/top-headlines?token=${API_KEY}&lang=en&country=in&topic=${category}`
      try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)  
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
