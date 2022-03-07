import formatRelative from "date-fns/formatRelative";
import { StyleSheet, View, Image, Text } from 'react-native';
import  React, {useEffect} from 'react';

const ContactItem = ({ avatar, name, id, last=null }) => {
    return (
      <View style={styles.item}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
        <View style={styles.details}>
          <Text style={styles.contactName}>{name}</Text>
          {last !== null && (
            <Text style={styles.last}>{formatRelative(last, Date.now())}</Text>
        )}
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    item: {
      flexDirection: "row",
      alignItems: "center",
      borderBottomWidth: 2,
      borderBottomColor: "#ddd",
      paddingBottom: 10,
      paddingTop: 10,
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 50,
    },
    details: {
      flex: 1,
      marginLeft: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    contactName: {
      fontSize: 20,
      fontWeight: "bold",
    },
    last: {
      fontSize: 12,
      color: "grey",
    },
  });

  export default ContactItem