import React, { FC } from "react";
import { AdsCardProps } from "./ads-card.type";

export const AdsCard: FC<AdsCardProps> = ({ ads }) => {
  return (
    <div className="h-full flex flex-col border cursor-pointer border-gray-300 p-6 mb-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 bg-white scale-100 hover:scale-105">
      <h2 className="font-bold text-2xl text-cyan-500 line-clamp-1">
        آگهی شماره: {ads.id}
      </h2>
      <hr className="my-2" />
      <div className=" flex-1">
        <p className="text-gray-700 line-clamp-2">توضیحات: {ads.description}</p>
      </div>
      <div className="flex items-center my-1 text-gray-500">
        <p className="line-clamp-1">آدرس: {ads.address}</p>
      </div>
    </div>
  );
};
