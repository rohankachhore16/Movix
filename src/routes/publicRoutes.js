import Login from "../componets/pages/login ";
import LoginLayout from "../layout/loginLayout"
import { ROUTE_DEFINATION } from "../utils/constant/routeConstant"
 const PUBLIC_ROUTES={
  element:<LoginLayout/>,
  children:[
    {
      path:ROUTE_DEFINATION.LOGIN,
      element:<Login/>
    }
  ]
}

export default PUBLIC_ROUTES;