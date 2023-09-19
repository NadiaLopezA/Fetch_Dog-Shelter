import { BottomLeft } from '../interfaces';

export const getNewCoordinates = (
    lat: number,
    lon: number,
    rad: number
  ): BottomLeft => {
    const rEarth = 6371000.0;
    const getNewLatitude = (data: { lat: number; dy: number }) =>
      data.lat + (data.dy / rEarth) * (180 / Math.PI);
    const getNewLongitude = (data: { lat: number; lon: number; dx: number }) =>
      data.lon +
      ((data.dx / rEarth) * (180 / Math.PI)) /
      Math.cos((data.lat * Math.PI) / 180);

    const bottomLeft = {
      lat: getNewLatitude({ lat, dy: rad * -1 }),
      lon: 0,
    };
    bottomLeft.lon = getNewLongitude({
      lat: bottomLeft.lat,
      lon,
      dx: rad * -1,
    });

    const topRight = {
      lat: getNewLatitude({ lat, dy: rad }),
      lon: 0,
    };
    topRight.lon = getNewLongitude({ lat: topRight.lat, lon, dx: rad });

    return { bottom_left: bottomLeft, top_right: topRight };
  };