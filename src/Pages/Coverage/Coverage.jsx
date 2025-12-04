import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
const Coverage = () => {
  const position = [23.6850, 90.3563];
  const location = useLoaderData()
  console.log(location)

  return (
    <div>
      <h2 className="text-5xl font-bold">We are available in 64 Districts</h2>

      <div className="border w-full h-[800px]">
        <MapContainer
        className="h-[800px]"
        center={position} zoom={7} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* it shows the location marker in the locations of shops  */}
          {location.map(center => <Marker position={[center.latitude, center.longitude]}>
            <Popup>
              <strong>{center.district}</strong> <br /> Service Area: {center.covered_area.join(', ')}
            </Popup>
          </Marker>)}

        </MapContainer>
        ,
      </div>
    </div>
  );
};

export default Coverage;
