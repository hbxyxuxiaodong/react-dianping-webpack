
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

import React from 'react';
import Hello from './containers/hello';
import {render} from 'react-dom';
render(<Hello/>,document.getElementById('root'))