import { useEffect, useState } from "react"
  // import PRIVATE_ROUTES from "./privateRoutes"
import PUBLIC_ROUTES from "./publicRoutes"
import { useRoutes } from "react-router-dom"
import { useSelector } from "react-redux"
import roleBaseRoutes from "./privateRoutes"
// const user = "ADMIN"
export default function Routes({ isLoggedIn }) {
  const user = useSelector((state)=> state?.profile?.data)
  const role= user?.role?.toUpperCase();  ;
  const [activeRoutes, SetActiveRoutes] = useState([])
  useEffect(() => {
      if (isLoggedIn) {
        SetActiveRoutes(roleBaseRoutes(role))
    }
    else { 
      
      SetActiveRoutes(PUBLIC_ROUTES)
      
    }
  }, [role,isLoggedIn])

  return useRoutes([activeRoutes])

}