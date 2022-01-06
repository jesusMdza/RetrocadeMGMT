import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, SpaceMono_400Regular, SpaceMono_700Bold } from '@expo-google-fonts/space-mono';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';

import Home from './src/screens/Home/Home';
import Scan from './src/screens/Scan/Scan';
import fakeUserData from './src/data/User.json';

const Stack = createNativeStackNavigator();

const App = () => {
  const [userData, setUserData] = useState([]);

  let [fontsLoaded] = useFonts({
    SpaceMono_400Regular,
    SpaceMono_700Bold,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    let userData;

    userData = Object.keys(fakeUserData).map(key => { return fakeUserData[key] });

    setUserData(userData);
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator 
          tabBar={props => <NavigationBar {...props} />}
          screenOptions={({ route }) => ({
            orientation: 'default',
            headerShown: false,
            tabBarStyle: { background: 'transparent', backgroundColor: '#0f1421', position: 'absolute', bottom: 10, border: 'none', }
          })}
        >
          <Stack.Screen name="Home">
            { props => <Home {...props} userData={userData} /> }
          </Stack.Screen>
          <Stack.Screen name="Scan">
            { props => <Scan {...props} userData={userData} /> }
          </Stack.Screen> 
        </Stack.Navigator>
        <StatusBar style="light" />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
