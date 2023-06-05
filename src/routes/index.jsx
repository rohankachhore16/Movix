import { useEffect, useState } from "react"
import PRIVATE_ROUTES from "./privateRoutes"
import PUBLIC_ROUTES from "./publicRoutes"
import { useRoutes } from "react-router-dom"

export default function Routes({ isLoggedIn }) {
  const [activeRoutes, SetActiveRoutes] = useState([])
  useEffect(() => {
    if (isLoggedIn) {
      SetActiveRoutes([PRIVATE_ROUTES])
    }
    else { 
      
      SetActiveRoutes([PUBLIC_ROUTES])
      
    }
  }, [isLoggedIn])

  return useRoutes(activeRoutes)

}