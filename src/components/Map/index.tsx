import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerImg from "../../assets/img/lmap.png";
import { LocationMarkerProps, MapJaynoPrps } from "./map.type";

const markerIcon = new L.Icon({
  iconUrl: markerImg,
  iconSize: [25, 35],
});

function LocationMarker({ setPosition }: LocationMarkerProps) {
  useMapEvents({
    click(event) {
      setPosition(event.latlng);
    },
  });

  return null;
}

export default function MapJayno({
  position,
  setPosition,
  mapKey,
}: MapJaynoPrps) {
  return (
    <MapContainer
      key={mapKey}
      center={position}
      zoom={12}
      style={{ height: "100%", width: "100%", zIndex: "10px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {setPosition && <LocationMarker setPosition={setPosition} />}

      <Marker position={position!} icon={markerIcon} />
    </MapContainer>
  );
}
