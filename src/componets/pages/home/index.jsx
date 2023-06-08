import { Box, Grid, Pagination, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductAsyncThunk } from "../../../redux/asyncThunk/getProductAsyncThunk";
import ProductCard from "../../card";

const Home = () => {

  const [page, setPage] = useState(1)
  const [product, setProduct] = useState([])
  console.log(product,"stateproduct")
  // const product= useSelector((state)=>state?.product?.data)

  // console.log(product,"_____________")


  const dispatch = useDispatch()

  useEffect(() => {  

    dispatch(getProductAsyncThunk()).unwrap().then((res) => {
      console.log(res,"product details")
      return setProduct(res.data)
    }).catch((err) => {
      console.log(err, "______________")
    })
  }, [])
  console.log(product,"_____________")
  const handlePageChange = (event, value) => {
    setPage(value)
  }
  return (
    <>
      <Box>



        <Typography variant="h5"> Product Detils {page}</Typography>

        <Grid container p={3}>
          {product?.map((item)=>{
            console.log(item,"here is the item")
            return (
              <Grid item sm={4} padding={3}>
              <ProductCard key={item.id} images={item.category.image} title={item.title} />
              
              </Grid>

            )
          })}
          </Grid>
{/*       
          <Grid item sm={4}>
            hello
          </Grid>
          <Grid item sm={4}>
            hello
          </Grid>
        </Grid> */}

        {/* {product?.map((item) => {
          return <ProductCard />
        })} */}
        <Pagination sx={{ display: "flex", justifyContent: "center" }} count={10} onChange={handlePageChange} page={page} color="secondary" />

      </Box>
    </>
  );
};

export default Home;
