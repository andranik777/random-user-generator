import React, { Component } from 'react';
import dotenv from 'dotenv'
import GoogleMapReact from 'google-map-react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';



const AnyReactComponent = ({ text }) => <div>{text}</div>;
dotenv.config()

// process.env.REACT_APP_API_KEY
//note: code formatted for ES6 here
const style = {
  width: '60%',
  height: '50%'
}

const containerStyle = {
  position: 'relative',  
  width: '50%',
  height: '50%'
}

export class MapContainer extends Component {
  constructor (props){
    super(props)
  }
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    mapCenter : {
      lat : this.props.data.address.geo.latitude,
      lng : this.props.data.address.geo.longitude
    }
  };
 
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
 
  render() {
    return (
      <Map google={this.props.google}
      style={style}
 
          initialCenter={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng
          }}
          zoom={8}
          onClick={this.onMapClicked}
          center ={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng
          }}
      >
        <Marker 
        position={{
          lat: this.state.mapCenter.lat,
          lng: this.state.mapCenter.lng
        }}
        />
 
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_API_KEY)
})(MapContainer)