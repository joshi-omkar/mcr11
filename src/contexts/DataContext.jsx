import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { movies } from "../data";
import { movieReducer } from "../reducers/MovieReducer";

export const DataContextProvider = createContext();

const DataContext = ({ children }) => {
//   useEffect(() => {
//     localStorage.setItem("movies", JSON.stringify(movies));
//   }, []);

  const initialState = {
    movies: movies,
    filteredGenre: "All Genres",
    filteredRating: "Rating",
    filteredYear: "Release Year",
    filteredMovies: JSON.parse(localStorage.getItem('movies')),
  };
  const [data, setData] = useState(movies);

  const [state, dispatch] = useReducer(movieReducer, initialState);

  return (
    <DataContextProvider.Provider value={{ data, setData, state, dispatch }}>
      {children}
    </DataContextProvider.Provider>
  );
};

export default DataContext;

export const useData = () => useContext(DataContextProvider);
