import { uniqBy } from "lodash";
import { applyRegionFilters } from './region';
import { applyCoordinateFilters } from './coordinates';

export const applyAllFilters = (data, regionFilters, customerFilters) => {
  if (regionFilters.size && customerFilters.size) {
    const setA = applyRegionFilters(data, regionFilters);
    const setB = applyCoordinateFilters(setA, customerFilters);
    return setB;
  }

  if (regionFilters.size && !customerFilters.size) {
    return applyRegionFilters(data, regionFilters);
  }

  if (!regionFilters.size && customerFilters.size) {
    return applyCoordinateFilters(data, customerFilters);
  }

  return data;
};
