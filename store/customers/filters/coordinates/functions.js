export const isInsideBoundBoxList = (boundBoxList, coordinates) => {
  const { minlon, maxlon, minlat, maxlat } = boundBoxList;
  const { latitude, longitude } = coordinates;
  const lat = Number(latitude);
  const lon = Number(longitude);

  return boundBoxList.reduce(
    (acc, box) => isInsideBoundBox({ lat, lon }, box),
    false
  );
};

export const isInsideBoundBox = ({ lon, lat }, { minlon, minlat, maxlon, maxlat }) =>
  lon >= minlon && lon <= maxlon && (lat >= minlat && lat <= maxlat);
