import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
class Header extends React.Component {
    constructor(props,context){
       super(props,context);
       this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return (
            <p>{this.props.title}</p>
        )
    }
    // componentDidMount(){
    //   //渲染完成，一般像是获取ajax数据
    // }
    // componentDidUpdate(pervProps,prevState){
    //   //只要状态或属性改变就能触发react检测
    //  //如果要更新，必须要经过shouldComponentUpdate的同意
    // }
    // shouldComponentUpdate(nextProps,nextState){

    //    //没有构造函数的绑定，默人返回true 
    //    //return ture 或false 属性没有变，状态没有变就返回false 这一步就是constructor里面帮我们做的

    // }
}
export default Header