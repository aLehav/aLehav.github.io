import React from 'react';
import './Roadtrip.css';
import {APIProvider, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';

const RoadtripMap = () => (
<APIProvider apiKey={'AIzaSyCSZTHeHWu-FZ1N-YN9xEv-Zm1yF1xKlf0'} onLoad={() => console.log('Maps API has loaded.')}>
    <Map
        defaultZoom={13}
        defaultCenter={ { lat: -33.860664, lng: 151.208138 } }
        onCameraChanged={ (ev: MapCameraChangedEvent) =>
        console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
        }>
    </Map>
</APIProvider>
);

function Roadtrip() {
    return (
        <div className='content-page'>
            From May to December, I will be going on a roadtrip across all 50 states and almost all national parks. This is where I'll be documenting my thoughts and adventures for friends and family to see.

            <RoadtripMap/>
        </div>
        
    );
}

export default Roadtrip