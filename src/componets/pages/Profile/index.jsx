import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { profileAsyncThunk } from '../../../redux/asyncThunk/getProfileAsyncThunk'
import { Box, Grid, Typography } from '@mui/material'

const Profile = () => {
const [userProfile , setUserProfile] = useState([])
  // const profile = useSelector((state)=> state?.profile)
  // console.log(profile,"_________profile api")
    const dispatch = useDispatch()
  useEffect(() => {
    dispatch(profileAsyncThunk()).unwrap().then((res)=>{
   setUserProfile(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }, [])
  
  return (
    <>

<Box>
<Grid container>
<Grid item sm={6}  display="flex" justifyContent="center" >
<Box>
<Typography variant='h6'>{userProfile.name},{userProfile.email},{userProfile.role}</Typography>

</Box>
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
