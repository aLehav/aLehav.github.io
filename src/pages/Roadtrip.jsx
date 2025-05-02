import React, { useEffect, useState } from 'react';
import { doc, getDoc, getDocs, collection } from 'firebase/firestore';
import BlogList from '../components/BlogPosts/BlogList';
import Auth from '../components/Auth';
import { db } from '../components/firebase'
import { query, where } from 'firebase/firestore';

function Roadtrip() {
    const [userEmail, setUserEmail] = useState(null);
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        const fetchPermissionsAndPosts = async () => {
          let publicPosts = [];
          let privatePosts = [];
      
          // Always fetch posts with public tag
          const postsQuery = query(
            collection(db, 'blog-posts'),
            where('tags', 'array-contains', 'public')
          );
          const querySnapshot = await getDocs(postsQuery);
          publicPosts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          
          if (userEmail) {
            const docRef = doc(db, 'access-control', userEmail);
            const docSnap = await getDoc(docRef);
            const tags = docSnap.exists() ? docSnap.data().allowedTags : [];
      
            if (tags.length > 0) {
              const postsQuery = query(
                collection(db, 'blog-posts'),
                where('tags', 'array-contains-any', tags.slice(0, 10)) // limit to 10
              );
              const querySnapshot = await getDocs(postsQuery);
              privatePosts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            }
          } 

          setBlogPosts([...publicPosts, ...privatePosts]);
        };
      
        fetchPermissionsAndPosts();
      }, [userEmail]);

    return (
      <>
          <h1 className="page-title">Road Trip Across America</h1>
          
          <section className="section">
              <Auth onLogin={setUserEmail} />
              
              <p>
                  From May to December, I will be going on a roadtrip across all 50 states and almost all national parks. 
                  This is where I'll be documenting my thoughts and adventures for friends and family to see.
              </p>
              
              <p>
                  The outline of the trip is in the embedded map. Ignore the letters, they're a consequence of My Maps being a bad tool. 
                  I'm starting in LA, going down south, up the east coast, along the northeast, sweeping back down for Utah and Colorado, 
                  and then cutting through Canada to go up to Alaska via Montana and back down through Washington.
              </p>
          </section>

          <section className="section">
              <h2 className="section-title">Trip Map</h2>
              <div style={{ position: 'relative', width: '100%', maxWidth: '800px', height: '600px', margin: '0 auto' }}>
                  {/* Placeholder that shows until map loads */}
                  <div 
                      style={{ 
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%', 
                          height: '100%', 
                          background: '#f0f0f0',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          zIndex: 1,
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                          borderRadius: '5px'
                      }}
                  >
                      <div className="mono-text">Loading map...</div>
                  </div>
                  
                  {/* Iframe with native lazy loading */}
                  <iframe 
                      src="https://www.google.com/maps/d/u/0/embed?mid=1q-3kpkxRgedxqI5yc1HgAcgUMMuBOg8&ehbc=2E312F&noprof=1" 
                      width="100%"
                      height="600"
                      title="trip-map"
                      loading="lazy"
                      style={{ 
                          position: 'absolute', 
                          top: 0, 
                          left: 0, 
                          zIndex: 2,
                          border: 'none',
                          borderRadius: '5px',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                      }}
                      onLoad={() => {
                          // Hide the placeholder when the iframe is loaded
                          const placeholder = document.querySelector('div[style*="background: #f0f0f0"]');
                          if (placeholder) placeholder.style.display = 'none';
                      }}
                  ></iframe>
              </div>
          </section>

          <section className="section">
              <h2 className="section-title">Travel Blog</h2>
              <div className="note-box">
                  Below are my latest travel updates and reflections. Some posts may be private and only visible 
                  to certain friends and family members. If you don't see content you expect to see, please log in.
              </div>
              <BlogList posts={blogPosts} />
          </section>
      </>
    );
}

export default Roadtrip