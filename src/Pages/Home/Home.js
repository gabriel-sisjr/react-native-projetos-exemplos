import React, { useEffect, useState } from 'react';

// Manipulador de mapa.
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

// Import do componente de direção.
import MapDirection from "../../Components/MapDirection";

// Obter a geoLocalização.
import Geolocation from 'react-native-geolocation-service'
import { ActivityIndicator, PermissionsAndroid } from 'react-native';

export default function Home() {
    // "Variaveis"
    const [localizacaoInicial, setLocalizacaoInicial] = useState(null);
    const [permitido, setPermitido] = useState(false);

    // Referencia do componente.
    const [refMapView, setRefMapView] = useState(null);

    async function isPermitido() {
        // Requisitando as permissoes
        const permitido = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
        // Setando o novo valor da permissão, para que o componente seja renderizado novamente, após o consentimento
        setPermitido(permitido);
        return permitido;
    }

    useEffect(() => {
        // Fazendo a solicitação da permissão.
        isPermitido();
        if (permitido) {
            Geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
                setLocalizacaoInicial({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04
                });
            },
                (err) => {
                    console.log(err.code, err.message)
                }, { enableHighAccuracy: true, forceRequestLocation: true, timeout: 15000, maximumAge: 10000 })
        }
    }, [permitido]);

    if (!localizacaoInicial)
        return <ActivityIndicator style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} size='large' />

    return (
        <MapView
            style={{ flex: 1 }}
            provider={PROVIDER_GOOGLE}
            initialRegion={localizacaoInicial}
            ref={el => setRefMapView(el)}
        >
            <MapDirection {...{
                origem: { latitude: localizacaoInicial.latitude, longitude: localizacaoInicial.longitude },
                destino: { latitude: -10.6878185, longitude: -37.4243124 },
                refMapView
            }} />
        </MapView>
    );
}
