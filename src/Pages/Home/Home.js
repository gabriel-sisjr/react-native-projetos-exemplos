import React from 'react';
import { SafeAreaView, Text } from 'react-native';

export default function Home() {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Home!!</Text>
        </SafeAreaView>
    );
}
