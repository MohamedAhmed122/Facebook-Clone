import React, { Fragment } from "react";
import Header from "../Layouts/Header/Header";
import Sidebar from "../Layouts/Sidebar/Sidebar";
import Feeds from "../Components/Feeds/Feeds";
import Widgets from "../Components/Widgets/Widgets";
import Login from "../Components/Login/Login";
import { useSelector } from "react-redux";
import Hidden from '@material-ui/core/Hidden';

const AppPage = () => {
  
  const {isAuthenticated} = useSelector(state => state.auth) 

  return (
    <Fragment>
        {!isAuthenticated ? (
            <Login />
        ) : (
            <Fragment>
            <Header />
            <div style={{ display: "flex" }}>
                <div style={{ padding: "10px 15px", flex: 0.33 }}>
                  <Hidden smDown>
                    <Sidebar />
                  </Hidden>
                </div>
                <Feeds />
                <Hidden mdDown>
                  <Widgets />
                </Hidden>
            </div>
            </Fragment>
        )}
    </Fragment>
  );
};
export default AppPage;
