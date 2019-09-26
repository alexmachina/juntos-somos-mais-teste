import { compose } from "ramda";
import {
  appendId,
  transformGenderAndOmitAge,
  removePhoneAndCell,
  addPhones
} from "./functions";

export const transformCustomerFromAPI = entry => {
  const transformEntry = compose(
    appendId,
    transformGenderAndOmitAge,
    removePhoneAndCell,
    addPhones
  );

  return transformEntry(entry);
};
