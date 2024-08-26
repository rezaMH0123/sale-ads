import Container from "../../components/Container";
import "leaflet/dist/leaflet.css";
import MapJayno from "../../components/Map";
import { Position } from "../../components/Map/map.type";
import { useState } from "react";
import CreatAdsForm from "../../sections/CreatAdsForm";

export default function CreateAds() {
  const [position, setPosition] = useState<Position | undefined>({
    lat: 35.732052438558734,
    lng: 51.337615605578455,
  });

  return (
    <Container outherClassName="py-8 h-[700px] overflow-y-scroll">
      <div className="col-span-full md:col-span-5 md:px-6 ">
        <div className="shadow-card-3 dark:bg-white rounded-lg h-full">
          <CreatAdsForm position={position!} />
        </div>
      </div>
      <div className="col-span-full md:col-span-7  rounded-lg overflow-hidden mt-8 md:mt-0 h-[300px] md:h-full mb-5">
        <MapJayno position={position!} setPosition={setPosition} />
      </div>
    </Container>
  );
}
