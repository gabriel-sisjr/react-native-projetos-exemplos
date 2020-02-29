import React from 'react';
import { Dimensions } from 'react-native';
import { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

// Key.
const API_KEY = 'API_KEY_AQUI';

export default function MapDirection({ origem, destino, refMapView }) {
    const { width, height } = Dimensions.get('window');

    return (
        <>
            <Marker coordinate={origem} />
            <MapViewDirections
                origin={origem}
                destination={destino}
                apikey={API_KEY}
                strokeWidth={4}
                onReady={result => {
                    refMapView.fitToCoordinates(result.coordinates, {
                        edgePadding: {
                            right: (width / 5),
                            bottom: (height / 5),
                            left: (width / 5),
                            top: (height / 5),
                        }
                    });
                }}
            />
            <Marker coordinate={destino} pinColor='green' />
        </>
    );
}
