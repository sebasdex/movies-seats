import { useEffect, useState } from "react";

function TheaterSeats() {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const cols = [11, 11, 13, 13, 17, 17, 17, 13];
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <section className="flex flex-col items-center mb-20 min-w-80 max-w-screen-lg relative flex-1">
            {/* Figura de pantalla del cine */}
            <section className="relative">
                <div className="movie-screen"></div>
                <div className="movie-shadow"></div>
            </section>
            {/* Fila de asientos */}
            <section className="w-ful -mt-10 md:mt-0">
                <div className="w-full mx-auto flex flex-col items-center justify-center">
                    {
                        rows.map((row, rowIndex) => (
                            <div
                                key={rowIndex}
                                className="grid gap-1 mb-1"
                                style={{
                                    gridTemplateColumns: `repeat(${cols[rowIndex]}, ${isSmallScreen < 768 ? '1rem' : '2rem'})`,
                                    gridAutoRows: `${isSmallScreen < 768 ? '1rem' : '2rem'}`
                                }}
                            >
                                {
                                    Array.from({ length: cols[rowIndex] }, (_, i) => (
                                        <button
                                            key={`${rowIndex}-${i}`}
                                            className="border border-white/30 rounded-lg p-1 text-center text-xs hover:bg-red-700 hover:text-white"
                                        >
                                            {isSmallScreen < 768 ? `` : `${row}${i + 1}`}
                                        </button>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </section>
        </section>
    )
}

export default TheaterSeats