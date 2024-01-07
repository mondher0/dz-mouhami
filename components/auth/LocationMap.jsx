import "leaflet/dist/leaflet.css";
import "./index.css";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { setPostion } from "../../store/features/auth/auth-slice";
const LocationMap = () => {
  const position = useSelector((state) => state.auth.position);
  const dispatch = useDispatch();
  const customIcon = L.icon({
    iconUrl: "/assets/marker-icon-2x.png", // Path to your custom marker icon
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  const handleClick = (e) => {
    const { lat, lng } = e.latlng;
    dispatch(setPostion([lat, lng]));
  };

  const ClickEvents = () => {
    useMapEvents({
      click: handleClick,
    });
    return null;
  };

  return (
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
      <ClickEvents />
    </MapContainer>
  );
};

export default LocationMap;
