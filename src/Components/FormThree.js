import React, { useState } from 'react';

const initialState = {
  countryCode: '+91',
  phoneNumber: '',
};

function FormThree({ prevStep }) {
  const [userData, setUserData] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div>
      <div className="form">
        <select name="countryCode" value={userData.countryCode} onChange={handleChange}>
          <option value="+91" name="countryCode">
            +91
          </option>
          <option value="+1" name="countryCode">
            +1
          </option>
        </select>
        <input
          type="number"
          placeholder="phoneNumber"
          value={userData.phoneNumber}
          name="phoneNumber"
          onChange={handleChange}
        />
        <input type="checkbox" />
        <input type="submit" value="Back" prevStep={prevStep} />
        <input type="submit" value="Save" />
        <input type="submit" value="Save and Next" disabled />
      </div>
    </div>
  );
}

export default FormThree;
