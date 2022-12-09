import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { Container } from '@mui/material';
import { Search, SearchIconWrapper, StyledInputBase } from './MuiCustomStyled.component';

type Props = {
  onSubmit: (searchInputText: FormDataEntryValue | any | null) => void
}

export default function Navbar({onSubmit} : Props) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    onSubmit(data.get("search"))
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flex: 1, textAlign: 'left' }}>
              Movies
            </Typography>
            <form onSubmit={handleSubmit}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                  name="search"
                />
              </Search>
            </form>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}