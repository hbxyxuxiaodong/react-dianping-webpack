import React from 'react';
import  {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import HomeHeader from '../../components/homeheader'
import Category from '../../components/category'
import Ad from './subpage/ad'
import List from './subpage/list'
import PureRenderMixin from 'react-addons-pure-render-mixin'
class Home extends React.Component {
    constructor(props, context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            
        }
    }
    render(){
        return (
            <div>
                <HomeHeader/>
                <Category/>
                <div style={{height:'15px'}}></div>
                <Ad/>
                <List cityName={this.props.userinfo.cityName}/>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        userinfo:state.userinfo
    }
}
function mapDispatchToProps(dispatch){
    return {}
}
export default  connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)