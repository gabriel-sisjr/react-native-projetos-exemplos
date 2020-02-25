import 'react-native-gesture-handler';
import React, { useEffect, useMemo, useReducer } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';

// Paginas
import Home from './Pages/Home/Home'
import Settings from './Pages/Settings/Settings'
import Login from './Pages/Login'
import RecuperarSenha from './Pages/RecuperarSenha'

// Storage
import AsyncStorage from '@react-native-community/async-storage';

// Contexto do login.
import { ContextProvider } from './Context'

export default function Routes() {
    // Navegações
    const TabNavigator = createBottomTabNavigator();
    const Stack = createStackNavigator();

    // Inicio da autenticação.
    const [state, dispatch] = useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'RESTORE_TOKEN':
                    return {
                        ...prevState,
                        userToken: action.token,
                        isLoading: false,
                    };
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isSignout: false,
                        userToken: action.token,
                    };
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isSignout: true,
                        userToken: null,
                    };
            }
        },
        {
            isLoading: true,
            isSignout: false,
            userToken: null,
        }
    );

    useEffect(() => {
        // Obtem o token do armazenamento e entao navega para o local apropriado.
        const bootstrapAsync = async () => {
            let userToken;

            // Recuperando o token.
            try {
                /**
                 * Apos restaurar o token, é necessario realizar uma validação, por motivos de segurança.
                 * Isso irá realizar a troca de telas baseada no estado da autenticação.
                 */
                userToken = await AsyncStorage.getItem('userToken');
            } catch (e) {
                // Caso haja falha na obtenção do Token
            }

            /**
             * Realizando a transição efetivamente.
             * P.S. Pode-se utilizar um componente de loading, enquanto obtem o token, para deixar mais bonito.
             */
            dispatch({ type: 'RESTORE_TOKEN', token: userToken });
        };

        bootstrapAsync();
    }, []);

    const authContext = useMemo(
        () => ({
            signIn: async data => {
                /**
                 * Em produção, enviamos dados para o servidor para realizar autenticação (login, senha) e recebemos um token.
                 * Esses dados sao recebidos em "data"
                 * Deve-se lançar erros, caso a autenticação falhe.
                 * Após recebermos o token, será persistido via AsyncStorage.
                 */

                // "dummy-auth-token" é o token (exemplo) que é obtido via servidor.
                await AsyncStorage.setItem('userToken', 'dummy-auth-token')

                // 
                dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
            },
            signOut: async () => {
                // Removendo o token.
                await AsyncStorage.removeItem('userToken');
                dispatch({ type: 'SIGN_OUT' })
            },
            signUp: async data => {
                /**
                 * Em produção, enviamos dados para o servidor para realizar o cadastro e recebemos um token.
                 * Esses dados sao recebidos em "data"
                 * Deve-se lançar erros, caso o cadastro falhe.
                 * Após recebermos o token, será persistido via AsyncStorage.
                 */

                // "dummy-auth-token" é o token (exemplo) que é obtido via servidor.
                dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
            },
        }), []);

    return (
        <ContextProvider value={authContext}>
            <NavigationContainer>
                {state.userToken == null ?
                    (
                        <Stack.Navigator>
                            <Stack.Screen name='Login' component={Login} />
                            <Stack.Screen name='RecuperarSenha' component={RecuperarSenha} />
                        </Stack.Navigator>
                    ) : (
                        <TabNavigator.Navigator>
                            <Stack.Screen name='Home' component={Home} />
                            <Stack.Screen name='Settings' component={Settings} />
                        </TabNavigator.Navigator>
                    )
                }
            </NavigationContainer>
        </ContextProvider>
    );
}
