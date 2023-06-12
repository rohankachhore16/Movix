import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { profileAsyncThunk } from '../../../redux/asyncThunk/getProfileAsyncThunk'
import { Box, Grid } from '@mui/material'

const Profile = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(profileAsyncThunk()).unwrap().then((res)=>{
    }).catch((err)=>{
      console.log(err)
    })
  }, [])
  
  return (
    <>

<Box>
<Grid container>
<Grid item sm={6}  display="flex" justifyContent="center" >

  <h1>hello</h1>
</Grid>
<Grid item sm={6}  display="flex" justifyContent="center" >

  <h1>hello</h1>
</Grid>

</Grid>
</Box>

    </>
  )
}

export default Profile
