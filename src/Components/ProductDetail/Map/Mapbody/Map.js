import React, {useLayoutEffect, useState } from "react";
import GoogleMapReact from 'google-map-react';
import Marker from '../Marker/Marker';
import './Map.css';
import { PersonPinCircle } from "@material-ui/icons";

const mapContainerStyle = {
  position: "absolute",
  zIndex:'0',
  width: "100%",
  height: "100%"
};

export default function Map(){

  //todo: the center of the map


  const defaultProps = {
    center: {
        lat: 34.725587,
        lng: 36.720798
    },
    zoom: 14
  };
  

  //todo : User's current location

  //lat:34.725587,lng:36.720798 Albaath

  const [cords,setcords]=useState({});
  //console.log("latitude  "+cords.lat+"  longitude  "+cords.lng)

  useLayoutEffect(()=>{

      if (!navigator.geolocation) {
        console.log('Geolocation is not supported by your browser');
      }
      else {

        console.log('Locating...');
        navigator.geolocation.getCurrentPosition(

          (position) => {
          //console.log(position.coords.latitude+" -------- " +position.coords.longitude)  
          setcords({lat:position.coords.latitude,lng:position.coords.longitude});
          },

          (error) => {
            console.log(error.message.toString());
          },
          {
            showLocationDialog: true,
            enableHighAccuracy: true,
            timeout: 30000,
            maximumAge: 0
          }

        );
      }

  },[]);



  return (
    // Important! Always set the container height explicitly
    <div style={{position:'relative',zIndex:'0',width: "1000px",minHeight: "100vh",marginLeft:'20px'}}>


            <GoogleMapReact
              mapContainerStyle={mapContainerStyle}
              bootstrapURLKeys={{ key: "AIzaSyAAtr_RG74VIeGTUDqnORY_NHTpD8Bnz3I" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >

              <Marker lat={34.725587} lng={36.720798}/>
              <Marker lat={34.705587} lng={36.720798} color='g'/>
              <Marker lat={34.725587} lng={36.700798} color='o'/>
              <Marker lat={34.720587} lng={36.720798} color='r'/>
              <Marker lat={34.725587} lng={36.723798}/>
              <Marker lat={34.710500} lng={36.720798}/>
              <Marker lat={34.725587} lng={36.720000}/>

              
              <PersonPinCircle style={{fontSize:'45px',color:'#0E1D51'}} lat={cords.lat} lng={cords.lng}/>


            </GoogleMapReact>



            <div className="marker-color">
                Location's Color

                <div>
                    <button type="button" style={{backgroundColor:'orange'}}/>
                    The closest
                </div>

                <div>
                    <button type="button" style={{backgroundColor:'green'}}/>
                    The cheapest
                </div>

                <div>
                    <button type="button" style={{backgroundColor:'red'}}/>
                    With offer
                </div>

                <div>
                    <button type="button" style={{backgroundColor:'blue'}}/>
                    Others
                </div>

            </div>



    </div>

  );
}