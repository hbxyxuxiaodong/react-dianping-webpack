import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {bindActionCreators} from 'redux'
import LocalStore from '../util/localstore'
import {CITYNAME} from '../config/localStoreKey'
import {connect} from 'react-redux'
import * as userInfoActionsFromOtherFile from '../actions/userinfo' 
class App extends React.Component {
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdatee = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            initDone: false
        }
    }
    render(){
        return (
        <div>
           {
               this.state.initDone ? this.props.children :<div>正在加载...</div>
           }
        </div>
        )
    }
    componentDidMount(){
        // 获取位置信息
        let cityName = LocalStore.getItem('CITYNAME')
        if(cityName == null){
            cityName = '北京'
        }
        this.props.userInfoActions.update(
            {
                cityName: cityName
            }
        )
        this.setState({
            initDone:true
        })
    }
}

//------------------ redux react 绑定 --------------------

function mapStateToProps(state){
    return {}
}
function mapDispatchToProps(dispatch){
    return {
        userInfoActions:bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)