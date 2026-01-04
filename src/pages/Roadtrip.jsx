import React, { useEffect, useState } from 'react';
import { doc, getDoc, getDocs, collection } from 'firebase/firestore';
import BlogList from '../components/BlogPosts/BlogList';
import Auth from '../components/Auth';
import { db } from '../components/firebase'
import { query, where } from 'firebase/firestore';

function Roadtrip() {
    const [userEmail, setUserEmail] = useState(null);
    const [blogPosts, setBlogPosts] = useState([]);
    const [mapExpanded, setMapExpanded] = useState(true);

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
              <p>
                  From May to November, I roadtripped across North America. 50 states, 1 US territory, and 4 Canadian providences. 40+ national parks. Lots of good food and bad nights of sleep.
              </p>
          </section>

          <section className="section">
            <h2 className="section-title">Trip Map</h2>

            <button
                className="button"
                style={{marginTop: "0px"}}
                onClick={() => setMapExpanded(!mapExpanded)}
            >
                {mapExpanded ? "Minimize Map" : "Expand Map"}
            </button>

            <div className={`map-container ${mapExpanded ? "expanded" : "collapsed"}`}>
                <div className="map-placeholder">
                <div className="mono-text">Loading map...</div>
                </div>

                <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1q-3kpkxRgedxqI5yc1HgAcgUMMuBOg8&ehbc=2E312F&noprof=1"
                title="trip-map"
                loading="lazy"
                className="map-iframe"
                onLoad={() => {
                    const placeholder = document.querySelector(".map-placeholder");
                    if (placeholder) placeholder.style.display = "none";
                }}
                ></iframe>
            </div>
            </section>


          <section className="section">
              <h2 className="section-title">Travel Blog</h2>
              <div className="note-box">
                  Some posts may be private. If you don't see content you expect to see, please log in.
              </div>

              <Auth onLogin={setUserEmail} />
              <BlogList posts={blogPosts} />
          </section>
      </>
    );
}

export default Roadtrip