import React from 'react';
import { Box, Typography, Card, CardMedia } from '@mui/material';

interface Props {
  movieId: string;
  imageSrc: string;
  title: string;
  onClick?: () => void;
}

export default function MovieCard({
  movieId,
  imageSrc,
  title,
  onClick
}: Props) {
  return (
    <Card
      key={movieId}
      sx={{ maxWidth: 345, '&:hover': { cursor: 'pointer' } }}
      onClick={onClick}>
      <CardMedia
        component="img"
        height="350"
        image={
          imageSrc === 'N/A'
            ? 'https://images.unsplash.com/photo-1632094623687-5643447fadcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bW92aWV8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            : imageSrc
        }
        alt={`${title} img`}
      />
      <Box sx={{ py: 1, px: 0.5 }}>
        <Typography variant="caption" component="div">
          {title}
        </Typography>
      </Box>
    </Card>
  );
}

MovieCard.defaultProps = {
  onClick: () => {}
};
