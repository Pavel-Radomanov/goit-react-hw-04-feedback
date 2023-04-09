import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return (
    <div>
      <h4>{message}</h4>
    </div>
  );
};
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
