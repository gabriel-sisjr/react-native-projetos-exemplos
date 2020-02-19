import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Import das configs da tab
import Itens from './Components/TabBar'

// Paginas
import Home from './Pages/Home/Home'
import Settings from './Pages/Settings/Settings'

export default function Routes() {
    const TabNavigator = createBottomTabNavigator();

    return (
        <NavigationContainer >
            <TabNavigator.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarIcon: () => Itens.iconeLabel(route),
                    tabBarLabel: ({ focused }) => Itens.textoLabel(focused, route)
                })}
                tabBarOptions={Itens.tabBarOptions}
            >
                <TabNavigator.Screen name="Home" component={Home} />
                <TabNavigator.Screen name="Settings" component={Settings} />
            </TabNavigator.Navigator>
        </NavigationContainer>
    );
}
