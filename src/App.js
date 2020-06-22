import React, { Component } from 'react';
import './App.css';

import axios from 'axios'

class App extends Component() {

  componentDidMount() {
    this.getVenues()
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCkqzhknCSc2mV6evpPKPtLzNZVs-OEs4M&callback=initMap")
    window.init = this.initMap
  }

  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?"
    const parameters = {
      client_id: "XEWEQFRNIC4IXCGG2CFKRLC2GMUKLW001NWL42TSS1LEDVJ4",
      client_secret: "IBYOXDNUOQ5Z5HSKZUIZ03RXDNWFKNXCPU33B40PXPH1R4OM",
      query: "food",
      near: "Orange",
      v: "20182507"
    }

    axios.get(endPoint + new URLSearchParams(parameters))
    .then(response => {
      this.setState({
        venues: response.data.response.groups[0].items
      }, this.renderMap())
    })
    .catch(error => {
      console.log("ERROR!! " + error)
    })

  initMap = () => {
    var map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  }

  render() {
    return (
      <main>
        <div id="map"></div>
      </main>
    )
  }
}

function loadScript(url) {
  var index  = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default App;


loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCkqzhknCSc2mV6evpPKPtLzNZVs-OEs4M&callback=initMap")