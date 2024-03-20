// In AuthButton.jsx

import React from 'react';


const AuthButton = ({ onAuthAction }) => {
  return (
    <button className="auth-button" onClick={onAuthAction}>
      Logout
    </button>
  );
};

export default AuthButton;
