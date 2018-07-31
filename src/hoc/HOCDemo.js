import React from 'react';
const withHighProfile = (WrappedComponent,data) => {
  class HOC extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
      return (
        <WrappedComponent
          position={data.age<30?'Director':'Employee'}
          {...this.props}
        />
      );
    }
  }
    
  return HOC;
};

export default withHighProfile;