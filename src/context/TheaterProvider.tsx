import { useState } from "react"
import { theaters } from "../data/theaters"
import TheaterContext from "./FilterContext"
import { TheaterHourInfo } from "../types/theater"
export const TheaterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [theaterHourInfo, setTheaterHourInfo] = useState<TheaterHourInfo[]>([]);
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const idMovieFunction = (slugId: string) => {
        return parseInt(slugId?.split("-")[slugId.split("-").length - 1] || "0");
    }
    const theaterInfo = (id: number) => {
        return theaters
            .filter(theater => theater.showTimes.some(showTime => showTime.movieId === id))
            .map(theater => ({
                ...theater,
                showTimes: theater.showTimes.filter(showTime => showTime.movieId === id)
            }))
    }

    return (
        <TheaterContext.Provider value={{
            theaterInfo,
            idMovieFunction,
            setTheaterHourInfo,
            theaterHourInfo,
            isChecked,
            setIsChecked
        }}>
            {children}
        </TheaterContext.Provider>
    )
}