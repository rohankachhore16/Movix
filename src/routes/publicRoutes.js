import Login from "../componets/pages/login";
import SignUp from "../componets/pages/signUp";
import LoginLayout from "../layout/loginLayout"
import { ROUTE_DEFINATION } from "../utils/constant/routeConstant"
 const PUBLIC_ROUTES={
  element:<LoginLayout/>
  ,
  children:[
  //   {
  //     path: ROUTE_DEFINATION.BASE,
  // element:<LoginLayout/>
  //   },
    {
      path:ROUTE_DEFINATION.BASE,
      element:<Login/>
    },
    // {
    //   path:ROUTE_DEFINATION.LOGIN,
    //   element:<Login/>
    // },
    {
      path:ROUTE_DEFINATION.SIGNUP,
      element:<SignUp/>
    }
  ]
}

export default PUBLIC_ROUTES;