import {useMemo} from 'react';
import { GoogleMap,useLoadScript,MarkerF} from '@react-google-maps/api';
import './Map.css';


export default function RenderMap(){
 
    const {isLoaded} = useLoadScript({
    googleMapsApiKey:process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
});
   
if(!isLoaded)return <div className='loading'>Loading</div>;


    return (
     <Map/>
     )
  }

  function Map(){

    return (
    <GoogleMap 
    zoom={4} 
    center={{lat:36.806389,lng:10.181667}} 
    mapContainerClassName="mapContainer">
    <MarkerF position={{lat:36.806389,lng:10.181667}} key=""/>
    <MarkerF position={{lat:36.200000,lng:10.181667}} key=""/>   
    <MarkerF position={{lat:37.983810,lng:23.727539}} key=""/> 
    </GoogleMap>
    );
    
 } 

