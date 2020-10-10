import React, {Component} from 'react';
import AddNumber from './AddNumber'
class AddNumberRoot extends Component{
    render(){
      return(
        <div>
          <h1>Add Number button</h1>
          <AddNumber onClick={function(id){
              this.props.getNumber(id);
          }.bind(this)}></AddNumber>
        </div>
      )
    }
  }

  export default AddNumberRoot;