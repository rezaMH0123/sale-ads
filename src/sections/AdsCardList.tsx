import { IAds } from "../types/models/ads.model";
import { AdsCard } from "../components/Card/AdsCard";
import { Link } from "react-router-dom";

export const AdsCardList = ({ adsList }: { adsList: IAds[] }) => {
  return (
    <div className="h-1/2 md:h-full">
      <ul className="grid grid-cols-12 gap-3 p-1 ">
        {adsList.map((ads: IAds) => (
          <li key={ads.id} className="col-span-12 md:col-span-6 xl:col-span-4">
            <Link to={`/view/${ads.id}`}>
              <AdsCard ads={ads} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
