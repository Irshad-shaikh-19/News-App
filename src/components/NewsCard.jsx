import React from 'react'
import newsdefault from '../assets/news.jpg';

const NewsCard = ({ newsdata }) => {
 
  const filteredNewsData = newsdata.filter(news => 
    !(news.title && news.title.includes('[Removed]')) &&
    !(news.description && news.description.includes('[Removed]'))
  );

  return (
    <div className="news-container my-5">
      {filteredNewsData.map((news, index) => (
        <div className="news-card card mb-4" key={index}>
          <img 
            src={news.urlToImage ? news.urlToImage : newsdefault} 
            className="card-img-top" 
            alt={news.title || 'Default News Image'} 
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{news.title || 'No Title Available'}</h5>
            <p className="card-text">
              {news.description || 'No description available for this article.'}
            </p>
            <div className="mt-auto">
              <a 
                href={news.url || '#'} 
                className="btn btn-primary" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {news.url ? 'Read More' : 'Link Not Available'}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NewsCard
