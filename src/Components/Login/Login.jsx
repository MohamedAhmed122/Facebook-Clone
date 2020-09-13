import React from "react";
import logo from "../../assets/logo.png";
import logoText from "../../assets/logotext.png";
import "./LoginStyle.css";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import firebase  from "../../firebase";
import { userSignIn } from "../../Redux/Auth/Auth.Action";

const Login = () => {
    const signIn = (selectedProvider) => {
        socialLogin(selectedProvider);
    };

    const dispatch = useDispatch();
    const socialLogin = async (selectedProvider) => {
        let provider;
        const auth = firebase.auth();
        if (selectedProvider === "facebook") {
        provider = new firebase.auth.FacebookAuthProvider();
        }
        if (selectedProvider === "google") {
        provider = new firebase.auth.GoogleAuthProvider();
        }
        try {
        const result = await auth.signInWithPopup(provider);
        console.log(result.user);
        dispatch(userSignIn(result.user));
        } catch (error) {
        console.log(error);
        }
    };
    return (
        <section className="login">
        <div className="logo-container">
            <img src={logo} alt="logo" />
            <h1> Facebook</h1>
        </div>
        <div>
            <Button
            variant="outlined"
            className="sign-btn"
            type="submit"
            style={{backgroundColor:  '#F4511E'}}
            onClick={() => signIn("google")}
            >
            Sign in With google
            </Button>
            <br />
            <Button
            variant="outlined"
            className="sign-btn"
            type="submit"
            onClick={() => signIn("facebook")}
            >
            Sign in With Facebook
            </Button>
        </div>
        </section>
    );
};
export default Login;
