import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './Map.css';
import mapboxgl from 'mapbox-gl';
import Marker from '../Marker/Marker';

mapboxgl.accessToken ='pk.eyJ1IjoibWFyZWxsYSIsImEiOiJjbDIwaWJvcGowd2x1M2tucnB6ZmNsY3JoIn0.CVo2zzXXWwAj2mVDnwagvg';

mapboxgl.setRTLTextPlugin('https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
null,
true //Lazy load the plugin
);

export const stores = {

    'type': 'FeatureCollection',
    'features': [
          {
            'type': 'Feature',
            'geometry': {
              'coordinates': [36.720798, 34.725587]
            },
            'properties': {
              'name':'The moon Shop',
              'price':'200 000',
              'color':'red',
              'new':'100000'
            }
          },

          {
            'type': 'Feature',
            'geometry': {
              'coordinates': [36.720798, 34.705587]
            },
            'properties': {

              'name':'The moon Shop',
              'price':'200 000',
              'color':'green'
            }
          },

          {
            'type': 'Feature',
            'geometry': {
              'coordinates': [36.700798, 34.725587]
            },
            'properties': {

              'name':'The moon Shop',
              'price':'200 000',
              'color':'orange'
            }
          },

          {
            'type': 'Feature',
            'geometry': {
              'coordinates': [36.720798, 34.720587]
            },
            'properties': {

              'name':'The moon Shop',
              'price':'200 000',
              'color':'blue'
            }
          },

          {
            'type': 'Feature',
            'geometry': {
              'coordinates': [36.723798, 34.725587]
            },
            'properties': {

              'name':'The moon Shop',
              'price':'200 000',
              'color':'blue'
            }
          },
    ]

}

stores.features.forEach((store, i) => {
  store.properties.id = i;
}); 


// latitude: 34.725587, longitude: 36.720798,

export default function Map(){

  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(36.720798);
  const [lat, setLat] = useState(34.725587);
  const [zoom, setZoom] = useState(12);

  // Initialize map when component mounts
  useEffect(() => {

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
      scrollZoom:true
    });

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    // Add FullScreen control 
    map.addControl(new mapboxgl.FullscreenControl(), 'top-right');

    //Add geolocate control to the map
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions:{enableHighAccuracy:true},
      trackUserLocation:true,
      showUserHeading:true
    }),'top-right')

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    map.on('load', () => {
        addMarkers();
    });

 
    function addMarkers() {
      /* For each feature in the GeoJSON object above: */
      for (const marker of stores.features) {
        
        const el = document.createElement('div');
        el.id = `marker-${marker.properties.id}`;
        el.className = 'marker';
        ReactDOM.render(<Marker color={marker.properties.color}/>,el);
  
        /**
         * Create a marker using the div element
         * defined above and add it to the map.
         **/
        new mapboxgl.Marker(el,{offset:[0,-10]})
          .setLngLat(marker.geometry.coordinates)
          .addTo(map);
  
        el.addEventListener('click', (e) => {
          /* Fly to the point */
          flyToStore(marker);
          /* Close all other popups and display popup for clicked store */
          createPopUp(marker);
        });
  
      }
    }

    function flyToStore(currentFeature) {
      map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 17
      });
    }

    function createPopUp(currentFeature) {
      const popUps = document.getElementsByClassName('mapboxgl-popup');

      if (popUps[0]) popUps[0].remove();


      const my_popup_container=document.createElement('div');
      my_popup_container.style.padding='0px';
      my_popup_container.style.textAlign='center';
      const my_popup=
      <>
          <h4 style={{backgroundColor:currentFeature.properties.color}}>
            {currentFeature.properties.name}
          </h4>

          <h5 style={{color:currentFeature.properties.color}}>

            {
              currentFeature.properties.color=="red"?
              <span>

                <span style={{display:'block',textDecoration:'line-through'}}>
                {currentFeature.properties.price}&nbsp;s.p
                </span>

                {currentFeature.properties.new}&nbsp;s.p

              </span>:
              <span>
                {currentFeature.properties.price}&nbsp;s.p
              </span>
            }

          </h5>
      </>;
      ReactDOM.render(my_popup,my_popup_container);

      

      const popup = new mapboxgl.Popup({ closeOnClick: false })
        .setLngLat(currentFeature.geometry.coordinates)
        .setDOMContent(my_popup_container)
        .addTo(map);
    }


    // Clean up on unmount
    return () => map.remove();

  }, []); // eslint-disable-line react-hooks/exhaustive-deps



  return (
  
    <div ref={mapContainerRef} className='mapContainer' style={{position:'relative',zIndex:'0',width: "64%",minHeight: "100vh",marginLeft:'25px',borderRadius:'25px',boxShadow:'5px 5px 20px 10px rgba(0,0,0,0.25)'}}>


            <div className="marker-color">
                Location's Color

                <div>
                    <button type="button" style={{backgroundColor:'orange'}}/>
                    The closest
                </div>

                <div>
                    <button type="button" style={{backgroundColor:'green'}}/>
                    The cheapest
                </div>

                <div>
                    <button type="button" style={{backgroundColor:'red'}}/>
                    With offer
                </div>

                <div>
                    <button type="button" style={{backgroundColor:'blue'}}/>
                    Others
                </div>

            </div>


    </div>

  );
}