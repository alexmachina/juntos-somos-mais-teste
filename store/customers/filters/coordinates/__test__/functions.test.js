import boundBoxes from '../boundBoxes';
import { isInsideBoundBox, isInsideBoundBoxList } from '../functions';

describe('Filters', () => {
  describe('Coordinates', () => {
    describe('Functions', () => {
      
      describe('isInsideBoundBox', () => {
        it('Should return true if coordinates are inside the given box', () => {
          const coordinates = { lon: -2, lat: 2 };
          const box = { minlon: -3, maxlon: 3, minlat: -10, maxlat: 2.11 };
          expect(isInsideBoundBox(coordinates, box)).toEqual(true);
        });

        it('Should return false if coordinates are outside the given box', () => {
          const coordinates = { lon: -6, lat: 2 };
          const box = { minlon: -3, maxlon: 3, minlat: -10, maxlat: 2.11 };
          expect(isInsideBoundBox(coordinates, box)).toEqual(false);
        });
      });
      
      describe('isInsideBoundBoxList', () => {
        it('Should return true if coordinates are inside the given bound box list', () => {
          const coordinates = { latitude: -2, longitude: 2 };
          const boundBoxList = boundBoxes.special;
          expect(isInsideBoundBoxList(boundBoxList, coordinates)).toEqual(true);
        });
      });
    });
  });
});