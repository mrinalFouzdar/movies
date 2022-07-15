import { GET_MOVIES, DELTE_MOVIES, ADD_MOVIE, SINGLE_MOVIES_DATA, UPDATE_MOVIE, REMOVE_SELECTED_MOVIES } from "./action.type";
import axios from "axios";

const getMoviesData = (data) => ({
  type: GET_MOVIES,
  payload: data,
});
const moviesDeleted = () => ({
  type: DELTE_MOVIES,
});
const movieADDed = () => ({
  type: ADD_MOVIE,
});
const updateSingleMovie = () => ({
  type: UPDATE_MOVIE,
});
const getDataSingle = (data) => ({
  type: SINGLE_MOVIES_DATA,
  payload:data
});

export const removeselectedMovie = ()=>({
   
  type:REMOVE_SELECTED_MOVIES

})

export const fetchMoviesData = () => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_API}`)
    .then((res) => {
      console.log(res)
      dispatch(getMoviesData(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
export const deleteMovies = (id) =>async (dispatch) => {
 await axios
    .delete(`${process.env.REACT_APP_API}/${id}`)
    .then((res) => {
      dispatch(moviesDeleted());
      dispatch(fetchMoviesData());
    })
    .catch((err) => {
      console.log(err);
    });
};
export const addMovies = (data) =>async (dispatch) => {
 await axios
    .post(`${process.env.REACT_APP_API}`, data)
    .then((res) => {
      // console.log(data)
      dispatch(movieADDed());
      dispatch(fetchMoviesData());
    })
    .catch((err) => {
      console.log(err);
    });
};


export const singleMovies = (id) =>async (dispatch) => {
 await axios
    .get(`${process.env.REACT_APP_API}/${id}`)
    .then((res) => {
      dispatch(getDataSingle(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
export const updateMovieData = (item,id) => async(dispatch) => {
 await axios
    .put(`${process.env.REACT_APP_API}/${id}`,item)
    .then((res) => {
      dispatch(updateSingleMovie());
      dispatch(fetchMoviesData());

    })
    .catch((err) => {
      console.log(err);
    });
};