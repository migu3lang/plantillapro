import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Navbar from "../components/Navbars/Navbar.js";
import Footer from "../components/Footer/Footer.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import FixedPlugin from "../components/FixedPlugin/FixedPlugin.js";

//import dashboardRoutes from "../routes.js";
import routesDashBoard from "../routes";
//assets
import styles from "../assets/jss/material-dashboard-react/layouts/adminStyle.js";
import bgImage from "../assets/img/sidebar-2.jpg";
import logo from '../assets/img/reactlogo.png';
//redux
import { connect } from 'react-redux';
import {handleFixedPlugin} from '../../redux/actions/fixedPluginActions';

let ps;

const useStyles = makeStyles(styles);

function Admin(props) {
  // styles
  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();
  // states and functions
  const [image, setImage] = React.useState(bgImage);
  const [color, setColor] = React.useState("blue");
  const [fixedClasses, setFixedClasses] = React.useState("dropdown show");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const routes = routesDashBoard();
  //// switchRoutes
  const switchRoutes = () => {
    let switchRoutes = [];
    routes.map((route, key) => {
      if (route.layout === "/admin") {
        switchRoutes.push(
          <Route
            path={route.layout + route.path}
            component={route.component}
            key={key + route.path}
          />
        );
        if(route.sons != null){
          route.sons.map((son, key) => {
            switchRoutes.push(
              <Route
                path={son.path}
                component={son.component}
                key={key + son.path}
              />
            );
          })
        }
      }
    })
    return(
    <Switch>
      {switchRoutes}
      <Redirect from="/admin" to="/admin/dashboard" />
    </Switch>)
  };
  //// switchRoutes
  const handleImageClick = image => {
    setImage(image);
  };
  const handleColorClick = color => {
    setColor(color);
  };
  const handleFixedClick = () => {
    if (fixedClasses === "dropdown") {
      setFixedClasses("dropdown show");
    } else {
      setFixedClasses("dropdown");
      props.handleFixedPlugin();
    }
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getRoute = () => {
    return window.location.pathname !== "/admin/maps";
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };

  // initialize and destroy the PerfectScrollbar plugin
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);
  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={routes}
        logoText={"Creative Tim"}
        logo={logo}
        image={image}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={color}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          routes={routes}
          handleDrawerToggle={handleDrawerToggle}
        />
        {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
        {getRoute() ? (
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes()}</div>
          </div>
        ) : (
          <div className={classes.map}>{switchRoutes()}</div>
        )}
        {getRoute() ? <Footer /> : null}
        {props.fixedPluginOpen ? <FixedPlugin
          handleImageClick={handleImageClick}
          handleColorClick={handleColorClick}
          bgColor={color}
          bgImage={image}
          handleFixedClick={handleFixedClick}
          fixedClasses={fixedClasses}
          /> 
          :
          null
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  fixedPluginOpen: state.fixedPluginOpen,
  modulos: state.modulos
});

const mapDispatchToProps = {
  handleFixedPlugin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
