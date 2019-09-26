import { Set } from 'immutable';
import { applyAllFilters } from '../';
import customers from './fake';

describe('Filters', () => {
  describe('Apply all filters', () => {
    it('Should apply region and coordinates filters', () => {
      const coordinateFilters = Set(['special']);
      const regionFilters = Set(['sul']);
      const specialCustomersFromSul = applyAllFilters(customers, regionFilters, coordinateFilters);
      expect(specialCustomersFromSul.length).toEqual(1);
    });

    it('Should apply only region filters if no coordinates filter is present', () => {
      const coordinateFilters = Set([]);
      const regionFilters = Set(['sul']);
      const allCustomersFromSul = applyAllFilters(customers, regionFilters, coordinateFilters);
      expect(allCustomersFromSul.length).toEqual(2);
    });

    it('Should apply only coordinates filter when no region filter is present', () => {
      const coordinateFilters = Set(['normal']);
      const regionFilters = Set([]);
      const normalCustomers = applyAllFilters(customers, regionFilters, coordinateFilters);
      expect(normalCustomers.length).toEqual(1);
    });

    it('Should return the data intact when no filter is present', () => {
      const coordinateFilters = Set([]);
      const regionFilters = Set([]);

      const intact = applyAllFilters(customers, regionFilters, coordinateFilters);
      expect(intact).toEqual(customers);
    });
  });
});