import { createContext } from "react";

interface Theater {
    id: number;
    name: string;
    seats: number;
    showTimes: ShowTimes[];
};

interface ShowTimes {
    time: string;
    price: number;
    movieId: number;
    occupiedSeats: string[];
};

type TheaterContextType = {
    theaterInfo: (id: number) => Theater[];
    idMovieFunction
    : (idSlug: string) => number;
}

const TheaterContext = createContext<TheaterContextType | undefined>(undefined);

export default TheaterContext;