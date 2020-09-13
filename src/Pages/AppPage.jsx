import React, { Fragment } from "react";
import Header from "../Layouts/Header/Header";
import Sidebar from "../Layouts/Sidebar/Sidebar";
import Feeds from "../Components/Feeds/Feeds";
import Widgets from "../Components/Widgets/Widgets";
import Login from "../Components/Login/Login";
import { useSelector } from "react-redux";

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
                <Sidebar />
                </div>
                <Feeds />
                <Widgets />
            </div>
            </Fragment>
        )}
    </Fragment>
  );
};
export default AppPage;
