import React, {useEffect, useState, useRef, useCallback} from 'react';
import './Roadtrip.css';
import {APIProvider, Map, AdvancedMarker, Pin, useMap} from '@vis.gl/react-google-maps';
import {MarkerClusterer} from '@googlemaps/markerclusterer';
import type {Marker} from '@googlemaps/markerclusterer';

type Poi ={ key: string, location: google.maps.LatLngLiteral }
const locations: Poi[] = [
  {key: 'operaHouse', location: { lat: -33.8567844, lng: 151.213108  }},
  {key: 'tarongaZoo', location: { lat: -33.8472767, lng: 151.2188164 }},
  {key: 'manlyBeach', location: { lat: -33.8209738, lng: 151.2563253 }},
  {key: 'hyderPark', location: { lat: -33.8690081, lng: 151.2052393 }},
  {key: 'theRocks', location: { lat: -33.8587568, lng: 151.2058246 }},
  {key: 'circularQuay', location: { lat: -33.858761, lng: 151.2055688 }},
  {key: 'harbourBridge', location: { lat: -33.852228, lng: 151.2038374 }},
  {key: 'kingsCross', location: { lat: -33.8737375, lng: 151.222569 }},
  {key: 'botanicGardens', location: { lat: -33.864167, lng: 151.216387 }},
  {key: 'museumOfSydney', location: { lat: -33.8636005, lng: 151.2092542 }},
  {key: 'maritimeMuseum', location: { lat: -33.869395, lng: 151.198648 }},
  {key: 'kingStreetWharf', location: { lat: -33.8665445, lng: 151.1989808 }},
  {key: 'aquarium', location: { lat: -33.869627, lng: 151.202146 }},
  {key: 'darlingHarbour', location: { lat: -33.87488, lng: 151.1987113 }},
  {key: 'barangaroo', location: { lat: - 33.8605523, lng: 151.1972205 }},
];

const PoiMarkers = ({ pois }: { pois: Poi[]}) => {
    const map = useMap();
    const handleClick = useCallback((ev: google.maps.MapMouseEvent) => {
        if(!map) return;
        if(!ev.latLng) return;
        map.panTo(ev.latLng);
    },[map]);

    return (
        <>
            {pois.map((poi: Poi) => (
                <AdvancedMarker
                    key={poi.key}
                    position={poi.location}
                    clickable={true}
                    onClick={handleClick} // Pass location directly
                >
                    <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
                </AdvancedMarker>
            ))}
        </>
    );
};

const RoadtripMap = () => (
<APIProvider apiKey={'AIzaSyCSZTHeHWu-FZ1N-YN9xEv-Zm1yF1xKlf0'} onLoad={() => console.log('Maps API has loaded.')}>
    <Map
        defaultZoom={13}
        mapId='19bec56df9a20125'
        defaultCenter={ { lat: -33.860664, lng: 151.208138 } }
    >
        <PoiMarkers pois={locations} />
    </Map>
</APIProvider>
);

function Roadtrip() {
    return (
        <div className='content-page'>
            From May to December, I will be going on a roadtrip across all 50 states and almost all national parks. This is where I'll be documenting my thoughts and adventures for friends and family to see. The outline of the trip is in the embedded map. Ignore the letters, they're a consequence of My Maps being a bad tool. I'm starting in LA, going down south, up the east coast, along the northeast, sweeping back down for Utah and Colorado, and then cutting through Canada to go up to Alaska via Montana and back down through Washington.

            {/* <div style={{"height":"500px"}}><RoadtripMap/></div> */}
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1q-3kpkxRgedxqI5yc1HgAcgUMMuBOg8&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>
        </div>
        
    );
}

export default Roadtrip