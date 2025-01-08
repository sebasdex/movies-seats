import { useEffect, useState } from "react";
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
  } = useTheater();

  const [selectedSeats, setSelectedSeats] = useState<string[]>([]); // Local state for selected seats

  const idMovie = idMovieFunction(slugId || "0");
  const theaterDetails = theaterInfo(idMovie);
  const movieInfo = moviesData.find((movie) => movie.id === idMovie);

  // Reset states when movie changes (slugId)
  useEffect(() => {
    setSelectedTheaterArray([]);
    setSelectedTheater(0);
    setSelectedShowTime(null);
    setSelectedSeats([]); // Clear seats when changing movie
  }, [slugId, setSelectedTheaterArray, setSelectedTheater, setSelectedShowTime]);

  // Function to handle schedule selection
  const handleSelectHour = (id: number, indexShowTime: number) => {
    const theater = theaterInfo(idMovie).filter((theater) => theater.id === id);
    if (theater.length > 0) {
      setSelectedTheaterArray(theater);
      setSelectedTheater(id);
      setSelectedShowTime(indexShowTime);
      setSelectedSeats([]); // Clear selected seats when changing schedule
    }
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
          <p className="text-gray-400">
            {selectedSeats.length > 0
              ? selectedSeats.join(", ")
              : "Sin asignar"}
          </p>
        </div>
        <div className="flex justify-end">
          <p className="p-2 text-white/30">
            Total:
            <span className="text-white ml-2 text-xl">$0.00</span>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-8">
          <button
            className="btn btn-outline btn-error"
            onClick={() => navigate("/")}
          >
            Cancelar
          </button>
          <button className="btn btn-outline btn-error">Reservar</button>
        </div>
      </article>
    </section>
  );
}

export default SeatsCost;
