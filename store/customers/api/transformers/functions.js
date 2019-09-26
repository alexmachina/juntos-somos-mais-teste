import shortid from "shortid";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import {
  over,
  lensProp,
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

export const transformGender = cond([
  [equals("male"), always("M")],
  [equals("female"), always("F")],
  [T, identity]
]);

export const omitAge = omit(["age"]);

export const removePhoneAndCell = omit(["phone", "cell"]);

export const addPhones = entry =>
  Object.assign({}, entry, {
    telephoneNumbers: [parsePhoneNumberFromString(entry.phone, "BR").number],
    mobileNumbers: [parsePhoneNumberFromString(entry.cell, "BR").number]
  });

export const appendId = obj =>
  Object.assign({}, obj, { id: shortid.generate() });

export const transformGenderAndOmitAge = evolve({
  gender: transformGender,
  dob: omitAge,
  registered: omitAge
});
