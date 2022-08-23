import React, { useEffect } from 'react'
import '../styles/leafleat-container.css';
import { MapContainer, TileLayer,LayersControl } from 'react-leaflet'
import Location from './Location';

function MapLeaflet({center = [50.15,3.35]}) {
    const { BaseLayer } = LayersControl;

    return (
    <>
        <MapContainer 
        center={center} zoom={9} scrollWheelZoom={true} doubleClickZoom={false}>
            <LayersControl position="topright">
                <BaseLayer checked name="Open Street Map">
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
                    url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
                    />;
                </BaseLayer>
                <BaseLayer name="Vue satellite">
                    <TileLayer
                    attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                    url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
                    />;
                </BaseLayer>
                <BaseLayer name="Mode Nuit">
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url='https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
                    />;
                </BaseLayer>
            </LayersControl>
            <Location />
        </MapContainer>
    </>
  )
};

export default MapLeaflet;