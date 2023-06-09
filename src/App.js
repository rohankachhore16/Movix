import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Routes from "./routes";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import Axios from "axios";
const RoutesComponent = ({ token }) => {
  if (token) {

    Axios.defaults.headers.common["Authorization"]="Bearer "+ token

    return <Routes isLoggedIn={true} />;
  } else {
    return <Routes isLoggedIn={false} />;
  }
};

function App() {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  Axios.defaults.baseURL = baseUrl;
  const { token } = useSelector((state) => state?.user);
  return (
    <>
      <Router>
        <RoutesComponent token={token} />
      </Router>
      <Toaster />
    </>
  );
}

export default App;
