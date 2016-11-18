'use strict'
var knex = require("./knex");

module.exports = function (array) {
  return knex('pictures').insert({
      'image_data_uri': "" || "",
      'image_name': array[0].primaryData.filename || "",
      'user_id': 1,
      'make': "",//array[0].exifData.image.Make || "",
      'camera_model_name': "",//array[0].exifData.image.Model || "",
      'orientation': array[0].exifData.image.Orientation || "",
      'x-resolution': array[0].exifData.image.XResolution || "",
      'y-resolution': array[0].exifData.image.YResolution || "",
      'resolution_unit': resolutionUnit(array),
      'software': "MediaTek Camera Application",
      'date_and_time_modified': '2016-11-12 00:25:03',
      'date_and_time_original': '2016-11-12 00:25:03',
      'date_and_time_digitized': '2016-11-12 00:25:03',
      'ycbcr_positioning': 'Co-sited',
      'exposure_time': '1/17',
      'f_number': 2.0,
      'iso_speed': 1222,
      'exif_version': "0220",
      'components_configuration': 'Y, Cb, Cr, -',
      'exposure_bias': '0 EV',
      'light_source': 'Other',
      'sub_sec_time': 30,
      'sub_sec_time_original': 30,
      'sub_sec_time_digitized': 30,
      'flashpix_version': '0100',
      'color_space': 'sRGB',
      'exposure_mode': 'Auto',
      'white_balance': 'Auto',
      'digital_zoom_ratio': 1,
      'scene_capture_type': 'Standard',
      'interop_index': 'R98 - DCF basic file (sRGB)',
      'interop_version': '0100',
      'compressed_bits_per_pixel': 1.8,
      'exposure_compensation': 1.7,
      'max_aperture_value': 3.0,
      'subject_distance': 0.75,
      'metering_mode': 'Center-weighted average',
      'flash': "off, did not fire",
      'focal_length': 3.5,
      'gps_version_id': '2.2.0.0',
      'gps_latitude_ref': gpsLatitudeRef(array),
      'gps_latitude': gpsLatitude(array),
      'gps_longitude_ref': gpsLongitudeRef(array),
      'gps_longitude': gpsLongitude(array),
      'gps_altitude_ref': 'Above Sea Level',
      'gps_altitude': 82,
      'gps_time_stamp': '2016-11-12 08:16:31',
      'gps_processing_method': 'GPS',
      'gps_date_stamp': '2016-11-12',
      'compression': 'JPEG (old-style)',
      'thumbnail_offset': 1280,
      'thumbnail_length': 17946,
      'original_name': array[0].primaryData.originalName,
      'encoding': array[0].primaryData.encoding,
      'mimetype': array[0].primaryData.mimeType,
      'destination': array[0].primaryData.destination,
      'path': array[0].primaryData.path,
      'size': 34807
    }
  ).then(function () {
    console.log("It worked, I think");
  }).catch(function (err) {
    console.error(err);
  });
};

function resolutionUnit(arr){
  if (arr[0].exifData.image.ResolutionUnit === 1) {
    return "milimeters"
  }
  else if (arr[0].exifData.image.ResolutionUnit === 2) {
    return "inches"
  }
  else {
    return ""
  }
}

function gpsLatitudeRef(arr){
  if (arr[0].exifData.gps.GPSLatitudeRef === 'N') {
    return 'North';
  }
  else if (arr[0].exifData.gps.GPSLatitudeRef === 'S') {
    return 'South';
  }
  else {
    return '';
  }
} //'North',

function gpsLongitudeRef(arr) {
  if (arr[0].exifData.gps.GPSLongitudeRef === 'E') {
    return 'East';
  }
  else if (arr[0].exifData.gps.GPSLongitudeRef === 'W') {
    return 'West';
  }
  else {
    return '';
  }
}

function gpsLatitude(startArr) {
  let exifStuff = startArr[0].exifData.gps.GPSLatitude;
  let endNumber = ((exifStuff[2]/60) + exifStuff[1])/60 + exifStuff[0];
  if (startArr[0].exifData.gps.GPSLatitudeRef === 'N') {
    return endNumber;
  }
  else if (startArr[0].exifData.gps.GPSLatitudeRef === 'S') {
    return endNumber * -1;
  }
  else {
    return;
  }
}

function gpsLongitude(startArr) {
  let exifStuff = startArr[0].exifData.gps.GPSLongitude;
  let endNumber = ((exifStuff[2]/60) + exifStuff[1])/60 + exifStuff[0];
  if (startArr[0].exifData.gps.GPSLongitudeRef === 'E') {
    return endNumber;
  }
  else if (startArr[0].exifData.gps.GPSLongitudeRef === 'W') {
    return endNumber * -1;
  }
  else {
    return;
  }
}


// GPSLatitude
// GPSLatitudeRef":"N",
// "GPSLatitude":[37,45,33.2336],
// "GPSLongitudeRef":"W",
// "GPSLongitude":[122,24,9.4262]
//
// 'gps_longitude_ref': 'West',
// 'gps_latitude': 37.75925,
// 'gps_longitude': -122.402681,
