import {Redirect, Route, Switch} from "react-router";
import Intro from "../components/Intro_Page/Intro";


const MediboxRoute = () => {
    return (
        <Switch>
            {/*<Route exact path="/" component={Home}/>*/}
            <Route exact path="/intro" component={Intro}/>
            {/*<Route exact path="/medicines" component={MedicineList}/>*/}
            {/*<Route path="/medicines/:medId">*/}
            {/*    <MedicineItem/>*/}
            {/*</Route>*/}
            <Redirect to="/intro"/>
        </Switch>
    )
}

export default MediboxRoute;
