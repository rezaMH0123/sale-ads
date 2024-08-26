import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { IAds } from "../../types/models/ads.model";
import {
  getAdsById,
  removeAdsByIdController,
} from "../../controllers/adsController";
import { useNavigate } from "react-router-dom";
import MapJayno from "../../components/Map";
import { DescriptionCard } from "../../components/Card/DescriptionCard";
import { useState } from "react";
import IconDanger from "../../components/icons/danger";
import Modal from "../../components/Modal";

export const ViewAds = () => {
  const { id } = useParams<string>();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const adsQuery = useQuery<IAds>({
    queryKey: ["ads", id],
    queryFn: () => getAdsById(id!),
    enabled: !!id,
  });
  const handleCloseModal = async () => {
    setOpenModal(false);
  };

  const handleDelete = async () => {
    try {
      console.log(id);
      const res = await removeAdsByIdController(id!);
      if (res?.status === 200 || res?.status === 201) {
        setOpenModal(false);
        navigate("/");
      }
    } catch (error) {
      console.error("Error deleting ad:", error);
    }
  };

  if (adsQuery.isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        درحال بارگذاری اطلاعات اگهی، صبور باشید...
      </div>
    );
  }

  if (adsQuery.isError) {
    return (
      <div className="flex flex-col justify-center items-center gap-y-3 h-full">
        <div className="text-red-600">خطا در بارگذاری اطلاعات</div>
        <div>
          <Link to="/">
            <span>بازگشت به صفحه اصلی</span>
          </Link>
        </div>
      </div>
    );
  }

  const ads = adsQuery.data;

  return (
    <main className="container mx-auto h-screen overflow-y-scroll ">
      <div className="bg-white shadow rounded-lg flex flex-col md:flex-row-reverse gap-2 p-4">
        <div className="flex-1 aspect-square bg-neutral-200 rounded-md overflow-hidden z-0">
          {!!(ads?.lng && ads?.lat) ? (
            <MapJayno
              mapKey={`${id}.lat${ads.lat}.${ads.lng}`}
              position={{ lat: ads?.lat!, lng: ads?.lng! }}
            />
          ) : (
            <div className="flex items-center justify-center h-full w-full font-bold">
              نقشه بارگذاری نشد، مختصات نادرست است!
            </div>
          )}
        </div>
        <div className="flex flex-col flex-1">
          <h1 className="text-2xl font-bold mb-4">آگهی شماره: {ads?.id}</h1>
          <hr />
          <div className="p-3">
            <p className="text-gray-700 mb-2">
              <strong>شماره تلفن:</strong> {ads?.phone}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>آدرس:</strong> {ads?.address}
            </p>
            <DescriptionCard title="توضیحات:">{ads?.address}</DescriptionCard>
          </div>
          <div className="flex-1"> </div>
          <p className="text-gray-700">
            <strong>مختصات:</strong> {ads?.lat}, {ads?.lng}
          </p>
          <hr className="my-2" />
          <div className="mt-3 flex justify-end gap-x-2">
            <button
              onClick={() => navigate(`/editAds/${ads?.id}`)}
              className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition-colors duration-200"
            >
              ویرایش
            </button>
            <button
              onClick={() => setOpenModal(true)}
              className="px-4 py-2 bg-rose-500 text-white rounded hover:bg-rose-600 transition-colors duration-200"
            >
              حذف
            </button>
          </div>
        </div>
      </div>
      <Modal openModal={openModal} handleCloseModal={handleCloseModal}>
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white w-[500px] h-80 rounded-lg flex flex-col justify-between items-center p-8"
        >
          <div className="flex flex-col items-center">
            <IconDanger className="stroke-red-500 w-16 h-16 mb-4" />
            <span>ایا از حذف آگهی اطمینان دارید</span>
          </div>

          <div className="flex justify-between  w-2/3 px-4 ">
            <button
              onClick={handleCloseModal}
              className="border border-slate-700  p-2 px-10 rounded-lg"
            >
              انصراف
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white p-2 px-10 rounded-lg"
            >
              حذف
            </button>
          </div>
        </div>
      </Modal>
    </main>
  );
};
