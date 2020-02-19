import React from 'react'
import { Text } from 'react-native'

// Estilização da tab
import Icon from 'react-native-vector-icons/MaterialIcons'
Icon.loadFont();

const Itens = {
    // Modularizando texto da label.
    textoLabel: (focado, rota) => {
        let txtLabel;

        if (rota.name === 'Home')
            txtLabel = <Text style={[focado ? { color: 'white' } : null]}>Home</Text>

        if (rota.name === 'Settings')
            txtLabel = <Text style={[focado ? { color: 'white' } : null]}>Settings</Text>

        return txtLabel;
    },

    // Modularizando texto da label.
    iconeLabel: (rota) => {
        let icone;

        if (rota.name === 'Home')
            icone = <Icon name='info' color='white' />

        if (rota.name === 'Settings')
            icone = <Icon name='settings' color='white' />

        return icone;
    },
    tabBarOptions: {
        activeTintColor: '#F8F8F8',
        inactiveTintColor: '#586589',
        style: { backgroundColor: 'blue' },
        tabStyle: { flex: 1, justifyContent: 'center', alignItems: 'center' }
    }
};

export default Itens;