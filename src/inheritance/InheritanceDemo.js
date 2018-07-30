import React, {Component} from 'react';
import "./style.css";
class Label extends Component{
    constructor(props){
      super(props);
      this.className='plain-label';
    }
     render(){
       return <span className={this.className}>
          {this.props.children} 
        </span>
     }
  }
  class SuccessLabel extends Label{
    constructor(props){
      super(props);
      this.className = this.className + ' success-label';
    }
  }
  class ErrorLabel extends Label{
    constructor(props){
      super(props);
      this.className = this.className + ' error-label';
    }
  }
  export { SuccessLabel, ErrorLabel };