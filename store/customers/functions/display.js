import { capitalize, starCase } from "lodash";

export const displayStreet = street => {
  const numberRegex = street.match(/\d+/);
  const number = numberRegex ? numberRegex[0] : "";
  const name = street.replace(/[0-9]/g, "").trim();
  const capitalizedName = name
    .split(" ")
    .map(capitalize)
    .join(" ");

  return `${capitalizedName}, ${number}`;
};

export const displayName = ({ title = "", first = "", last = "" }) =>
  `${capitalize(first)} ${capitalize(last)}`;
