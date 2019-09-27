import React from "react";

const CustomerContact = ({ email, mobileNumbers, telephoneNumbers }) => {
  return (
    <div className="customer-info-section">
      <h3 className="customer-info-section__text">Contato</h3>
      <div className="customer-email field">
        <span className="customer-email__text">Email: {email}</span>
      </div>
      <div className="customer-mobile_numbers field">
        {mobileNumbers.map(mobileNumber => (
          <span className="customer-mobile_numbers__text">
            Celular: {mobileNumber}
          </span>
        ))}
      </div>
      <div className="customer-telephone_numbers field">
        {telephoneNumbers.map(telephoneNumber => (
          <span className="customer-telephone_numbers__text">
            Telefone: {telephoneNumber}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CustomerContact;
