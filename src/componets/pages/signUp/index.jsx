import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { ROUTE_DEFINATION } from "../../../utils/constant/routeConstant";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { crateUserAsyncThunk } from "../../../redux/asyncThunk/authAsyncThunk";
import { LockOutlined } from "@mui/icons-material";

const SingIn = () => {
  const dispatch = useDispatch()
  
  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
            }}

            onSubmit={(value,{resetForm}) => {
              value.avatar = "https://api.lorem.space/image/face?w=640&h=480&r=867"
              dispatch(crateUserAsyncThunk(value)).unwrap().then((res) => {
                resetForm();
              }).catch((err) => {
                console.log(err, "_________________")
              })
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              clear,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        autoComplete="given-name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        required
                        fullWidth
                        id="firstName"
                        label=" Name"
                        autoFocus
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        onChange={handleChange}

                        value={values.email}
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        value={values.password}
                        type="password"
                        onChange={handleChange}

                        id="password"
                        autoComplete="new-password"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Checkbox value="allowExtraEmails" color="primary" />
                        }
                        label="I want to receive inspiration, marketing promotions and updates via email."
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link to={ROUTE_DEFINATION.BASE}>
                        {" "}
                        Already have an account
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </Container>
    </>
  );
};

export default SingIn;
