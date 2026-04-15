---

## 📌 Overview

A responsive Weather Application built using **React.js** that allows users to search for any city and view real-time weather information, including current conditions, hourly forecast, and daily forecast.

---

## 🚀 Features

- 🔍 Search weather by city name  
- 🌡️ Displays temperature, weather condition, and wind speed  
- ⏰ Hourly forecast (next few hours)  
- 📅 Daily forecast (next 5 days)  
- ⚡ Loading indicator during API calls  
- ❌ Error handling for invalid city  
- 📱 Fully responsive UI  
- ♻️ Custom React Hooks for clean and reusable logic  

---

## 🛠️ Tech Stack

- ⚛️ React.js  
- 📡 Axios  
- 🌐 OpenWeather API  
- 🎨 CSS  

---

## 🔑 API Integration

This app uses:
- Current Weather Data API  
- 5-Day / 3-Hour Forecast API  

---

## 🧠 How It Works

- User enters a city name  
- API fetches real-time data  
- Custom Hook manages API calls & state  
- Displays:
  - Current weather  
  - Hourly forecast  
  - Daily forecast  

---

## ⚠️ Error Handling

- Shows **"City Not Found"** if invalid input  
- Clears previous data to avoid confusion  
- Resets error on new search  

---

## 📂 Project Setup

```bash
git clone https://github.com/Aritra1523/Weather-App.git
cd Weather-App
npm install
npm start
