import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './main';
import NativeAd from './src/NativeAds';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="React Native Facebook Ads" component={Main} />
        <Stack.Screen name="React" component={NativeAd} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
