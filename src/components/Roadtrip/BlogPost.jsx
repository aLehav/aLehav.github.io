import React, { useState } from 'react';
import './BlogPost.css';

function BlogPost({ post }) {
  const [currentImage, setCurrentImage] = useState(0);
  
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % post.images.length);
  };
  
  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + post.images.length) % post.images.length);
  };
  
  return (
    <div className="blog-post">
      <div className="blog-header">
        <h2 className="blog-title">{post.title}</h2>
        <div className="blog-meta">
          <span className="blog-date">{post.date}</span>
          <span className="blog-city">{post.city}</span>
        </div>
      </div>

      <div className="blog-content">
        {post.content}
      </div>
      
      {post.images.length > 0 && (
        <div className="image-carousel">
          <img 
            src={post.images[currentImage]} 
            alt={`${post.city} - ${currentImage + 1}`} 
            className="carousel-image"
          />
          
          {post.images.length > 1 && (
            <div className="carousel-controls">
              <button onClick={prevImage} className="carousel-button">&lt;</button>
              <div className="carousel-indicators">
                {post.images.map((_, index) => (
                  <span 
                    key={index} 
                    className={`indicator ${index === currentImage ? 'active' : ''}`}
                    onClick={() => setCurrentImage(index)}
                  />
                ))}
              </div>
              <button onClick={nextImage} className="carousel-button">&gt;</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default BlogPost;