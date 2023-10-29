import { View, Text, StyleSheet } from "react-native";
import React from "react";
import TabNavigator from "./app/navigators/TabNavigator";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default App;
