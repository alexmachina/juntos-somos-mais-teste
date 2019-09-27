import React from "react";
import { capitalize } from "lodash";

const Location = ({ estate, city, postcode }) => {
  return (
    <div className="customer-info-section">
      <h3 className="customer-info-section__text">Localização</h3>
      <div className="customer-state field">Estado: {capitalize(estate)}</div>
      <div className="customer-city field">Cidade: {capitalize(city)}</div>
      <div className="customer-postcode field">CEP: {postcode}</div>
    </div>
  );
};

export default Location;
