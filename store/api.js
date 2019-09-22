import fetch from "isomorphic-unfetch";
import shortid from "shortid";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import {
  cond,
  T,
  equals,
  always,
  omit,
  evolve,
  merge,
  compose,
  identity
} from "ramda";

export const fetchData = async () => {
  const jsonUrl =
    "https://storage.googleapis.com/juntossomosmais-code-challenge/input-frontend-apps.json";

  const response = await fetch(jsonUrl);
  const json = await response.json();
  const data = json.results.map(transform);
  return data;
};

const transform = entry => {
  const transformGender = cond([
    [equals("male"), always("M")],
    [equals("female"), always("F")],
    [T, identity]
  ]);

  const omitAge = omit(["age"]);

  const removeOldPhoneFields = omit(["phone", "cell"]);

  const addNewPhoneFields = merge({
    telephoneNumbers: [parsePhoneNumberFromString(entry.phone, "BR").number],
    mobileNumbers: [parsePhoneNumberFromString(entry.cell, "BR").number]
  });

  const transformGenderAndOmitAge = evolve({
    gender: transformGender,
    dob: omitAge,
    registered: omitAge
  });

  const appendId = obj => Object.assign({}, obj, { id: shortid.generate() });
  const transformEntry = compose(
    appendId,
    transformGenderAndOmitAge,
    removeOldPhoneFields,
    addNewPhoneFields
  );
  return transformEntry(entry);
};
