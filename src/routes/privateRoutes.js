import About from "../componets/pages/About";
import Home from "../componets/pages/Home";
import MainLayout from "../layout/mainLayout";
import { ROUTE_DEFINATION } from "../utils/constant/routeConstant";

 const PRIVATE_ROUTES= {
  element:<MainLayout/>,
  children:[
    {
      path: ROUTE_DEFINATION.BASE,
      title:ROUTE_DEFINATION.BASE,
      element:<Home/>
    },
    {
      path: ROUTE_DEFINATION.ABOUT,
      title:ROUTE_DEFINATION.ABOUT,
      element:<About/>
    }
  ]
}

export default PRIVATE_ROUTES;