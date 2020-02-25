import React, { useContext } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Contexto } from '../../Context'

export default function Home() {
    const { signOut } = React.useContext(Contexto);
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Home!!</Text>
            <TouchableOpacity onPress={() => signOut()}>
                <Text>Sair</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
