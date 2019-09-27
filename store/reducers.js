import { Map } from "immutable";
const initialState = {
  data: undefined
};

const SET_CUSTOMERS = "SET_CUSTOMERS";
const byId = arr => arr.reduce((acc, el) => ({ ...acc, [el.id]: el }), {});
export const setCustomers = data => {
  return {
    type: SET_CUSTOMERS,
    payload: { data: Map(byId(data)) }
  };
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CUSTOMERS:
      return Object.assign({}, state, { data: payload.data });
    default:
      return state;
  }
};

export default rootReducer;
