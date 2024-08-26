export type Position = {
  lat: number;
  lng: number;
};

export type LocationMarkerProps = {
  setPosition: React.Dispatch<React.SetStateAction<Position | undefined>>;
};

export type MapJaynoPrps = {
  mapKey?: string;
  position: Position | undefined;
  setPosition?: React.Dispatch<React.SetStateAction<Position | undefined>>;
};
