import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { moviesData } from "../data/moviesData";
import { useTheater } from "../hooks/useTheater";

function SeatsCost() {
  const navigate = useNavigate();
  const { slugId } = useParams();
  const {
    theaterInfo,
    idMovieFunction,
    setSelectedTheaterArray,
    setSelectedTheater,
    setSelectedShowTime,
    setTheatersArray,
    selectedTheaterArray,
    selectedShowTime,
    setLocalOccupiedSeats,
    setSelectedSeats,
    selectedSeats,
  } = useTheater();


  const idMovie = idMovieFunction(slugId || "0");
  const theaterDetails = theaterInfo(idMovie);
  const movieInfo = moviesData.find((movie) => movie.id === idMovie);

  const totalCost = selectedTheaterArray
    .flatMap((theater) => theater.showTimes
      .reduce((acc, showTime) => acc + (showTime.price * selectedSeats.length), 0).toFixed(2)).toString() || "0.00";

  useEffect(() => {
    setSelectedTheaterArray([]);
    setSelectedTheater(0);
    setSelectedShowTime(null);
  }, [slugId, setSelectedTheaterArray, setSelectedTheater, setSelectedShowTime]);

  const handleSelectHour = (id: number, indexShowTime: number) => {
    const theater = theaterInfo(idMovie).filter((theater) => theater.id === id);
    if (theater.length > 0) {
      setSelectedTheaterArray(theater);
      setSelectedTheater(id);
      setSelectedShowTime(indexShowTime);
    }
  };

  useEffect(() => {
    if (
      selectedTheaterArray.length > 0 &&
      selectedShowTime !== null &&
      selectedTheaterArray[0]?.showTimes[selectedShowTime]
    ) {
      setLocalOccupiedSeats(
        selectedTheaterArray[0].showTimes[selectedShowTime].occupiedSeats || []
      );
    } else {
      setLocalOccupiedSeats([]);
    }
  }, [selectedTheaterArray, selectedShowTime, setLocalOccupiedSeats]);

  useEffect(() => {
    setSelectedSeats([]);
  }, [selectedShowTime, selectedTheaterArray, setSelectedSeats]);


  const confirmSeats = () => {
    const theaterId = selectedTheaterArray[0]?.id;
    const movieId = selectedTheaterArray[0]?.showTimes[selectedShowTime || 0]?.movieId;

    if (theaterId === undefined || selectedShowTime === null || movieId === undefined) return;

    setTheatersArray((prev) =>
      prev.map((theater) => {
        if (theater.id === theaterId) {
          return {
            ...theater,
            showTimes: theater.showTimes.map((showTime) => {
              if (showTime.movieId === movieId) {
                const newOccupiedSeats = [
                  ...new Set([...showTime.occupiedSeats, ...selectedSeats]),
                ];
                setLocalOccupiedSeats(newOccupiedSeats);
                return {
                  ...showTime,
                  occupiedSeats: newOccupiedSeats,
                };
              }
              return showTime;
            }),
          };
        }
        return theater;
      })
    );

    setSelectedSeats([]);
  };

  return (
    <section className="flex flex-col min-w-80 md:-top-64 md:left-50">
      <article className="w-80 bg-black mx-auto -mt-40">
        <img
          src={movieInfo?.img}
          alt={movieInfo?.name}
          className="h-full w-full object-cover object-top aspect-auto"
        />
      </article>
      <article className="my-8 flex flex-col gap-2 p-2">
        <p className="text-sm mb-2 text-white/70">
          * Selecciona el horario de tu preferencia
        </p>
        <div className="space-y-2">
          {theaterDetails.map((theater) =>
            theater.showTimes.map((showTime, index) => (
              <div key={`${theater.id}-${index}`}>
                <input
                  type="radio"
                  id={`${theater.id}-${index}`}
                  name="schedule"
                  value={`${theater.id}-${index}`}
                  className="peer hidden"
                  onChange={() => handleSelectHour(theater.id, index)}
                />
                <label
                  htmlFor={`${theater.id}-${index}`}
                  className="flex items-center justify-between gap-4 p-2 border border-white/30 cursor-pointer transition-all
                     peer-checked:bg-red-700 peer-checked:text-white hover:bg-gray-600 hover:text-white"
                >
                  <p>{showTime.time}</p>
                  <p>${showTime.price}</p>
                </label>
              </div>
            ))
          )}
        </div>

        <div className="flex items-center justify-between gap-4 p-2 border border-white/30">
          <p className="flex-1">Asiento(s)</p>
          <p className="text-gray-400 max-w-40">
            {selectedSeats.length > 0 ? selectedSeats.join(", ") : "Sin asignar"}
          </p>
        </div>
        <div className="flex justify-end">
          <p className="p-2 text-white/30">
            Total:
            <span className="text-white ml-2 text-xl">${totalCost}</span>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-8">
          <button
            className="btn btn-outline btn-error"
            onClick={() => navigate("/")}
          >
            Cancelar
          </button>
          <button
            className={` ${selectedSeats.length === 0 || selectedShowTime === null
              ? "opacity-50 cursor-not-allowed bg-transparent border border-red-400 rounded-lg text-gray-500"
              : "border border-red-400 text-red-400 rounded-lg hover:bg-red-500 hover:text-black"
              }`}
            onClick={() => confirmSeats()}
            disabled={selectedSeats.length === 0 || selectedShowTime === null}
          >
            Reservar
          </button>


        </div>
      </article>
    </section>
  );
}

export default SeatsCost;
