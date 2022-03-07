import { Image, ScrollView, StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import appStyles from "../styles/styles";
import formatRelative from "date-fns/formatRelative";
import { useNavigation } from "@react-navigation/native";
import {useEffect} from "react";
import ContactItem from './../components/ContactItems';

const Contacts = () => {

    const navigation = useNavigation();

    useEffect(() =>{
        navigation.setOptions({
            title: "Mes contacts",
            headerRight: () => <Button title="+ Ajouter" />,
        });
    },[]);

  return (
    <ScrollView style={{ padding: 10 }}>
      <ContactItem
        avatar="http://placehold.it/32x32"
        name="Magali Pernin"
        last={1636036315543}
   
     id="unIdAuHasard"
      />
      <ContactItem
        avatar="http://placehold.it/32x32"
        name="Joseph Durand"
        last={1636036315543}
        id="unIdAuHasard"
      />
      <ContactItem
        avatar="http://placehold.it/32x32"
        name="Elise Chamla"
        last={1636036315543}
        id="unIdAuHasard"
      />
    </ScrollView>
  );
};

export default Contacts;