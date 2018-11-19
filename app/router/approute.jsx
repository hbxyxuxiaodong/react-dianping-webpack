import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import React from 'react'
import App from '../containers'
import City from '../containers/city'
import Home from '../containers/home'
import User from '../containers/user'
import Search from '../containers/search'
import Detail from '../containers/detail'
import NotFound from '../containers/notfound'

class AppRoute extends React.Component{
    render(){
        return (
             <Router>
             
               <Switch>
                   {
                       routes.map((route,i) => (
                           <RouteGen key={i} {...route}/>
                       ))
                   }

                {/* <Route path="/home" exact={true} component={Home}/>
                <Route path="/detail" component={Detail}/> */}
               </Switch>              
            </Router>
        )
    }
}
const routes = [
    {
        path:'/',
        component: App,
        exact:true
    },
    {
        path:'/home',
        component: Home,
        exact:false
    },
    {
        path:'/city',
        component: City,
        exact:false
    },
    {
        path:'/user',
        component: User,
        exact:false
    },
    {
        path:'/search',
        component:Search,
        exact:false
    },
    {
        path:'/detail',
        component:Search,
        exact:false
    },
    {
        path:'*',
        component:NotFound,
        exact:false
    }
]
function RouteGen(route){
  return (
      <Route path={route.path} component={route.component} exact={route.exact}/>
  )
}

export default AppRoute