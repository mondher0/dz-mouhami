"use client";
import "leaflet/dist/leaflet.css";
import "../loyer/index.css";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
const DisplayLoyerLocation = ({ longitude, latitude }) => {
  const customIcon = L.icon({
    iconUrl: "/assets/marker-icon-2x.png", // Path to your custom marker icon
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });
  const position = [latitude, longitude];

  return (
    <div className="flex flex-col items-start justify-start gap-3 w-full">
      <label className="text-[#FFC700] text-[24px] font-semibold">
        goegraphical location :
      </label>
      <MapContainer center={position} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            Your location = {position[0]}==={position[1]}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default DisplayLoyerLocation;
