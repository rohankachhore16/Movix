
import Contact from "../componets/pages/Contact";
import Profile from "../componets/pages/Profile";
import Services from "../componets/pages/Services";
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
    },
    {
      path: ROUTE_DEFINATION.CONTACT,
      title:ROUTE_DEFINATION.CONTACT,
      element:<Contact/>
    },
    {
      path: ROUTE_DEFINATION.SERVICES,
      title:ROUTE_DEFINATION.SERVICES,
      element:<Services/>
    },
    {
      path: ROUTE_DEFINATION.PROFILE,
      title:ROUTE_DEFINATION.PROFILE,
      element:<Profile/>
    },

  ]
}

export default PRIVATE_ROUTES;