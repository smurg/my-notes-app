import React from 'react';

const HOCWithEmptyMessage = (WrappedComponent) => { 
  /*
    Higher Order components are usable for encapsulating behaviour
    to be reused across different components.
    -> on this case we display a message when receiving a signal
  */
  const HocComponent = ({ emptyMessage, isEmpty, ...props }) => {
    return (
      isEmpty ? (
        <div className="alert alert-light" role="alert">
          {emptyMessage}
        </div>
      ) : 
        <WrappedComponent {...props} />
    );
  };
  return HocComponent;
};

export default HOCWithEmptyMessage;