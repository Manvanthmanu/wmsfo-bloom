import Login from './Pages/Login/Login'
import SignUp from './Pages/Login/Signup';
import Album from './Pages/SelectionPage/SelectionPage'
import ButtonAppBar from './Components/Navbar';
import IrsCoupon from './Pages/IRS-coupon/IrsCoupon';
import ResponsiveAppBar from './Components/LoginedNav';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Combined =()=>{
    return(
      // <div style={{backgroundColor:'black'}}>
       // <Helmet bodyAttributes={{style: 'background-color : black ; color:#FFFF00'}} style={{bgcolor:'black'}}/>
       <div style={{color:'#FFFF00'  , background:'black'}}>
        <ResponsiveAppBar/>
        <IrsCoupon/>
      </div>
    )
}
const Combined2 =()=>{
    return(
      <div>
        <ResponsiveAppBar/>
        <Album/>
      </div>
    )
}


function App() {


  return (
    <>
      <Router>
      
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/album" component={Combined2} />
            <Route path="/irsCoupon" component={Combined} />
            <Route path="/" component={ButtonAppBar}/>
            <Route path="*" component={NoMatch}/>

            
          </Switch>
      </Router>
    </>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the Login page</Link>
      </p>
    </div>
  );
}

export default App;
