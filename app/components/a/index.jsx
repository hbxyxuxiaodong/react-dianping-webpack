import React from 'react';
class A extends React.Component {
    constructor(props, context){
      super(props, context);
      this.state = {
          now:Date.now()
      }
    }
    render(){
        return (
            <p>{this.props.userinfo.userid}</p>
        )
    }
   
}
export default A