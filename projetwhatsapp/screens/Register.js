import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React from 'react';
import  appStyles from './../styles/styles';
import { useNavigation } from '@react-navigation/native';
import { useState, useRef } from 'react';
import { register } from './../firebase/auth';



const Register = () => {
        const navigation = useNavigation();
        const passwordRef = useRef();
        const usernameRef = useRef();


        const [registration, setRegistration] = useState({
            email: "",
            password: "",
            username: "",
        });
        const handleSubmit = async() => {
            try {
                await register(registration)
            } catch (e) {
                alert("Problème");
                console.log(registration)
            }
        }

    return ( 
        <View style={appStyles.container}>
            <TextInput 
                
                style={appStyles.input} 
                placeholder="Adresse email" 
                keyboardtype="email-address"
                value={registration.email}
                onChangeText={(text) => setRegistration({...registration, email:text})}
                onSubmitEditing={() => passwordRef.current.focus()}
            />
            <TextInput 
                style={appStyles.input}
                ref={passwordRef} 
                placeholder="Mot de passe" 
                secureTextEntry={true}
                value={registration.password}
                onChangeText={(text) => setRegistration({...registration, password:text})}
                onSubmitEditing={() => usernameRef.current.focus()}
            />
            <TextInput style={appStyles.input}
                ref={usernameRef} 
                placeholder="Nom d’utilisateur"
                value={registration.username}
                onChangeText={(text) => setRegistration({...registration, username:text})}
                onSubmitEditing={handleSubmit}
            />
            <TextInput style={appStyles.input} placeholder="Photo de profil"/>
            <Button title="Créer un compte" 
                onPress={handleSubmit}
            />
            <View style={appStyles.register}>
                <Text>Vous avez Déjà un compte </Text>
                <Text style={appStyles.registerLink}
                    onPress={() => navigation.navigate("Login")}
                    >Connectez Vous!</Text>
            </View>
        </View>
     );
}
 
export default Register;