import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '64008c8a';
const config = axios.create({
  baseURL: 'http://www.omdbapi.com/'
});

export const getMovieById = createAsyncThunk(
  'getMovieById',
  async (id: string) => {
    return config.get(`?apikey=${API_KEY}&i=${id}`).then((res) => res.data);
  }
);
export const getMovieSearch = createAsyncThunk(
  'getMovieSearch',
  async (s: string) => {
    return config.get(`?apikey=${API_KEY}&s=${s}`).then((res) => res.data);
  }
);

export type MoviesState = {
  data: any;
  loading: boolean;
  error: any;
};

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    data: {},
    loading: false,
    error: null
  } as MoviesState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovieById.pending, () => {
      return { loading: true, data: {}, error: null } as MoviesState;
    });
    builder.addCase(getMovieById.fulfilled, (_, action) => {
      return {
        loading: false,
        data: action.payload,
        error: null
      } as MoviesState;
    });
    builder.addCase(getMovieById.rejected, (_, action) => {
      return { loading: false, data: {}, error: action.error } as MoviesState;
    });
    builder.addCase(getMovieSearch.pending, () => {
      return { loading: true, data: {}, error: null } as MoviesState;
    });
    builder.addCase(getMovieSearch.fulfilled, (_, action) => {
      return {
        loading: false,
        data: action.payload,
        error: null
      } as MoviesState;
    });
    builder.addCase(getMovieSearch.rejected, (_, action) => {
      return { loading: false, data: {}, error: action.error } as MoviesState;
    });
  }
});

export default searchSlice.reducer;
