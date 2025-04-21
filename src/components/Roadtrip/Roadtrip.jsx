import React, { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc, getDocs, collection } from 'firebase/firestore';
import BlogList from './BlogList';
import Auth from '../Auth';
import { db } from '../firebase'
import './Roadtrip.css';

function Roadtrip() {
    const [userEmail, setUserEmail] = useState(null);
    const [allowedTags, setAllowedTags] = useState([]);
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
    const fetchPosts = async () => {
        const querySnapshot = await getDocs(collection(db, 'blog-posts'));
        const posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setBlogPosts(posts);
    };
    fetchPosts();
    }, []);

    useEffect(() => {
    if (userEmail) {
        console.log("User email is %s", userEmail)
        const fetchPermissions = async () => {
        const docRef = doc(db, 'access-control', userEmail);
        const docSnap = await getDoc(docRef);
        setAllowedTags(docSnap.exists() ? docSnap.data().allowedTags : []);
        };
        fetchPermissions();
    }
    }, [userEmail]);

    return (
        <div className='content-page'>
            <Auth onLogin={setUserEmail} />
            From May to December, I will be going on a roadtrip across all 50 states and almost all national parks. This is where I'll be documenting my thoughts and adventures for friends and family to see. The outline of the trip is in the embedded map. Ignore the letters, they're a consequence of My Maps being a bad tool. I'm starting in LA, going down south, up the east coast, along the northeast, sweeping back down for Utah and Colorado, and then cutting through Canada to go up to Alaska via Montana and back down through Washington.

            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1q-3kpkxRgedxqI5yc1HgAcgUMMuBOg8&ehbc=2E312F&noprof=1" width="800" height="600" title='trip-map'></iframe>

            <div className="blogs-section">
                <h1>Travel Blog</h1>
                <BlogList posts={blogPosts} allowedTags={allowedTags}/>
            </div>
        </div>
        
    );
}

export default Roadtrip