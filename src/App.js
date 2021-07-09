import './App.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SitesMap from './components/Map';

const { REACT_APP_GOOGLE_MAPS_API_KEY, REACT_APP_API_URL } = process.env;

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(REACT_APP_API_URL);
      console.log('DATA', response.data);

      const d = response.data.map((point) => {
        const pt = {
          location: new window.google.maps.LatLng(
            point.coordinates[1],
            point.coordinates[0],
          ),
          weight: point.value,
        };
        return pt;
      });
      console.log('>>> d', d);

      setData(d);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <SitesMap
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=visualization`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        data={data}
      />
    </div>
  );
}

export default App;
