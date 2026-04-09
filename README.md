🌦️ Weather App

A simple and responsive Weather Application built using React.js that allows users to search for any city and view current weather, hourly forecast, and daily forecast.

🚀 Features
🔍 Search weather by city name
🌡️ Displays current temperature, weather condition, and wind speed
⏰ Hourly forecast (next few hours)
📅 Daily forecast (next 5 days)
⚡ Loading indicator while fetching data
❌ Error handling for invalid city names
📱 Responsive UI
🛠️ Tech Stack
⚛️ React.js
📡 Axios (API calls)
🌐 OpenWeather API
🎨 CSS

🔑 API Used
OpenWeather API
Current Weather
5-Day Forecast

🧠 How It Works
User enters a city name
App makes API calls to fetch:
Current weather data
Forecast data
Displays:
Current weather
Hourly forecast (first 6 items)
Daily forecast (every 8th item = 1 per day)
Handles errors if city is not found

⚠️ Error Handling
Displays "City Not Found" when invalid input is given
Clears previous data on error
Resets error state on new search
