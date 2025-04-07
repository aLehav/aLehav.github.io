import React from 'react';
import BlogList from './BlogList';
import { blogPosts } from './BlogData';

import './Roadtrip.css';

function Roadtrip() {
    return (
        <div className='content-page'>
            From May to December, I will be going on a roadtrip across all 50 states and almost all national parks. This is where I'll be documenting my thoughts and adventures for friends and family to see. The outline of the trip is in the embedded map. Ignore the letters, they're a consequence of My Maps being a bad tool. I'm starting in LA, going down south, up the east coast, along the northeast, sweeping back down for Utah and Colorado, and then cutting through Canada to go up to Alaska via Montana and back down through Washington.

            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1q-3kpkxRgedxqI5yc1HgAcgUMMuBOg8&ehbc=2E312F&noprof=1" width="800" height="600" title='trip-map'></iframe>

            <div className="blogs-section">
                <h1>Travel Blog</h1>
                <BlogList posts={blogPosts} />
            </div>
        </div>
        
    );
}

export default Roadtrip