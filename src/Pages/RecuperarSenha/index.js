import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';


export default function RecuperarSenha({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}
