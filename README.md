🌦️ Weather App

A responsive Weather Application built using React.js that allows users to search for any city and view real-time weather information, including current conditions, hourly forecast, and daily forecast.

🚀 Features

🔍 Search weather by city name
🌡️ Displays current temperature, weather condition, and wind speed
⏰ Hourly forecast for upcoming hours
📅 Daily forecast for next 5 days
⚡ Loading indicator during API calls
❌ Error handling for invalid city input
📱 Responsive and user-friendly UI

🛠️ Tech Stack

⚛️ React.js
📡 Axios
🌐 OpenWeather API
🎨 CSS

🔑 API Integration

The application integrates external APIs to fetch weather data. It uses the Current Weather Data API to display real-time weather details and the 5-Day / 3-Hour Forecast API to generate both hourly and daily forecasts.

🧠 How It Works

The user enters a city name in the search box, and the application sends API requests to fetch both current weather data and forecast data.

The current weather section displays temperature, weather conditions, and wind speed. The hourly forecast shows the first few upcoming records, while the daily forecast is calculated by selecting every 8th record, which represents one full day.

If the entered city is invalid, the application displays an error message instead of weather data.

⚠️ Error Handling

If the API fails or the city is not found, the application displays a "City Not Found" message. It also clears any previously shown data to avoid confusion. When the user performs a new search, the error state is reset automatically.