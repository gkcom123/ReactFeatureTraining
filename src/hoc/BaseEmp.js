import React from 'react';
import withHighProfile from './HOCDemo';
const data = {age:30};
const DisplayEmployee = props => (
  <div>
    The position of employee is {props.position}.
  </div>
);

const WrappedComponent = withHighProfile(DisplayEmployee,data);

export default WrappedComponent;