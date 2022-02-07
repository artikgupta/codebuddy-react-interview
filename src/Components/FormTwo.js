import React, { useState } from 'react';

const initialState = {
  firstName: '',
  lastName: '',
  address: '',
};

function FormTwo({ prevStep, nextStep }) {
  const [userData, setUserData] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div>
      <div className="form">
        <input
          type="text"
          placeholder="firstName"
          value={userData.firstName}
          name="firstName"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="lastName"
          value={userData.lastName}
          name="lastName"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="address"
          value={userData.address}
          name="address"
          onChange={handleChange}
        />
        <input type="submit" value="Back" prevStep={prevStep} />
        <input type="submit" value="Save" />
        <input type="submit" value="Save and Next" onSubmit={nextStep} />
      </div>
    </div>
  );
}

export default FormTwo;
