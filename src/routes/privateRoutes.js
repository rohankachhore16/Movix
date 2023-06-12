
import { Navigate } from "react-router-dom";
import Contact from "../componets/pages/Contact";
import Profile from "../componets/pages/Profile";
import Services from "../componets/pages/Services";
import About from "../componets/pages/about";
import CategoriesRequest from "../componets/pages/admin/categoriesRequest";
import CatogriesTotal from "../componets/pages/admin/categoriesTotal";
import Home from "../componets/pages/home";
import MainLayout from "../layout/mainLayout";
import { ROUTE_DEFINATION } from "../utils/constant/routeConstant";


const  categoriesRequest={

  path:ROUTE_DEFINATION.CATEOGRIES_REQUEST,
  title:ROUTE_DEFINATION.CATEOGRIES_REQUEST,
  children:[
    {
      path:ROUTE_DEFINATION.CATEOGRIES_REQUEST,
      title:ROUTE_DEFINATION.CATEOGRIES_REQUEST,
       element:<CatogriesTotal/>
    }
  ]

}
const  cateogriesTotal={

  path:ROUTE_DEFINATION.CATEOGRIES_TOTAL,
  title:ROUTE_DEFINATION.CATEOGRIES_TOTAL,
  children:[
    {
      path:ROUTE_DEFINATION.CATEOGRIES_TOTAL,
      title:ROUTE_DEFINATION.CATEOGRIES_TOTAL,
       element:<CategoriesRequest/>
    }
  ]

}

const aboutRoutes={
  path: ROUTE_DEFINATION.ABOUT,
  title:ROUTE_DEFINATION.ABOUT,
  children:[{
    
      path: ROUTE_DEFINATION.ABOUT,
      title:ROUTE_DEFINATION.ABOUT,
      element:<About/>
    
  }]
}

const ContractRoutes={
  path: ROUTE_DEFINATION.CONTACT,
  title:ROUTE_DEFINATION.CONTACT,
  children:[
    {
      path: ROUTE_DEFINATION.CONTACT,
      title:ROUTE_DEFINATION.CONTACT,
      element:<Contact/>
    },
  ]
}

const serviceRoutes={
  path: ROUTE_DEFINATION.SERVICES,
  title:ROUTE_DEFINATION.SERVICES,
  children:[
    {
      
        path: ROUTE_DEFINATION.SERVICES,
        title:ROUTE_DEFINATION.SERVICES,
        element:<Services/>
    
    }
  ]
}


const roleBaseRoutes = (role)=>{
  const PRIVATE_ROUTES= {
    element:<MainLayout/>,
    children:[
      {
        path: ROUTE_DEFINATION.BASE,
        title:ROUTE_DEFINATION.BASE,
        element:<Home/>
      },
  
  
      {
        path: ROUTE_DEFINATION.PROFILE,
        title:ROUTE_DEFINATION.PROFILE,
        element:<Profile/>
      },
      {
        path: "*",
        title: "",
        element: <Navigate to={ROUTE_DEFINATION.BASE} />,
    },
  
    ]
  }
  switch(role){
    case "customer":
      PRIVATE_ROUTES.children.push(
        aboutRoutes,
        ContractRoutes,
        serviceRoutes
      )
      break;
case "ADMIN":
  PRIVATE_ROUTES.children.push(
    categoriesRequest,cateogriesTotal
  );
  break;

  }
  return  PRIVATE_ROUTES;
  
}


export default roleBaseRoutes;