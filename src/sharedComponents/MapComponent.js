import React from "react";
import GoogleMapReact from "google-map-react";
import start_point_icon from "../assets/images/start_point_icon.svg"
import end_point_icon from "../assets/images/end_point_icon.svg"
import pickup_point_icon from "../assets/images/pickup_point_icon.svg"
import bus_icon from "../assets/images/bus_icon.svg"
import bus_stop_icon from "../assets/images/bus_stop_icon.svg"

const MapComponent = () => {

  const defaultProps = {
    center: {
      lat: 19.143683,

      lng: 77.314136,
    },

    zoom: 11,
  };
  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  
  return (
    <div>
      <div className="google-map">
        <div className="map-main" >
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "",
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={19.887288}
              lng={75.368412}
              text="My Marker"
            />
          </GoogleMapReact>
          <div className="map-bottom-wrapper">
            <div className="map-location-icons">
              <img src={start_point_icon} alt="" />
              <p>Start Point</p>
            </div>
            <div className="map-location-icons">
              <img src={end_point_icon} alt="" />
              <p>End Point</p>
            </div>
            <div className="map-location-icons">
              <img src={pickup_point_icon} alt="" />
              <p>Your Pickup Point</p>
            </div>
            <div className="map-location-icons">
              <img src={bus_icon} alt="" />
              <p>Bus</p>
            </div>
            <div className="map-location-icons">
              <img src={bus_stop_icon} alt="" />
              <p>Bus Stops</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
