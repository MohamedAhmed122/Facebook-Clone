import React, { Fragment } from 'react';
import logo from '../../assets/logo.png'
import logoText from '../../assets/logotext.png'
import './LoginStyle.css'
import { Button } from '@material-ui/core';

const signIn =()=>{

}

const Login =()=>{
    return(
        <section className='login'>
            <div className='logo-container'>
                <img src={logo} alt ='logo' />
                <img className='img' src={logoText} alt='logo' />
            </div>
            <div>
                <Button variant='outlined' className='sign-btn' type='submit' onClick={signIn} >Login With Facebook</Button>
            </div>
           
        </section>
    )
}
export default  Login