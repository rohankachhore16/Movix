import React, { useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import BackGround from "../../../assets/images/background.jpg"
import BackGround from "../../../assets/images/back2.jpg";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { userLoginAsyncThunk } from "../../../redux/asyncThunk/authAsyncThunk";

const Login = () => {
  const dispath= useDispatch()

  return (
    <>
      <Box
        height="100vh"
        sx={{
          backgroundImage: `url(${BackGround})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow:"hidden"
        }}
      >
        <CssBaseline />

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            console.log(values, "____________________________");
            dispath(userLoginAsyncThunk()).unwrap().then((res)=>{
              return(
              console.log(res))
            })
            .catch((err)=>{
              return(
                console.log(err)
              )
              
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
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    m: 10,
                    width: "500px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 5,
                    borderRadius: "20px",
                    boxShadow: "10px 10px 10px rgba(30,30,30,0.5)",
                    backdropFilter: "blur(10px)",
                    backgroundImage:
                      " linear-gradient(to bottom right, rgb(238 232 232 / 20%), rgb(212 226 226 / 41%))",
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Sign in
                  </Typography>
                  <Box
                   
                    sx={{ mt: 1 }}
                  >
                    <TextField
                      margin="normal"
                      size="small"
                      required
                      fullWidth
                      id="email"
                      value={values.email}
                      onChange={handleChange}
                      label="Email Address"
                      name="email"
                      onBlur={handleBlur}

                      // autoComplete="email"
                      // autoFocus
                    />
                    <TextField
                      margin="normal"
                      size="small"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="password"
                      id="password"
                    />
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign In
                    </Button>
                    <Grid container>
                      <Grid item xs>
                        <Link href="#" variant="body2">
                          Forgot password?
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link href="#" variant="body2">
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default Login;
