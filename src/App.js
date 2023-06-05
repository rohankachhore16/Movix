import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Routes from "./routes";
import Login from "./componets/pages/login ";
import { useSelector } from "react-redux";

const RoutesComponent = ({LoggedIn})=>{
if(LoggedIn){
  return <Routes isLoggedIn={true}/>
}else{
  return <Routes isLoggedIn={false}/>
}
}

function App() {
  const {token} = useSelector((state)=>state?.user)
  return (
    <>
<Router>
<RoutesComponent LoggedIn={token}/>
</Router>
    </>
  );
}

export default App;
