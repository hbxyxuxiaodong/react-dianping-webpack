import React from 'react'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import App from '../containers/app'
import Home from '../containers/home'
import List from '../containers/list'
import Detail from '../containers/detail'
import NotFound from '../containers/notfound'
const routes = [
    {
        path:'/',
        component:App
    },
    {
        path:'/list',
        component:List
    },
    {
        path:'/detail',
        component:Detail
    },
    {
        path:'*',
        component:NotFound
    },
]
// function AppRoute(){
    
//         return (
//             // <Router history={this.props.history} onUpdate={this.updateHandle}>
//             //    <Route path='/' component={App}>
//             //      <IndexRoute component={Home}/>
//             //      <Route path='list' component={List}/>
//             //      <Route path='detail:id' component={Detail}/>
//             //      <Route path='*' component={NotFound}/>
//             //    </Route>
//             // </Router>
//             <Router>
//                 <div>
//                     <ul>
//                         <li>
//                             <Link to='/'>App</Link>
//                         </li>
//                         <li>
//                             <Link to='/about'>About</Link>
//                         </li>
//                         <li>
//                             <Link to='/detail'>Ditail</Link>
//                         </li>
//                         <li>
//                             <Link to='/home'>Home</Link>
//                         </li>
//                     </ul>
//                     <Route exact path='/' component={ApprRouting}/>
//                     <Route path='/list' component={ListRouting}/>
                    
//                     <Route path='/home' component={HomeRouting}/>
//                     <Route path='/detail' component={DetailRouting}/>
//                     <Route path='*' component={NotFoundRouting}/>
//                 </div>
//             </Router>
//         )
//     }

//     function ApprRouting(){
//         return (<App/>)
//     }
//     function HomeRouting(){
//         return <Home/>
//     }
//     function ListRouting(){
//         return <List/>
//     }
//     function DetailRouting(){
//         return <Detail/>
//     }
//     function NotFoundRouting(){
//         return <NotFound/>
//     }
    //     console.log('每次router变化之后都会触发')
    //     //统计PV
    // }
   
function RouteWithSubRoutes(route){
   return (
       <Route
         path={route.path}
         render={props =>{
               <route.component {...props} routes={route.routes}/>
         }}
       />
   )
}
function AppRoute(){
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to='/list'>list</Link>
                    </li>
                    <li>
                        <Link to='/detail'>detail</Link>
                    </li>
                </ul>
                {
                    routes.map((route,i)=>{
                        <RouteWithSubRoutes key={i} {...route}/>
                    })
                }
            </div>
        </Router>
    )
}
export default AppRoute