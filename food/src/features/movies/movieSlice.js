import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi'
import { APIKey } from '../../common/apis/movieApiKey'


export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',async () =>
{
    const movieText = "Harry"

    const response = await movieApi
        .get(`?apikey=${APIKey}&s=${movieText}&type=movie`);
        // console.log(response.data);
        return response.data;
}
);
export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows',async () =>
{
    const seriesText = "Friends"

    const response = await movieApi
        .get(`?apikey=${APIKey}&s=${seriesText}&type=series`);
        // console.log(response.data);
        return response.data;
}
);

export const fetchAsyncMovieOrShowsDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowsDetail',async (id) =>
{
    // const seriesText = "Friends"

    const response = await movieApi
        .get(`?apikey=${APIKey}&i=${id}&Plot=full`);
        // console.log(response.data);
        return response.data;
}
);



const initialState = {
    movies: {},
    shows:{},
    selectedMovieOrShow:{}
};
 
const movieSlice = createSlice(
    {
        name: "movies",
        initialState,
        reducers: {
          
            removeSelectedMovieOrShow:(state) =>
            {
                state.removeSelectedMovieOrShow ={};
            }
        },
        extraReducers:{
            [fetchAsyncMovies.pending]:() =>
            {
                console.log("Pending");
            },
            [fetchAsyncMovies.fulfilled]: (state,{payload}) =>
            {
                console.log("fetched succesfully");
                return {...state, movies:payload };
            },
            [fetchAsyncMovies.rejected]:() =>
            {
                console.log("rejected");
            },
            [fetchAsyncShows.fulfilled]: (state,{payload}) =>
            {
                console.log("fetched succesfully");
                return {...state, shows:payload };
            },
            [fetchAsyncMovieOrShowsDetail.fulfilled]: (state,{payload}) =>
            {
                console.log("fetched succesfully");
                return {...state, selectedMovieOrShow:payload };
            },
        },

    });

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export default movieSlice.reducer;
export const getAllMovie = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow