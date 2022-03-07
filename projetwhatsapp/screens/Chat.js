import { View, Text, ScrollView, TextInput } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import appStyles from "../styles/styles"
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';


const Chat = () => {
    
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            title: "Magali Pernin",
            headerTitleAlign: "center",
        });
    });

    return ( 
        <View style={styles.container}>
            <ScrollView >
                <View style={[styles.message, styles.other]}>
                    <Text style={styles.content}>
                        Alors tout va bien?
                    </Text>
                    <Text style={styles.date}>
                        Hier à 22:00
                    </Text>
                </View>
                <View style={[styles.message, styles.me]}>
                    <Text style={styles.content}>
                        Yes tranquile et toi?
                    </Text>
                    <Text style={styles.date}>
                        Hier à 22:10
                    </Text>
                </View>
                <View style={[styles.message, styles.other]}>
                    <Text style={styles.content}>
                        Bien bien
                    </Text>
                    <Text style={styles.date}>
                        Hier à 22:13
                    </Text>
                </View> 
            </ScrollView>
            <TextInput style={appStyles.input} placeholder="Tapez voter message..." />
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        padding:10,
        justifyContent: "space-between",
        flex: 1,
    },
    content:{
        fontSize:16,
    },
    date: {
        color:"grey",
    },
    message: {
        padding: 10,
        borderRadius: 10,
        marginBottom: 10
    },
    me: {
        backgroundColor:"lightblue",
        alignSelf: "flex-end",
    },
    other: {
        backgroundColor:"lightgrey",
        alignSelf: "flex-start",
    }
})
 
export default Chat;