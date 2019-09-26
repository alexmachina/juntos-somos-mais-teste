import boundBoxes from './boundBoxes';
import { isInsideBoundBoxList } from './functions';

const hasFilters = filters => filters.size;
export const applyCoordinateFilters = (data, filters) => {
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