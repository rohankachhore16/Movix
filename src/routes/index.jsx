import { useEffect, useState } from "react"
import PRIVATE_ROUTES from "./privateRoutes"
import PUBLIC_ROUTES from "./publicRoutes"
import { useRoutes } from "react-router-dom"

export default Routes=()=>{

const [cuurentRoutes,setcurrentRoutes]=useState([])
useEffect(()=>{
if(isLoggedIn){
  setcurrentRoutes([PRIVATE_ROUTES])
}
else{
  setcurrentRoutes([PUBLIC_ROUTES])

}
},[isLoggedIn])

  return(
useRoutes(cuurentRoutes)
  )
}