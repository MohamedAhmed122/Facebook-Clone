import React, { Fragment } from 'react';
import Header from '../Layouts/Header/Header';
import Sidebar from '../Layouts/Sidebar/Sidebar';
import Feeds from '../Components/Feeds/Feeds'
 
const AppPage =()=>{
    return(
        <Fragment>
            <Header/>
                <div style={{display: 'flex'}}> 
                    <div style={{padding:'25px 15px',flex:0.33}}>
                        <Sidebar />
                    </div>
                    <Feeds />
                </div>           
        </Fragment>
    )
}
export default  AppPage
