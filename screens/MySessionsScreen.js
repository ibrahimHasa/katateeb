
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from "react-native";

const sessionsURL = "https://katateeb-test.roqay.solutions/api/v2/get-sessions";

const MySessionsScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(sessionsURL)
      .then((response) => response.json())
      .then((json) => setData(json.session_type))
      .catch((error) => alert(error))
      .finally(setLoading(false));
  });
  return (
    <SafeAreaView>
      {isLoading ? (  
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtras={({ id }, index) => id}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
      )}
    </SafeAreaView>
  );
};

export default MySessionsScreen;

const styles = StyleSheet.create({});
