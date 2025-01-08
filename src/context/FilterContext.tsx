import { createContext } from "react";
import { TheaterHourInfo, Theater } from "../types/theater";

type TheaterContextType = {
  theaterInfo: (id: number) => Theater[];
  idMovieFunction: (idSlug: string) => number;
  setSelectedTheaterArray: React.Dispatch<React.SetStateAction<TheaterHourInfo[]>>;
  selectedTheaterArray: TheaterHourInfo[];
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  theatersArray: Theater[];
  setTheatersArray: React.Dispatch<React.SetStateAction<Theater[]>>;
  selectedTheater: number;
  setSelectedTheater: React.Dispatch<React.SetStateAction<number>>;
  selectedShowTime: number | null;
  setSelectedShowTime: React.Dispatch<React.SetStateAction<number | null>>;
};

const TheaterContext = createContext<TheaterContextType | undefined>(undefined);

export default TheaterContext;
