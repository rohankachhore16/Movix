
import About from "../componets/pages/about";
import Home from "../componets/pages/home";
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