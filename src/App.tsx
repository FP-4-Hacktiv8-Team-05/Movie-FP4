import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, CircularProgress, Container, Typography } from '@mui/material';
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
  const [search, setSearch] = React.useState<string>('marvel');
  const { data, loading } = useSelector<RootState>(
    (state) => state.search
  ) as MoviesState;

  useEffect(() => {
    dispatch(getMovieSearch(search));
  }, [search]);

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navbar onSubmit={(e) => setSearch(e)} />
        <Container maxWidth="lg" sx={{ my: 5, minHeight: '100vh' }}>
          <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fit, minmax(186px, 1fr))"
            gap={4}>
            {loading ? (
              <Box>
                <CircularProgress />
                <Typography component="div">Wait</Typography>
              </Box>
            ) : (
              data?.Search?.map((item: any) => (
                <MovieCard
                  key={item.imdbID}
                  imageSrc={item.Poster}
                  title={item.Title}
                  movieId={item.imdbID}
                />
              ))
            )}
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
