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
            txtLabel = <Text style={[focado ? { color: 'white', marginBottom: '2%' } : { marginBottom: '2%' }]}>Home</Text>

        if (rota.name === 'Settings')
            txtLabel = <Text style={[focado ? { color: 'white', marginBottom: '2%' } : { marginBottom: '2%' }]}>Settings</Text>

        return txtLabel;
    },

    // Modularizando texto da label.
    iconeLabel: (rota) => {
        let icone;

        switch (rota.name) {
            case 'Home':
                icone = <Icon name='info' color='white' />
                break;

            case 'Settings':
                icone = <Icon name='settings' color='white' />
                break;

            default:
                break;
        }

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