import Login from './Pages/Login/Login'
import SignUp from './Pages/Login/Signup';
import Album from './Pages/SelectionPage/SelectionPage'
import ButtonAppBar from './Components/Navbar';
import IrsCoupon from './Pages/IRS-coupon/IrsCoupon';
import ResponsiveAppBar from './Components/LoginedNav';
import Cds from './Pages/CDS/Cds'
import Swapation from './Pages/Swapations/Swapations'
import Capandfloar from './Pages/CapandFloar/Capandfloor'
import Fra from './Pages/Fra/Fra'
import Repo from './Pages/Repo/Repo'
import Fxswap from './Pages/Fxswap/Fxswap'
import Otcov from './Pages/Otcov/Otcov'
import Fxoptions from './Pages/Fxoptions/Fxoptions'
import Slb from './Pages/Slb/Slb'
import Bdto from './Pages/Bdto/Bdto'
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import IrsBasis from './Pages/IRS-basis/IrsBasis';


const Combined =()=>{
    return(
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

const IrsBasisMain =()=>{
  return(
    <div style={{color:'#FFFF00'  , background:'black'}}>
      <ResponsiveAppBar/>
      <IrsBasis/>
    </div>
  )
}
const Cdsmain =()=>{
  return(
    <div style={{color:'#FFFF00'  , background:'black'}}>
      <ResponsiveAppBar/>
      <Cds/>
    </div>
  )
}
const Swapationmain =()=>{
  return(
    <div style={{color:'#FFFF00'  , background:'black'}}>
      <ResponsiveAppBar/>
      <Swapation/>
    </div>
  )
}
const CapandFloarmain =()=>{
  return(
    <div style={{color:'#FFFF00'  , background:'black'}}>
      <ResponsiveAppBar/>
      <Capandfloar/>
    </div>
  )
}
const Framain =()=>{
  return(
    <div style={{color:'#FFFF00'  , background:'black'}}>
      <ResponsiveAppBar/>
      <Fra/>
    </div>
  )
}
const Repomain =()=>{
  return(
    <div style={{color:'#FFFF00'  , background:'black'}}>
      <ResponsiveAppBar/>
      <Repo/>
    </div>
  )
}
const Fxswapmain =()=>{
  return(
    <div style={{color:'#FFFF00'  , background:'black'}}>
      <ResponsiveAppBar/>
      <Fxswap/>
    </div>
  )
}
const Otcovmain =()=>{
  return(
    <div style={{color:'#FFFF00'  , background:'black'}}>
      <ResponsiveAppBar/>
      <Otcov/>
    </div>
  )
}
const Fxoptionsmain =()=>{
  return(
    <div style={{color:'#FFFF00'  , background:'black'}}>
      <ResponsiveAppBar/>
      <Fxoptions/>
    </div>
  )
}
const Slbmain =()=>{
  return(
    <div style={{color:'#FFFF00'  , background:'black'}}>
      <ResponsiveAppBar/>
      <Slb/>
    </div>
  )
}
const Bdtomain =()=>{
  return(
    <div style={{color:'#FFFF00'  , background:'black'}}>
      <ResponsiveAppBar/>
      <Bdto/>
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
            <Route path="/irsBasis" component={IrsBasisMain} />
            <Route path="/cds" component={Cdsmain} />
            <Route path="/swapation" component={Swapationmain} />
            <Route path="/capandfloor" component={CapandFloarmain} />
            <Route path="/fra" component={Framain}/>
            <Route path="/repo" component={Repomain}/>
            <Route path="/fxswap" component={Fxswapmain}/>
            <Route path="/otcov" component={Otcovmain}/>
            <Route path="/fxoptions" component={Fxoptionsmain}/>
            <Route path="/slb" component={Slbmain}/>
            <Route path="/bdto" component={Bdtomain}/>
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
