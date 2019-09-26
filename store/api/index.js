import fetch from "isomorphic-unfetch";
import { transformCustomerFromAPI } from "./transformers";

export const fetchData = async () => {
  const jsonUrl =
    "https://storage.googleapis.com/juntossomosmais-code-challenge/input-frontend-apps.json";

  const response = await fetch(jsonUrl);
  const json = await response.json();
  const data = json.results.map(transformCustomerFromAPI);
  return data;
};
