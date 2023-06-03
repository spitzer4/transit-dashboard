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

To run the application, you need to provide API keys for the Train API and the Weather API. Follow the steps below to configure the API keys:

1. Train API: Obtain an API key from the Chicago Transit Authority (CTA) Train API. Visit their website and create an account if you haven't already. Once you have the API key, open the `server.js` file and replace `<YOUR_TRAIN_API_KEY>` with your actual API key.
2. Weather API: Obtain an API key from the weather API provider. Visit their website and create an account if required. Once you have the API key, open the `server.js` file and replace `<YOUR_WEATHER_API_KEY>` with your actual API key.

## Usage

1. Start the server: `npm start`
2. Open a web browser and visit `http://localhost:3000` to access the transit dashboard.
3. The dashboard will display the train arrivals and weather information in their respective sections.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

[MIT](LICENSE)
