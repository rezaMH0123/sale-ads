import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import EditAdsForm from "../../sections/EditAdsForm";
import MapJayno from "../../components/Map";
import { useEffect, useState } from "react";
import { Position } from "../../components/Map/map.type";
import { getAdsById } from "../../controllers/adsController";
import { IAds } from "../../types/models/ads.model";
import NotFound from "../NotFound";

export default function EditAds() {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [editData, setEditData] = useState<IAds>();
  const [position, setPosition] = useState<Position | undefined>(undefined);

  useEffect(() => {
    const getAds = async () => {
      try {
        setLoading(true);
        const res = await getAdsById(id!);
        setEditData(res);

        setPosition({ lat: res.lat, lng: res.lng });
      } catch (err) {
      } finally {
        setLoading(false);
      }
    };
    getAds();
  }, []);

  if (!loading && !editData) {
    return <NotFound />;
  }

  return (
    <>
      {loading ? (
        <div className="h-full flex justify-center items-center">
          صبر کنید...
        </div>
      ) : (
        <Container outherClassName="py-8 h-[700px] overflow-y-scroll">
          <div className="col-span-full md:col-span-5 md:px-6 ">
            <div className="shadow-card-3 dark:bg-white rounded-lg h-full">
              <EditAdsForm
                position={position!}
                defaultValues={{
                  address: editData!.address,
                  phone: editData!.phone,
                  description: editData!.description,
                }}
                id={id!}
              />
            </div>
          </div>
          <div className="col-span-full md:col-span-7  rounded-lg overflow-hidden mt-8 md:mt-0 h-[300px] md:h-full mb-5">
            {!!(position?.lat && position?.lng) ? (
              <MapJayno position={position} setPosition={setPosition} />
            ) : (
              <div className="flex-1 h-full bg-neutral-200 rounded-md overflow-hidden">
                <div className="flex items-center justify-center h-full w-full font-bold">
                  نقشه بارگذاری نشد، مختصات نادرست است!
                </div>
              </div>
            )}
          </div>
        </Container>
      )}
    </>
  );
}
