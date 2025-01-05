import { useNavigate, useParams } from "react-router";
import { moviesData } from "../data/moviesData";
function SeatsCost() {
  const navigate = useNavigate();
  const { slugId } = useParams();
  const idMovie = parseInt(slugId?.split("-")[slugId.split("-").length - 1] || "0");
  const movieInfo = moviesData.find((movie) => movie.id === idMovie);
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
          <div key={1}>
            <input
              type="radio"
              id={"1"}
              name="schedule"
              value={1}
              className="peer hidden"
            />
            <label
              htmlFor={`1`}
              className="flex items-center justify-between gap-4 p-2 border border-white/30 cursor-pointer transition-all 
                   peer-checked:bg-red-700 peer-checked:text-white hover:bg-gray-600 hover:text-white"
            >
              <p>10:00</p>
              <p>$80.00</p>
            </label>
          </div>
        </div>
        <div className="space-y-2">
          <div key={2}>
            <input
              type="radio"
              id={"2"}
              name="schedule"
              value={2}
              className="peer hidden"
            />
            <label
              htmlFor={`2`}
              className="flex items-center justify-between gap-4 p-2 border border-white/30 cursor-pointer transition-all 
                   peer-checked:bg-red-700 peer-checked:text-white hover:bg-gray-600 hover:text-white"
            >
              <p>14:00</p>
              <p>$100.00</p>
            </label>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 p-2 border border-white/30">
          <p className="flex-1">Asiento(s)</p>
          <p className="text-gray-400">Aún sin elegir</p>
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
