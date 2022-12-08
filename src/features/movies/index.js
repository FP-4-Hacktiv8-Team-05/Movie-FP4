import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '64008c8a';
const config = axios.create({
  baseURL: 'http://www.omdbapi.com/'
});

export const getMovieById = createAsyncThunk('getMovieById', async (id) => {
  return config.get(`?apikey=${API_KEY}&i=${id}`).then((res) => res.data);
});
export const getMovieSearch = createAsyncThunk('getMovieSearch', async (s) => {
  return config.get(`?apikey=${API_KEY}&s=${s}`).then((res) => res.data);
});

const initialState = {
  data: {},
  loading: false
};
const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovieById.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(getMovieById.fulfilled, (state, action) => {
      return { ...state, loading: false, data: action.payload };
    });
    builder.addCase(getMovieById.rejected, (state, action) => {
      return { ...state, loading: false, error: action.error };
    });
    builder.addCase(getMovieSearch.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(getMovieSearch.fulfilled, (state, action) => {
      return { ...state, loading: false, data: action.payload };
    });
    builder.addCase(getMovieSearch.rejected, (state, action) => {
      return { ...state, loading: false, error: action.error };
    });
  }
});

export default searchSlice.reducer;
