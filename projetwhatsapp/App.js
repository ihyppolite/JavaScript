import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Register from './screens/Register';
import Contacts from './screens/Contacts';
import { NavigationContainer } from '@react-navigation/native';
import AddContact from './screens/AddContact';
import Chat from './screens/Chat';
import Login from './screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { initializeFirebase } from './firebase/initialize';
import Loading from './screens/Loading';

initializeFirebase();

export default function App() {

  const Stack = createNativeStackNavigator();
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Loading" component={Loading}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Chat" component={Chat}/>
        <Stack.Screen name="AddContact" component={AddContact}/>
        <Stack.Screen name="Contacts" component={Contacts}/>
        <Stack.Screen name="Login" component={Login} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
