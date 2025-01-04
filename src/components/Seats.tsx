import SeatsCost from "./seatsCost"

function Seats() {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const cols = [11, 11, 13, 13, 17, 17, 17, 13];

    return (
        <section className="flex justify-between text-white relative">
            <SeatsCost />
            <section className="flex flex-col items-center mb-20 w-full ml-96 -mt-10">
                {/* Figura de pantalla del cine */}
                <section className="relative">
                    <div className="movie-screen"></div>
                    <div className="movie-shadow"></div>
                </section>
                {/* Fila de asientos */}
                <section className="w-full">
                    <div className="w-[45rem] mx-auto flex flex-col items-center justify-center">
                        {
                            rows.map((row, rowIndex) => (
                                <div
                                    key={rowIndex}
                                    className="grid gap-1 mb-1"
                                    style={{
                                        gridTemplateColumns: `repeat(${cols[rowIndex]}, 2rem)`,
                                        gridAutoRows: `2rem`
                                    }}
                                >
                                    {
                                        Array.from({ length: cols[rowIndex] }, (_, i) => (
                                            <button
                                                key={`${rowIndex}-${i}`}
                                                className="border border-white/30 rounded-lg p-1 text-center text-xs hover:bg-red-700 hover:text-white"
                                            >
                                                {`${row}${i + 1}`}
                                            </button>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                </section>




            </section>
        </section>
    )
}

export default Seats