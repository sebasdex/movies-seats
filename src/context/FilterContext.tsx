import { createContext } from "react";
import { TheaterHourInfo, Theater } from "../types/theater"

type TheaterContextType = {
    theaterInfo: (id: number) => Theater[];
    idMovieFunction
    : (idSlug: string) => number;
    setTheaterHourInfo: React.Dispatch<React.SetStateAction<TheaterHourInfo[]>>;
    theaterHourInfo: TheaterHourInfo[];
    isChecked: boolean;
    setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const TheaterContext = createContext<TheaterContextType | undefined>(undefined);

export default TheaterContext;