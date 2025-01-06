import { useContext } from "react"
import TheaterContext from "../context/FilterContext";

export const useTheater = () => {
    const context = useContext(TheaterContext);
    if (!context) {
        throw new Error("useTheater must be used within a TheaterProvider");
    }
    return context;
}