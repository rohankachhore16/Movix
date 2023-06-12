import { Box, Grid, Pagination, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductAsyncThunk } from "../../../redux/asyncThunk/getProductAsyncThunk";
import ProductCard from "../../card";
import Categories from "../categories";

const Home = () => {
  const [page, setPage] = useState(1);
  const [filter,setFilter] = useState("")
  const [product, setProduct] = useState([]);

  // const product= useSelector((state)=>state?.product?.data)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductAsyncThunk({filter,page}))
      .unwrap()
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err, "______________err");
      });
  }, [page,filter]);
  return (
    <>
      <Box>
        <Categories {...{filter,setFilter}} />

        <Typography variant="h5"> Product Detils {page}</Typography>

        <Grid   container p={3}>
          {product?.map((item) => {
            return (
              <Grid item sm={4} padding={3}>
                <ProductCard
                  key={item.id}
                  images={item.category.image}
                  title={item.title}
                  name={item.category.name}
                  price={item.price}
                  id={item.id}
                />
              </Grid>
            );
          })}
        </Grid>

        <Pagination
          sx={{ display: "flex", justifyContent: "center" }}
          count={20}
          onChange={(e, value) => setPage(value)}
          color="secondary"
        />
      </Box>
    </>
  );
};

export default Home;
