import React from 'react';
import {render} from 'react-dom';
import Header from '../../components/header';

class Hello extends React.Component {
    constructor(props, context){
      super(props, context);
      this.state = {
          now:Date.now()
      }
    }
    render(){
        var obj = {a:100, b:true}
        return (
            <div>
                <Header title='hello页面' aaa={obj}/>
                <p onClick={this.clickHandler.bind(this)}>hello world{this.state.now}</p>
            </div>
        )
    }
    clickHandler(){
        this.setState({
            now:Date.now()
        })
        //React 会实时监听每个组件的props和state的值，一旦有变化，会立刻更新组件，将结果重新渲染到页面上
    }
}
export default Hello