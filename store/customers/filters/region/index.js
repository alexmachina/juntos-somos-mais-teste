import regions from "./regions";
const hasFilters = s => s.size;

export const applyRegionFilters = (customers, selectedRegions) => {
  const statesToFilterFrom = selectedRegions
    .toJS()
    .reduce((acc, filter) => [...acc, ...regions[filter]], []);

  return hasFilters(selectedRegions)
    ? customers.filter(customer =>
        statesToFilterFrom.includes(customer.location.state)
      )
    : [];
};
