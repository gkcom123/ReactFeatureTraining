import React from 'react';
import "../inheritance/style.css";
class Label extends React.Component{
    render(){
      return <span className={this.props.className + ' plain-label'}>
         {this.props.children} 
       </span>
    }
 }
 
 class SuccessLabel2 extends React.Component{
   
   render(){
     return <Label className='success-label'>{this.props.children}</Label>;  
   }
 }
 
 class ErrorLabel2 extends React.Component{
   
   render(){
     return <Label className='error-label'>{this.props.children}</Label>;  
   }
 }
 export {ErrorLabel2,SuccessLabel2};