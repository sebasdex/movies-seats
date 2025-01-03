import { moviesData } from "../data/moviesData"
function Movies() {
    return (
        <section className="flex flex-col items-center mb-20">
            <section className="text-black grid grid-cols-3 gap-4">
                {moviesData.map((movie) => (
                    <article
                        className="group h-72 w-72 overflow-hidden shadow-md shadow-black relative hover:scale-95 transition-transform duration-300 ease-in-out"
                        key={movie.name}
                    >
                        <img
                            src={movie.img}
                            alt={movie.name}
                            className="h-full w-full object-cover object-top transition-transform duration-300 ease-in-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 p-4 bg-gradient-to-t from-black to-transparent text-white flex flex-col justify-end group transition-opacity duration-300 ease-in-out">
                            {/* Texto inicial */}
                            <div className="transition-opacity duration-300 ease-in-out group-hover:opacity-0">
                                <h3 className="text-lg font-bold">{movie.name}</h3>
                                <p className="font-semibold">{movie.genre}</p>
                                <div className="flex justify-between font-semibold">
                                    {/* <p>{movie.showtimes.join(" | ")}</p> */}
                                    <p>{movie.duration}min</p>
                                    <p>{movie.rating}</p>
                                </div>
                            </div>
                            {/* Texto al hacer hover */}
                            <div className="opacity-0 absolute inset-0 flex flex-col gap-4 items-center justify-center text-center transition-opacity duration-300 ease-in-out group-hover:opacity-100 p-4 hover:cursor-default">
                                <p>{movie.description}</p>
                                <button className="btn btn-outline btn-error">Reservar</button>
                            </div>
                        </div>
                    </article>
                ))}
            </section>
        </section>
    )
}

export default Movies