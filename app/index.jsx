
// import ReactDOM  from 'react-dom';
// class Hello extends React.Component {
//     render(){
//         // let style = { fontSize:'14px',display:'block'};
//         let arr = ['aa','bb','cc'];
//         return <div>
//             <p className="title" onClick={this.clickHandler.bind(this)}>123</p>
//             {/* <p style = {style}>345</p> */}
//             {
//                 <p style = {{fontSize:'14px',display:'block'}}></p>//第一个大括号用来定义这是一个js的变量，第二个大括号是js变量就是这么写的
                
//             }
//             {
//                 <ul>
//                     {
//                         arr.map((val,index,arr)=>{
//                             return <li key={index}>{val}</li>
//                             //key 加上效率更高哦，不加也不会出错 ，通过key属性区分
//                         })
//                     }
//                 </ul>
//             }
//         </div>
//     }
//     clickHandler(){
//         console.log(this.clickHandler)
//         console.log('我被点击了')
//     }
// }

// ReactDOM.render(
//     <Hello/>,
//     document.getElementById('root')
// )

// import React from 'react';
// import Todo from './containers/todo';
// import {render} from 'react-dom';
// render(<Todo/>,document.getElementById('root'))
// import {hashHistory} from 'react-router'
// import RouteMap from './router/routeMap'
// import AppRoute from './router/routeMap';
// import App from './components/app';
// import rootReducer from './reducers';
// import {createStore} from 'redux';
// import  fn from './redux-demo';
// fn()
// const store = createStore(rootReducer);
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux';
import configureStore from './store/configureStore'
// import Hello from './containers/hello'
import {getData, postData} from './fetch/data'
import AppRoute from './router/approute'
const store  = configureStore()
//Provider 是react-redux 提供的一个组件，它本质上还是一个react组件，只不过根据redux的特性做了一些封装，它会帮我们做一些redux的事情
//首先要获取store，把他传到provider里面去 
render (
    <Provider store={store}>
        {/* <Hello/> */}
        <AppRoute/>
    </Provider>,
    document.getElementById('root')
)