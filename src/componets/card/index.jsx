import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';


import Typography from '@mui/material/Typography';

import { Box, Button, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import { cardDeleteAsyncThunk } from '../../redux/asyncThunk/getProductAsyncThunk';


const ProductCard = ({ images, title, name, price, id }) => {

  const dispatch = useDispatch()

  const deltetCard = (id) => {
    dispatch(cardDeleteAsyncThunk(id))

  }
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader

          // action={
          //   <IconButton aria-label="settings">
          //     <MoreVertIcon />
          //   </IconButton>
          // }
          title={title}
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image={images}
          alt="Paella dish"
        />
        <CardContent>
          <Stack direction="row" justifyContent="space-between">

            <Box>
              <Typography variant='body2' >Name :- {name}</Typography>
            </Box>
            <Box>
              <Typography variant='body2' >Price :- {price}</Typography>
            </Box>
          </Stack>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
          <Button onClick={() => deltetCard(id)} variant="contained" > Delete</Button>
        </CardContent>

      </Card>
    </>
  )
}

export default ProductCard
