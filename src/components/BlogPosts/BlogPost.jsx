import React, { useState, useEffect } from 'react';
import { storage, ref, getDownloadURL } from '../firebase';

function BlogPost({ post }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchImageUrls = async () => {
      if (!post.images) return;
      const urls = await Promise.all(
        post.images.map((path) => getDownloadURL(ref(storage, path)))
      );
      setImageUrls(urls);
    };
    fetchImageUrls();
  }, [post.images]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % imageUrls.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + imageUrls.length) % imageUrls.length);
  };

  const formatDate = (date) => {
    if (date?.seconds) return new Date(date.seconds * 1000).toLocaleDateString();
    if (typeof date === 'string' || typeof date === 'number') return new Date(date).toLocaleDateString();
    return '';
  };

  return (
    <div className="blog-post">
      <div className="blog-header">
        <h2 className="blog-title">{post.title}</h2>
        <div className="blog-meta">
          <span className="blog-date">{formatDate(post.date)}</span>
          <span className="blog-city">{post.city}</span>
        </div>
      </div>

      <div className="blog-content">
        {post.content.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>

      {imageUrls.length > 0 && (
        <div className="image-carousel">
          <img 
            src={imageUrls[currentImage]} 
            alt={`${post.city} - ${currentImage + 1}`} 
            className="carousel-image"
          />
          {imageUrls.length > 1 && (
            <div className="carousel-controls">
              <button onClick={prevImage} className="carousel-button">&lt;</button>
              <div className="carousel-indicators">
                {imageUrls.map((_, index) => (
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
