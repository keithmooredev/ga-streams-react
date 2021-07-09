import './App.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import SiteData from './components/SiteData';
import SitesMap from './components/SitesMap';

const url = 'http://localhost:9000/iv';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(url);
      console.log('>>> data', response.data);
      setData(response.data);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <SitesMap data={data} />
    </div>
  );
}

export default App;
