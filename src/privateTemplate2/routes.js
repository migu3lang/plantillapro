/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";

// core components/views for Admin layout
import DashboardPage from "./views/Dashboard/Dashboard.js";
import UserProfile from "./views/UserProfile/UserProfile.js";
import TableList from "./views/TableList/TableList.js";
import Typography from "./views/Typography/Typography.js";
import Icons from "./views/Icons/Icons.js";
import Maps from "./views/Maps/Maps.js";
import NotificationsPage from "./views/Notifications/Notifications.js";

//core components preicfes
import Institutions from '../core/institutions/Institutions';
import Prueba from '../core/prueba';
import Hijo from '../core/hijo';
import Hijo2 from '../core/hijo2';

//helper
import {findModule} from '../helpers/findModule';

const dashboardRoutes = (() => {
  let userModules = [];
  let routes = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: Dashboard,
      component: DashboardPage,
      layout: "/admin"
    },
    {
      path: "/user",
      name: "User Profile",
      icon: Person,
      component: UserProfile,
      layout: "/admin"
    },
    {
      path: "/table",
      name: "Table List",
      icon: "content_paste",
      component: TableList,
      layout: "/admin"
    },
    {
      path: "/typography",
      name: "Typography",
      icon: LibraryBooks,
      component: Typography,
      layout: "/admin"
    },
    {
      path: "/icons",
      name: "Icons",
      icon: BubbleChart,
      component: Icons,
      layout: "/admin"
    },
    {
      path: "/maps",
      name: "Maps",
      icon: LocationOn,
      component: Maps,
      layout: "/admin"
    },
    {
      path: "/notifications",
      name: "Notifications",
      icon: Notifications,
      component: NotificationsPage,
      layout: "/admin"
    },
    {
      path: "/prueba",
      name: "prueba",
      icon: Notifications,
      component: Prueba,
      layout: "/admin",
      sons:[
        {
          path: "/admin/hijo",
          component: Hijo
        },
        {
          path: "/admin/hijo2",
          component: Hijo2
        },
      ]
    },
  ]
  if (localStorage.modulos != null) {
    userModules = JSON.parse(localStorage.modulos);
  }
  
  preicfesRoutes.map((preicfesModule, key)=>{
    if(findModule(userModules,preicfesModule.name)){
      routes.push(preicfesModule);
    }
  });
  
  return (routes);
});

const preicfesRoutes = [
  {
    path: "/institutions",
    name: "institutions",
    icon: Notifications,
    component: Institutions,
    layout: "/admin"
  },
];
export default dashboardRoutes;
