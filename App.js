import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './constants/routes';
import HomeScreen from './screens/Home/HomeScreen';

const App = () => {
  const navigationRef = useRef();
  const Stack = createNativeStackNavigator();

  return(
    <NavigationContainer
      ref={navigationRef}

    >
      <Stack.Navigator initialRouteName={routes.MAIN} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={routes.MAIN} component={HomeScreen}/>
        {/* <Stack.Screen name={routes.ADD_CRYPTO} component={}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
};


export default App;
