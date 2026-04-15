import React, { useState } from "react";
import Endpoints from "./EndPoints";
const API_KEY = import.meta.env.VITE_API_KEY;
import axiosInstance from "./axiosInstance";

const useWeather = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [forecast, setForecast] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, seterror] = useState(false);

  const api = async () => {
    if (!city) return;

    try {
      setLoading(true);
      let res = await axiosInstance.get(
        `${Endpoints.weather}?q=${city}&appid=${API_KEY}&units=metric`,
      );
      // Forecast
      const res2 = await axiosInstance.get(
        `${Endpoints.forecast}?q=${city}&appid=${API_KEY}&units=metric`,
      );
      setForecast(res2.data);
      setData(res.data);
      seterror(false);
    } catch (err) {
      // alert("City not found");
      seterror(true);
      setData(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };
  return { city, data, forecast, loading, error, api, setCity };
};

export default useWeather;
