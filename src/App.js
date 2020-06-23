import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { Map } from './components/Map/Map.js'
import { SideBar } from './components/SideBar/SideBar';


function App() {
  const mapRef = useRef(null);
  let [map, setMap] = useState()

  let [markers, setMarkers] = useState()

  const createMap = () => {
    var options = {
      center: { lat: 33.7175, lng: -117.8311 },
      zoom: 8
    };
    setMap(new window.google.maps.Map(mapRef.current, options));
  }

  // const renderMarkers = () => {

  //   window.google.maps.event.addListener(map, 'click',
  //     function (event) {
  //       addMarker({ coords: event.latLng });
  //     });

  //   for (var i = 0; i < markers.length; {
  //     addMarker(markers[i]);
  //   }



  //   const addMarker = (props) => {
  //       var marker = new window.google.maps.Marker({
  //         position: props.coords,
  //         map: map
  //       });

  //       if (props.iconImage) {

  //         marker.setIcon(props.iconImage);
  //       }

  //       if (props.content) {
  //         var infoWindow = new window.google.maps.InfoWindow({
  //           content: props.content
  //         });

  //         marker.addListener('click', function () {
  //           infoWindow.open(map, marker);
  //         });
  //       }
  //     }

    // Search functionality

    // var input = document.getElementById('search');
    // var searchBox = new google.maps.places.SearchBox(input);

    // map.addListener('bounds_changed', function () {
    //   searchBox.setBounds(map.getBounds());
    // });

    // var markers = [];

    // searchBox.addListener('places_changed', function () {
    //   var places = searchBox.getPlaces();

    //   if (places.length == 0)
    //     return;

    //   markers.forEach(function (m) { m.setMap(null); });
    //   markers = [];

    //   var bounds = new google.maps.LatLngBounds();
    //   places.forEach(function (p) {
    //     if (!p.geometry)
    //       return;

    //     markers.push(new google.maps.Marker({
    //       map: map,
    //       title: p.name,
    //       position: p.geometry.location
    //     }));

    //     if (p.geometry.viewport)
    //       bounds.union(p.geometry.viewport);
    //     else
    //       bounds.extend(p.geometry.location);
    //   });

    //   map.fitBounds(bounds);
    // });
  // }

  useEffect(() => {
    createMap()
  }, [])

  return (
    <div className="App">
      <SideBar />
      <Map mapRef={mapRef} />
    </div>
  );
}

export default App;