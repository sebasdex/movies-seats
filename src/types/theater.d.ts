export interface Theater {
    id: number;
    name: string;
    seats: number;
    showTimes: ShowTimes[];
};

export interface ShowTimes {
    time: string;
    price: number;
    movieId: number;
    occupiedSeats: string[];
};

export interface TheaterHourInfo {
    id: number;
    name: string;
    seats: number;
    showTimes: ShowTimes[];
}