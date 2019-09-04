import Home from './containers/Home';
import Login from './containers/Login';

export default [
    {
      path: "/",
      component: Home,
      exact: true,
      loadData: Home.loadData,
      key: 'home',
    //   routes: [{
    //     path: "/rashomon",
    //     component: Login,
    //     exact: true,
    //     key: 'rashomon'
    //   }]
    },
    {
        path: "/login",
        component: Login,
        exact: true,
        key: 'login'
        // loadData: Login.loadData,
      }
  ];