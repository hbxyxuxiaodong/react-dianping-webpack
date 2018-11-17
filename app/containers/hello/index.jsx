import React from 'react';
import {connect} from 'react-redux';
// import Header from '../../components/header';
import { bindActionCreators } from 'redux';
import * as userinfoActions from '../../actions/userinfo'
import A from '../../components/a'
import B from '../../components/b'
import C from '../../components/c'
class Hello extends React.Component {
    constructor(props, context){
      super(props, context);
      this.state = {
          now:Date.now()
      }
    }
    render(){
        // var obj = {a:100, b:true}
        return (
            <div>
                {/* <Header title='hello页面' aaa={obj}/> */}
                <p>hello world</p>
                <hr/>
                <A userinfo={this.props.userinfo}/>
                <hr/>
                <B userinfo={this.props.userinfo}/>
                <hr/>
                <C actions={this.props.userinfoActions}/>
                {/* <p onClick={this.clickHandler.bind(this)}>hello world{this.state.now}</p> */}
            </div>
        )
    }
    // clickHandler(){
    //     this.setState({
    //         now:Date.now()
    //     })
    //     //React 会实时监听每个组件的props和state的值，一旦有变化，会立刻更新组件，将结果重新渲染到页面上
    // }
    componentDidMount(){
        //模拟登录
        this.props.userinfoActions.login({
            userid:'abc',
            city:'beijing'
        })
    }
}
function mapStateToProps(state){
    return {
        userinfo:state.userinfo
    }
}
function mapDispatchToProps(dispatch){
    return {
        userinfoActions:bindActionCreators(userinfoActions, dispatch)
        //将dispacth和action结合在一块，又是作为属性给了这个hello组件  
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Hello)
//定义好这么个函数，通过connect给它塞进来，塞到hello这个组件来，mapState函数return的这个key，就会变成hello组件的props，然后
//我们可以通过this.props.userinfo来拿到state.userinfo 这个值