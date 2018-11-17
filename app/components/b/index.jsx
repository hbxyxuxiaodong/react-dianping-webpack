import React from 'react';
class B extends React.Component {
    constructor(props, context){
      super(props, context);
      this.state = {
          now:Date.now()
      }
    }
    render(){
        return (
            <p>{this.props.userinfo.city}</p>
        )
    }
}
export default B