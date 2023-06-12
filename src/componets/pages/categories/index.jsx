import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCatogriesAsyncThunk } from '../../../redux/asyncThunk/getProductAsyncThunk'

const Categories = ({ filter, setFilter }) => {
  const [categories, setcategories] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCatogriesAsyncThunk()).unwrap().then((res) => {
      // console.log(res, "__________catedroeis res")
      setcategories(res.data)
    })

  }, [])
  const handleCateories = (e) => {
    e.preventDefault();
    setFilter(e.target.value)
  }
  // console.log(filter,"__________filter")

  return (
    <>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Categories</InputLabel>
        <Select
          value={filter}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Categories"
          onChange={handleCateories}
        >
          {categories.map((item) => {
            const { name, id } = item
            return (

              <MenuItem value={id} key={id}>{name}</MenuItem>

            )

          })}

        </Select>
      </FormControl>

    </>
  )
}

export default Categories
