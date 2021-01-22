// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

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
import ClientsModules from '../core/clients/ClientsModules';

//helper
import {findModule} from '../helpers/findModule';
<<<<<<< HEAD
import Clients from "../core/clients/clients";
=======
import Clients from "../core/clients/Clients";
import Roles from "../core/roles/Roles";
import General from "../core/clients/General";
import CreateRol from "../core/roles/CreateRol";
>>>>>>> 81aa38e0ad194c99f6b6c9e70ebf7e3e9fd99bd2

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
    // {
    //   path: "/user",
    //   name: "User Profile",
    //   icon: Person,
    //   component: UserProfile,
    //   layout: "/admin"
    // },
    // {
    //   path: "/table",
    //   name: "Table List",
    //   icon: "content_paste",
    //   component: TableList,
    //   layout: "/admin"
    // },
    // {
    //   path: "/typography",
    //   name: "Typography",
    //   icon: LibraryBooks,
    //   component: Typography,
    //   layout: "/admin"
    // },
    // {
    //   path: "/icons",
    //   name: "Icons",
    //   icon: BubbleChart,
    //   component: Icons,
    //   layout: "/admin"
    // },
    // {
    //   path: "/maps",
    //   name: "Maps",
    //   icon: LocationOn,
    //   component: Maps,
    //   layout: "/admin"
    // },
    // {
    //   path: "/notifications",
    //   name: "Notifications",
    //   icon: Notifications,
    //   component: NotificationsPage,
    //   layout: "/admin"
    // },
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
        {
          path: "/admin/modules",
          component: ClientsModules
        },
        // {
        //   path:"/admin/roleu",
        //   component:CreateRol
        // }
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

  {
    path: "/clients",
    name: "clients",
    icon: AccountCircleIcon,
    component: Clients,
    layout: "/admin"
  },

  {
    path: "/roles",
    name: "roles",
    icon: AccountCircleIcon,
    component: Roles,
    layout: "/admin",
    sons:[
      {
        path: "/admin/crear/role",
        component: CreateRol
      },
    ]
  },


];
export default dashboardRoutes;