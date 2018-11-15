import React from 'react';
class List extends React.Component {
    constructor(props, context){
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            
        }
    }
    render(){
        return <div>LIST</div>
    }
}
export default List