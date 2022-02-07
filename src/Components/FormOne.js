import React, { useState } from 'react';
import '../styleSheet/style.css';

const initialState = {
  emailId: '',
  password: '',
};

function FormOne({ prevStep, nextStep }) {
  const [userData, setUserData] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="container">
      <div className="form">
        <input
          type="text"
          placeholder="email-id"
          value={userData.emailId}
          name="emailId"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          value={userData.password}
          name="password"
          onChange={handleChange}
        />
        <input type="submit" value="Back" className="btn" prevStep={prevStep} />
        <input type="submit" value="Save" className="btn" />
        <input type="submit" value="Save and Next" className="btn" onSubmit={nextStep} />
      </div>
    </div>
  );
}

export default FormOne;
