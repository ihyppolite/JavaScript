import React, { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Loading = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 40, marginBottom: 50 }}>WhatsApp 2.0</Text>
      <ActivityIndicator color="blue" size="large" />
      <Text style={{ fontSize: 20, marginTop: 50 }}>Chargement ...</Text>
    </View>
  );
};

export default Loading;