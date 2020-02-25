import React, { useContext } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { Contexto } from '../../Context'

export default function Login({ navigation }) {
  const { signIn } = useContext(Contexto);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        style={{ borderWidth: 1, width: 120, height: 50, margin: '1%', alignItems: 'center', justifyContent: 'center' }}
        onPress={() => { signIn({ username: 'username', password: 'password' }) }}>
        <Text>Entrar</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={{ borderWidth: 1, width: 120, height: 50, margin: '1%', alignItems: 'center', justifyContent: 'center' }}
        onPress={() => { navigation.navigate('RecuperarSenha') }}>
        <Text>Recuperar Senha</Text>
      </TouchableOpacity>
    </View>
  );
}
