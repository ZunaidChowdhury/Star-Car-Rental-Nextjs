"use client"

import React, { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'


const Map = () => {

    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const initMap = async () => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
                version: 'weekly'
            });

            const { Map } = await loader.importLibrary('maps');

            // init marker
            const { Marker } = await loader.importLibrary('marker') as google.maps.MarkerLibrary;

            const position = {
                lat: 24.0675141842121,
                lng: 90.8996733010442
            }

            // map options
            const mapOptions: google.maps.MapOptions = {
                center: position,
                zoom: 17,
                mapId: 'Star-Car-Rental-Map-125454'
            }

            // set up the map
            const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

            // put a marker
            const marker = new Marker({
                map: map,
                position: position
            });
        }

        initMap();

    }, [])

    return (
        <div className='w-full h-[600px]' ref={mapRef} />
    )
}

export default Map