import { applyCoordinateFilters } from '../';
import { Set } from 'immutable';

describe('Filters', () => {
  describe('Customer coordinates filter', () => {
    const customers = [
      {
        location: {
          coordinates: {
            latitude: "1.7186",
            longitude: "1.4596"
          },
        }
      },
      {
        location: {
          coordinates: {
            latitude: "-25.7186",
            longitude: "-46.4596"
          }
        },
      },
    {
        location: {
          coordinates: {
            latitude: "10.7186",
            longitude: "57.4596"
          }
        },
      },
    ];

    it('Should retrive "special" coordinate customers', () => {
      const special = applyCoordinateFilters(customers, Set(['special']));
      const expected = [{
        location: {
          coordinates: {
            latitude: "1.7186",
            longitude: "1.4596"
          },
        }
      }];

      expect(special).toEqual(expected);
    });

    it('Should retrieve "normal" coordinate customers', () => {
      const special = applyCoordinateFilters(customers, Set(['normal']));
      const expected = [{
        location: {
          coordinates: {
            latitude: "-25.7186",
            longitude: "-46.4596"
          },
        },
      }];
    });
  });
});