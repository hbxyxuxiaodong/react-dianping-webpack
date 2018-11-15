import React from 'react';
class Home extends React.Component {
    constructor(props, context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            
        }
    }
    render(){
        return <div>home</div>
    }
}
export default Home