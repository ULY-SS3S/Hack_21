import {Redirect, Route, Switch} from "react-router";
import Intro from "../components/Intro_Page/Intro";
import Products from "../components/Products_Page/Products";

const I2URoute = () => {
    return (
           <Switch>
               <Route exact path="/intro" component={Intro}/>
               <Route exact path="/products" component={Products}/>
               <Redirect to="/intro"/>
               </Switch>
        )
}

export default I2URoute;