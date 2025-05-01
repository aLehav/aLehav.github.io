import React, { useState } from 'react';
import BlogPost from './BlogPost';
import './BlogList.css';

function BlogList({ posts }) {
  const [filter, setFilter] = useState('');
  
  const filteredPosts = posts
    .filter(post => {
      return (
        post.title?.toLowerCase().includes(filter.toLowerCase()) ||
        post.city?.toLowerCase().includes(filter.toLowerCase()) ||
        post.content?.toLowerCase().includes(filter.toLowerCase())
      );
    })
    .sort((a, b) => {
      const dateA = a.date?.seconds ? new Date(a.date.seconds * 1000) : new Date(a.date);
      const dateB = b.date?.seconds ? new Date(b.date.seconds * 1000) : new Date(b.date);
      return dateB - dateA; // newest first
    });
  
  return (
    <div className="blog-list">
      <div className="blog-filters">
        <input 
          type="text" 
          placeholder="Search blogs..." 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
          className="blog-search"
        />
      </div>
      
      {filteredPosts.length === 0 ? (
        <div className="no-posts">No blog posts match your search</div>
      ) : (
        filteredPosts.map(post => (
          <BlogPost key={post.id} post={post} />
        ))
      )}
    </div>
  );
}

export default BlogList;
