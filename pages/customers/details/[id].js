import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import "./index.scss";
import {
  displayName,
  displayStreet
} from "../../../store/customers/functions/display";
import Contact from "./components/contact";
import Location from "./components/location";
import Header from "../../../components/header";
import { capitalize } from "lodash";

const Details = ({ getCustomerById }) => {
  const router = useRouter();
  const { id } = router.query;
  const customer = getCustomerById(id);
  const picture = customer && customer.picture ? customer.picture.large : "";
  const username = customer && customer.login ? customer.login.username : "";
  const email = customer && customer.email ? customer.email : "";
  const name = customer && customer.name ? customer.name : {};
  const mobileNumbers =
    customer && customer.mobileNumbers ? customer.mobileNumbers : [];
  const telephoneNumbers =
    customer && customer.telephoneNumbers ? customer.telephoneNumbers : [];

  const estate = customer && customer.location ? customer.location.state : "";
  const city = customer && customer.location ? customer.location.city : "";
  const postcode =
    customer && customer.location ? customer.location.postcode : "";

  return customer ? (
    <div className="container">
      <Header />
      <div className="page-title">
        <h1 className="page-title__text">Usuário</h1>
      </div>
      <div className="customer">
        <div className="avatar">
          <img className="avatar__image" src={picture} />
        </div>
        <div className="customer-name">
          <h1 className="customer-name__text">{displayName(name)}</h1>
        </div>
        <div className="customer-info">
          <Contact
            email={email}
            telephoneNumbers={telephoneNumbers}
            mobileNumbers={mobileNumbers}
          />
          <Location estate={estate} city={city} postcode={postcode} />
          <Contact
            email={email}
            telephoneNumbers={telephoneNumbers}
            mobileNumbers={mobileNumbers}
          />

          <Location estate={estate} city={city} postcode={postcode} />
          <Contact
            email={email}
            telephoneNumbers={telephoneNumbers}
            mobileNumbers={mobileNumbers}
          />
          <Location estate={estate} city={city} postcode={postcode} />
          <Contact
            email={email}
            telephoneNumbers={telephoneNumbers}
            mobileNumbers={mobileNumbers}
          />
        </div>
      </div>
    </div>
  ) : null;
};

const mapStateToProps = state => ({
  getCustomerById: id => {
    return state.data[id];
  }
});

export default connect(mapStateToProps)(Details);
