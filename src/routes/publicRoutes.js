import Login from "../componets/pages/Login "
import LoginLayout from "../layout/loginLayout"
import { ROUTE_DEFINATION } from "../utils/constant/routeConstant"
 const PUBLIC_ROUTES={
  element:<LoginLayout/>,
  children:[
    {
      path:ROUTE_DEFINATION.LOGIN,
      title: ROUTE_DEFINATION.title,
      element:<Login/>
    }
  ]
}

export default PUBLIC_ROUTES;