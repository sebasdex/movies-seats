import SeatsCost from "./SeatsCost";
import TheaterSeats from "./TheaterSeats";

function Seats() {
  return (
    <section className="flex flex-col gap-8 text-white relative lg:flex-row lg:justify-center">
      <SeatsCost />
      <TheaterSeats />
    </section>
  );
}

export default Seats;
