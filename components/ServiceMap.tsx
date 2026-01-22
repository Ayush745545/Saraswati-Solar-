import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

const ServiceMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapContainerRef.current && !mapInstanceRef.current) {
      // Fix for default marker icons in Leaflet when using bundlers/ESM
      // @ts-ignore
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });

      // Coordinates for Saharanpur / Talheri Buzurg region
      // Centering roughly between Saharanpur city and Deoband
      const centerLat = 29.85; 
      const centerLng = 77.60;

      const map = L.map(mapContainerRef.current).setView([centerLat, centerLng], 9);
      mapInstanceRef.current = map;

      // Add OpenStreetMap tile layer
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(map);

      // Add a marker for the main office (Approx location for Talheri Buzurg)
      const officeLat = 29.82; 
      const officeLng = 77.65;
      
      L.marker([officeLat, officeLng])
        .addTo(map)
        .bindPopup('<b>Saraswati Solar</b><br>Regional Center, Talheri Buzurg')
        .openPopup();

      // Add a circle representing service area (approx 40km radius)
      L.circle([officeLat, officeLng], {
        color: '#f97316', // Orange-500
        fillColor: '#f97316',
        fillOpacity: 0.1,
        radius: 35000
      }).addTo(map);
      
      // Force map invalidation to ensure correct rendering if container was hidden/resized
      setTimeout(() => {
        map.invalidateSize();
      }, 100);
    }

    // Cleanup on unmount
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full h-full relative z-0">
      <div 
        ref={mapContainerRef} 
        className="w-full h-full rounded-lg"
        style={{ minHeight: '100%' }}
      />
    </div>
  );
};

export default ServiceMap;