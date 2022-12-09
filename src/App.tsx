import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

import { AppDispatch, RootState } from 'app/store';
import { getMovieSearch, MoviesState } from 'features/movies/moviesSlice';
import Navbar from 'components/Navbar/Navbar';
import MovieCard from 'components/MovieCard/MovieCard';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading } = useSelector<RootState>(
    (state) => state.search
  ) as MoviesState;

  useEffect(() => {
    dispatch(getMovieSearch('marvel'));
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navbar />
        <Container maxWidth="lg" sx={{ my: 5, minHeight: '100vh' }}>
          <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fit, minmax(186px, 1fr))"
            gap={4}>
            {loading ? <Typography>Wait</Typography> : null}
            {data?.Search?.map((item: any) => (
              <MovieCard
                imageSrc={item.Poster}
                title={item.Title}
                movieId={item.imdbID}
              />
            ))}
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
