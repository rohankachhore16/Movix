import { Box, Grid, Pagination, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductAsyncThunk } from "../../../redux/asyncThunk/getProductAsyncThunk";
import ProductCard from "../../card";

const Home = () => {

  const [page, setPage] = useState(1)
  const [product, setProduct] = useState([])
  console.log(product, "stateproduct")
  // const product= useSelector((state)=>state?.product?.data)

  // console.log(product,"_____________")


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductAsyncThunk(page)).unwrap().then((res) => {
      console.log(res, "product details")
      setProduct(res.data)
    }).catch((err) => {
      console.log(err, "______________")
    })
  }, [page])
  // const handlePageChange = (event, value) => {
  //   setPage(value)
  // }
  return (
    <>
      <Box>



        <Typography variant="h5"> Product Detils {page}</Typography>

        <Grid container p={3}>
          {product?.map((item) => {
            return (
              <Grid item sm={4} padding={3}>
                <ProductCard key={item.id} images={item.category.image} title={item.title} />

              </Grid>

            )
          })}
        </Grid>

        <Pagination sx={{ display: "flex", justifyContent: "center" }} count={20} onChange={(e, value) => setPage(value)} color="secondary" />

      </Box>
    </>
  );
};

export default Home;
