import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    try {
      // Initialize map with a valid token
      mapboxgl.accessToken = 'pk.eyJ1IjoibG92YWJsZSIsImEiOiJjbHRwOWYyZWowMDJqMnFxbDZ0ZjBwcXpnIn0.Zm1GhRXXmxNCml6M2SK27Q';
      
      if (!map.current) {
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/dark-v11',
          center: [72.94661491490255, 19.17165698703431], // Mulund West coordinates
          zoom: 15,
          pitch: 45,
        });

        // Add navigation controls after map is loaded
        map.current.on('load', () => {
          if (map.current) {
            map.current.addControl(
              new mapboxgl.NavigationControl(),
              'top-right'
            );

            // Add marker for office location
            new mapboxgl.Marker({ color: '#00A3FF' })
              .setLngLat([72.94661491490255, 19.17165698703431])
              .setPopup(
                new mapboxgl.Popup({ offset: 25 })
                  .setHTML('<h3 class="text-sm font-bold">Axima Office</h3><p class="text-xs">Runwal R Square, Mulund West</p>')
              )
              .addTo(map.current);
          }
        });
      }
    } catch (error) {
      console.error('Error initializing map:', error);
    }

    // Cleanup function
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default Map;