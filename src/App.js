import logo from './logo.svg';
import './App.css';
import Login from './componets/pages/Login ';
import { useSelector } from 'react-redux';
function App() {
// const {token} = useSelector((state) => state?.auth?.user)
// console.log(token)

  return (
   <>
   <Login/>
   </>
  );
}

export default App;
