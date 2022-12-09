import React from 'react';
import { Box, Typography, Card, CardMedia } from '@mui/material';

interface Props {
  movieId: string;
  imageSrc: string
  title: string
  onClick?: () => void
}

export default function MovieCard({movieId,imageSrc, title, onClick} : Props) {
  return (
    <Card key={movieId} sx={{ maxWidth: 345, '&:hover': { cursor: 'pointer' } }} onClick={onClick}>
      <CardMedia
        component="img"
        height="350"
        image={imageSrc}
        alt="green iguana"
      />
      <Box>
        <Typography variant="caption" component="div">
          {title}
        </Typography>
      </Box>
    </Card>
  );
}

MovieCard.defaultProps = {
  onClick: () => {}
}