import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useRef } from "react";
import CesiumMap from "./CesiumMap";
import FirstTest from "./JestTesting/FirstTest";
import ImageTest from "./JestTesting/ImageTest";

// Set your Cesium ion access token
// Cesium.Ion.defaultAccessToken = 'YOUR_CESIUM_ION_ACCESS_TOKEN';

function App() {
  const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2Y2I0NTdjNi1iOGQwLTQ2ZmItOTZmMC05NTIzNzkxMzI2NjQiLCJpZCI6MjEzMTM0LCJpYXQiOjE3MTQ5NzQ2OTN9.XspL92YCYNlYl_kN0FSf3pZFUDNQl5NL7BKOSkPjTS4";

  return (
    <div className="App">
      <h1>Test Check</h1>
      <FirstTest />
      <ImageTest />
      {/* <CesiumMap apiKey={apiKey} /> */}
    </div>
  );
}

export default App;
