import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import React from 'react';
import  appStyles from './../styles/styles';

const Login = () => {
    return ( 
        <View style={appStyles.container}>
            <TextInput style={appStyles.input} placeholder="Adresse email"/> 
            <TextInput style={appStyles.input} placeholder="Mot de passe"/>
            <Button style={appStyles.register} title="Connexion"/>

        </View>
     );
}


 
export default Login;