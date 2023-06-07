const express = require('express');
const axios = require('axios');
const config = require('./config'); 

const app = express();
const port = 3000;

// Train API
app.get('/api', async (req, res) => {
  const apiKey = config.trainAPIKey;
  const mapIds = config.mapIds;
  const outputType = 'JSON';

  try {
    const allData = await Promise.all(mapIds.map(mapId => {
      const apiEndpoint = `http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=${apiKey}&max=5&mapid=${mapId}&outputType=${outputType}`;
      return axios.get(apiEndpoint);
    }));

    const responseData = allData.map(response => response.data);
    res.json(responseData);
  } catch (error) {
    console.error('Error fetching API data:', error);
    res.status(500).send('Error fetching API data');
  }
});


// Weather API
app.get('/api/weather', async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: {q: 'Chicago'},
        headers: {
          'X-RapidAPI-Key': config.weatherAPIKey,
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
          res.json(response.data);
      } catch (error) {
          console.error(error);
          res.status(500).send('Error fetching weather data');
      }
  });

// Serve the HTML file
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});