import regions from "./regions";
import { uniqBy } from "lodash";

export const applyCustomerFilters = (data, filters) => {
  return hasFilters(filters)
    ? data.filter(customer => {
        const {
          location: { coordinates }
        } = customer;

        const filtersList = filters.toJS();
        const boxes = filters
          .toJS()
          .reduce((acc, filter) => [...acc, ...boundBoxes[filter]], []);
        return isInsideBoundBoxList(boxes, coordinates);
      })
    : [];
};

const isInsideBoundBoxList = (boundBoxList, coordinates) => {
  const { minlon, maxlon, minlat, maxlat } = boundBoxList;
  const { latitude, longitude } = coordinates;
  const lat = Number(latitude);
  const lon = Number(longitude);

  return boundBoxList.reduce(
    (acc, box) => isInsideBoundBox({ lat, lon }, box),
    false
  );
};

const isInsideBoundBox = ({ lon, lat }, { minlon, minlat, maxlon, maxlat }) =>
  lon >= minlon && lon <= maxlon && (lat >= minlat && lat <= maxlat);

const boundBoxes = {
  special: [
    {
      minlon: -2.196998,
      minlat: -46.361899,
      maxlon: 15.41158,
      maxlat: 34.276938
    },
    {
      minlon: -19.766959,
      minlat: -52.997614,
      maxlon: 23.966413,
      maxlat: 44.428305
    }
  ],
  normal: [
    {
      minlon: -26.155681,
      minlat: -54.777426,
      maxlon: 34.016466,
      maxlat: 46.603598
    }
  ]
};

const hasFilters = filters => filters.size;

export const applyRegionFilters = (data, filters) => {
  const statesToFilterFrom = filters
    .toJS()
    .reduce((acc, filter) => [...acc, ...regions[filter]], []);

  return hasFilters(filters)
    ? data.filter(customer =>
        statesToFilterFrom.includes(customer.location.state)
      )
    : [];
};

export const applyAllFilters = (data, regionFilters, customerFilters) => {
  if (regionFilters.size && customerFilters.size) {
    const setA = applyRegionFilters(data, regionFilters);
    const setB = applyCustomerFilters(setA, customerFilters);
    return setB;
  }

  if (regionFilters.size && !customerFilters.size) {
    return applyRegionFilters(data, regionFilters);
  }

  if (!regionFilters.size && customerFilters.size) {
    return applyCustomerFilters(data, customerFilters);
  }

  return data;
};
