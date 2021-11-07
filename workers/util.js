"use strict";

function decodeNumberArr(str, b, shift, length) {
  const result = [];

  for (let j = 0; j < str.length; j += length) {
    const token = str.slice(j, j + length);
    result.push(decodeNumber(token, b, shift));
  }

  return result;
}

function decodeNumber(str, b, shift) {
  let x = 0;
  let p = 1;

  for (let i = str.length; i--;) {
    x += (str.charCodeAt(i) - shift) * p;
    p *= b;
  }

  return x;
}

function decodePolyline(str, precision) {
  let index = 0,
      lat = 0,
      lng = 0,
      coordinates = [],
      shift = 0,
      result = 0,
      byte = null,
      latitude_change,
      longitude_change,
      factor = Math.pow(10, precision || 5);

  while (index < str.length) {
    byte = null;
    shift = 0;
    result = 0;

    do {
      byte = str.charCodeAt(index++) - 63;
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20);

    latitude_change = result & 1 ? ~(result >> 1) : result >> 1;
    shift = result = 0;

    do {
      byte = str.charCodeAt(index++) - 63;
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20);

    longitude_change = result & 1 ? ~(result >> 1) : result >> 1;
    lat += latitude_change;
    lng += longitude_change;
    coordinates.push([lng / factor, lat / factor]);
  }

  return coordinates;
}