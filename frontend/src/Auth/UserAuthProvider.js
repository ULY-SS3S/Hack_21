import {createContext, useState} from "react";
import {useHistory} from "react-router";

export const AuthContext = createContext({
    username: "",
    isLoggedIn: false,
    cart: [],
    setCart: () => {},
    loginFunc: () => {},
    registerFunc: () => {}
});

export const UserAuthProvider = (props) => {
    const history = useHistory();
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [shoppingCart, setShoppingCart] = useState([]);
    function formRegister(event){
        event.preventDefault();
        let form = event.target;
        let username = form[1].value;
        setLoggedIn(true);
        setUsername(username);
        console.log("welcome! " + username);
        console.log("Now you are logged in: ", isLoggedIn);
        history.push("/products");
    }

    function formLogin(event){
        event.preventDefault();
        setLoggedIn(true);
        setUsername("David");
        history.push("/products");
    }

    return (
        <AuthContext.Provider value={{
            username: username,
            isLoggedIn: isLoggedIn,
            cart: shoppingCart,
            setCart: setShoppingCart,
            registerFunc: formRegister,
            loginFunc: formLogin
        }}>
            {props.children}
        </AuthContext.Provider>
    )

}