import React, { Component, useRef, useEffect } from "react";
import * as Cesium from "cesium";
// import Cesium from "cesium/Cesium";
// import "cesium/Widgets/widgets.css";


const CesiumMap = ({ apiKey }) => {
  useEffect(() => {
    const viewer = new Cesium.Viewer("cesiumContainer", {
      animation: false,
      baseLayerPicker: false,
      navigationHelpButton: false,
      sceneModePicker: false,
      homeButton: false,
      geocoder: false,
      fullscreenButton: false,
      timeline: false,
      terrainProvider: new Cesium.CesiumTerrainProvider({
        url: `https://api.maptiler.com/tiles/terrain-quantized-mesh-v2/?key=${apiKey}`,
        credit: new Cesium.Credit(
          '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy;MapTiler</a>'
        ),
        requestVertexNormals: true,
      }),
      imageryProvider: new Cesium.UrlTemplateImageryProvider({
        url: `https://api.maptiler.com/tiles/satellite-v2/{z}/{x}/{y}.jpg?key=${apiKey}`,
        minimumLevel: 0,
        maximumLevel: 20,
        tileWidth: 512,
        tileHeight: 512,
        credit: new Cesium.Credit(
          '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy;MapTiler</a>'
        ),
      }),
    });

    viewer.camera.setView({
      destination: Cesium.Cartesian3.fromDegrees(8.67, 46.72, 4500),
      orientation: {
        pitch: Cesium.Math.toRadians(-20),
      },
    });

    return () => {
      viewer.destroy();
    };
  }, [apiKey]);
  return (
    <div
      id="cesiumContainer"
      style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0 }}
    >
      <a
        href="https://www.maptiler.com"
        style={{ position: "absolute", right: 10, bottom: 10, zIndex: 999 }}
      >
        <img
          src="https://api.maptiler.com/resources/logo.svg"
          alt="MapTiler logo"
        />
      </a>
    </div>
  );
};

export default CesiumMap;
