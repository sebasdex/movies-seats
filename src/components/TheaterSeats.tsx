import { useEffect, useState } from "react";
import { useTheater } from "../hooks/useTheater";

function TheaterSeats() {
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const cols = [11, 11, 13, 13, 17, 17, 17, 13];

  const {
    selectedTheaterArray,
    selectedShowTime,
    localOccupiedSeats,
    setSelectedSeats,
    selectedSeats,
  } = useTheater();

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

  const toggleSeat = (seat: string) => {
    if (selectedShowTime === null) return;

    const isAlreadySelected = selectedSeats.includes(seat);

    setSelectedSeats((prev) =>
      isAlreadySelected
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  };

  const theaterName =
    selectedTheaterArray.length > 0 &&
      selectedShowTime !== null
      ? selectedTheaterArray[0].name
      : "???";

  return (
    <section className="flex flex-col items-center mb-20 min-w-80 max-w-screen-lg relative flex-1">
      <h1 className="text-center text-xl font-bold mb-4">{theaterName}</h1>

      <section className="relative">
        <div className="movie-screen"></div>
        <div className="movie-shadow"></div>
      </section>

      <section className="w-full">
        <div className="w-full mx-auto flex flex-col items-center justify-center">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid gap-1 mb-1"
              style={{
                gridTemplateColumns: `repeat(${cols[rowIndex]}, ${isSmallScreen < 768 ? "1rem" : "2rem"
                  })`,
                gridAutoRows: `${isSmallScreen < 768 ? "1rem" : "2rem"}`,
              }}
            >
              {Array.from({ length: cols[rowIndex] }, (_, i) => {
                const seatId = `${row}${i + 1}`;
                const isOccupied = localOccupiedSeats.includes(seatId);
                const isSelected = selectedSeats.includes(seatId);

                return (
                  <button
                    key={`${rowIndex}-${i}`}
                    onClick={() => toggleSeat(seatId)}
                    disabled={selectedShowTime === null || isOccupied}
                    className={`border rounded-lg p-1 text-center text-xs ${selectedShowTime === null
                      ? "bg-gray-300 text-gray-400 cursor-not-allowed"
                      : isOccupied
                        ? "bg-red-700 text-white cursor-not-allowed"
                        : isSelected
                          ? "bg-red-700 text-white"
                          : "bg-gray-300 text-black hover:bg-red-500"
                      }`}
                  >
                    {isSmallScreen < 768 ? "" : seatId}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

export default TheaterSeats;
