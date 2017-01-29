"use strict";
var map = null;
var marker = null;
window.onload = function makeMap(uluru) {
   var uluru = {lat: 47.654828, lng: -122.307794};
   map = new google.maps.Map(document.getElementById('mapid'), {
     zoom: 18,
     center: uluru
   });
   marker = new google.maps.Marker({
     position: uluru,
     map: map
   });
   document.getElementById('buildingOption').onchange = locationChoice;
}

function getbuilding() {
   console.log("did we get to dropdwon")
  var building = document.getElementById('buildingOption').value;
  return building;
}

function locationChoice() {
   //debugger;
      if (getbuilding() == "MGH") {
         var uluru = {lat: 47.654828, lng: -122.307794};
         console.log("we hit mgh, yo");
         moveBus(map, marker, 47.654828, -122.307794);
        //makeMap(uluru);
     } else if (getbuilding() == "PAC") {
         console.log("we hit PAC, yo");
         var uluru = {lat: 47.659140, lng: -122.308594};
         moveBus(map, marker, 47.659140, -122.308594);
        //makeMap(uluru);
     } else if (getbuilding() == "ODE") {
         console.log("we hit ODE, yo");
        var uluru = {lat: 47.656505, lng: -122.310255};
        moveBus(map, marker, 47.656505, -122.310255);
        //makeMap(uluru);
      } else {
   }
}

function moveBus(map, marker, lat, lng) {
  marker.setPosition(new google.maps.LatLng(lat, lng));
  map.panTo(new google.maps.LatLng(lat, lng));
}
