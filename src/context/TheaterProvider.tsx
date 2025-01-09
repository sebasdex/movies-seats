import { useState } from "react";
import { theaters } from "../data/theaters";
import TheaterContext from "./FilterContext";
import { Theater, TheaterHourInfo } from "../types/theater";
export const TheaterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedTheaterArray, setSelectedTheaterArray] = useState<TheaterHourInfo[]>([]);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [theatersArray, setTheatersArray] = useState<Theater[]>(theaters);
  const [selectedTheater, setSelectedTheater] = useState<number>(0);
  const [selectedShowTime, setSelectedShowTime] = useState<number | null>(null);
  const [localOccupiedSeats, setLocalOccupiedSeats] = useState<string[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const idMovieFunction = (slugId: string) => {
    return parseInt(slugId?.split("-")[slugId.split("-").length - 1] || "0");
  };
  const theaterInfo = (id: number) => {
    return theatersArray
      .filter((theater) =>
        theater.showTimes.some((showTime) => showTime.movieId === id)
      )
      .map((theater) => ({
        ...theater,
        showTimes: theater.showTimes.filter(
          (showTime) => showTime.movieId === id
        ),
      }));
  };

  return (
    <TheaterContext.Provider
      value={{
        theaterInfo,
        idMovieFunction,
        setSelectedTheaterArray,
        selectedTheaterArray,
        isChecked,
        setIsChecked,
        theatersArray,
        setTheatersArray,
        selectedTheater,
        setSelectedTheater,
        selectedShowTime,
        setSelectedShowTime,
        localOccupiedSeats,
        setLocalOccupiedSeats,
        selectedSeats,
        setSelectedSeats,
      }}
    >
      {children}
    </TheaterContext.Provider>
  );
};
