import React from 'react'
import { useDispatch } from 'react-redux'
import { removeToken } from '../../../redux/slices/authSlice';

const Drawer = () => {
  const dispatch = useDispatch();
  const handleLogout=()=>{
    dispatch(removeToken())
  }
  return (
    <>
      <h1>Drawer</h1>

      <button onClick={handleLogout}>log Out</button>
    </>
  )
}

export default Drawer
