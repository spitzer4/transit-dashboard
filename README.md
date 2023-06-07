# transit-dashboard

# Transit Dashboard

The Transit Dashboard is a web application that provides real-time information about train arrivals and weather conditions. It fetches data from the Chicago Transit Authority (CTA) Train API and a weather API to display the information on a user-friendly dashboard.

## Features

- Train Arrivals: The dashboard displays the upcoming train arrivals for multiple stations in Chicago. It shows the station name, destination, and estimated arrival time for each train.
- Weather Information: The dashboard also provides current weather information such as weather condition, temperature, and humidity.

## Technologies Used

- Node.js: The backend server is built using Node.js, a JavaScript runtime environment.
- Express.js: The web application framework used for handling HTTP requests and routing.
- Axios: A promise-based HTTP client library used for making API requests.
- HTML/CSS: The frontend of the application is built using HTML and styled with CSS.

## Installation

1. Clone the repository: `git clone # Transit Dashboard

The Transit Dashboard is a web application that provides real-time information about train arrivals and weather conditions. It fetches data from the Chicago Transit Authority (CTA) Train API and a weather API to display the information on a user-friendly dashboard.

## Features

- Train Arrivals: The dashboard displays the upcoming train arrivals for multiple stations in Chicago. It shows the station name, destination, and estimated arrival time for each train.
- Weather Information: The dashboard also provides current weather information such as weather condition, temperature, and humidity.

## Technologies Used

- Node.js: The backend server is built using Node.js, a JavaScript runtime environment.
- Express.js: The web application framework used for handling HTTP requests and routing.
- Axios: A promise-based HTTP client library used for making API requests.
- HTML/CSS: The frontend of the application is built using HTML and styled with CSS.

## Installation

1. Clone the repository: `git clone https://github.com/spitzer4/transit-dashboard`
2. Navigate to the project directory: `cd transit-dashboard`
3. Install dependencies: `npm install`

## Configuration

1. Create a new file in your project directory: In your project directory, create a new file and name it something like 'config.js'.
2. Follow these steps to configure your API keys:
    1. Train API: Obtain an API key from the Chicago Transit Authority (CTA) Train API. Visit their website and create an account.
    2. Weather API: Obtain an API key from the weather API provider. Visit their website and create an account if required.
3. Review the CTA Train API documentation and choose which map IDs you would like to include.
4. Define your API keys: Inside the config.js file, define variables for each of your API keys. For example:
```
// config.js
module.exports = {
	trainAPIKey: 'YOUR_API_KEY',
	mapIds: ['MAP_ID_1', 'MAP_ID_2', ...],
	weatherAPIKey: 'YOUR_WEATHER_API_KEY'
  };

```
Replace 'YOUR_API_KEY', 'YOUR_WEATHER_API_KEY', and 'MAP_ID_X' with your actual API keys and map IDs.

5. Update your .gitignore file: Open your .gitignore file and add a line to exclude the config.js file. This ensures that the file is not tracked by version control systems like Git. If you don't have a .gitignore file, create one in the root of your project and add the following line:
```
config.js
```
Save the .gitignore file.

6. Usage in your code: In your main code file or wherever you need to access the API keys, import the config.js file and use the variables defined in it. For example:
```
// main.js
const config = require('./config'); 
// Use the config.trainAPIKey, config.weatherAPIKey, and config.mapIds variables in your code
// ...
```
Make sure to adjust the import path if your config.js file is located in a different directory.

## Usage

1. Start the server: `node main.js`
2. Open a web browser and visit `http://localhost:3000` to access the transit dashboard.
3. The dashboard will display the train arrivals and weather information in their respective sections.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

[MIT](LICENSE)
