import { applyRegionFilters } from '../';
import { Set } from 'immutable';

describe('Filters', () => {
  describe('Region filters', () => {
    const customers = [
      { id: '1', location: { state: 'amazonas' } },
      { id: '2', location: { state: 'amazonas' } },
      { id: '3', location: { state: 'bahia' } },
      { id: '4', location: { state: 'amazonas' } },
      { id: '5', location: { state: 'são paulo' } },
      { id: '6', location: { state: 'rio de janeiro' } },
     ];

    it('Should return customers from norte', () => {
      const customersFromNorte = applyRegionFilters(customers, Set(['norte']));
      expect(customersFromNorte).toEqual([
        { id: '1', location: { state: 'amazonas' } },
        { id: '2', location: { state: 'amazonas' } },
        { id: '4', location: { state: 'amazonas' } },
      ]);
    });
    
    it('Should return Customers from nordeste and sudeste', () => {
      const customersFromSudesteAndNordeste = applyRegionFilters(customers, Set(['sudeste', 'nordeste']));
      expect(customersFromSudesteAndNordeste).toEqual([
      { id: '3', location: { state: 'bahia' } },
      { id: '5', location: { state: 'são paulo' } },
      { id: '6', location: { state: 'rio de janeiro' } },
      ]);
    });

    it('Should return an empty array when no filters are present', () => {
      const noCustomers = applyRegionFilters(customers, Set([]));
      expect(noCustomers).toEqual([]);
    });
  });
});