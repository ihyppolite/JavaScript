import { View, Text, ActivityIndicator, TextInput, ScrollView } from 'react-native';
import React from 'react';
import ContactItem from './../components/ContactItems';
import styles from "../styles/styles";
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

const AddContact = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            title:"Ajouter un contact",
            headerTitleAlign: "center",
        });
    }, []);

    return ( 
        <View style={{ padding: 10}}>
            <TextInput style={styles.input}placeholder="Rechercher un contact"/>
            <ScrollView>
                    <ContactItem
                        avatar="http://placehold.it/32x32"
                        name="Magali Pernin"
                        id="unIdAuHasard"
                    />
                    <ContactItem
                        avatar="http://placehold.it/32x32"
                        name="Magali Durand"
                        id="unIdAuHasard"
                    />
            </ScrollView>
            <ActivityIndicator color="blue" size="large"/>
        </View>
     );
}
 
export default AddContact;