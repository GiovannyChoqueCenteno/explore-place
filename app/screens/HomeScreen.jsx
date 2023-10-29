import { View, Text, StatusBar } from "react-native";
import React from "react";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import GoogleMapView from "../components/home/GoogleMapView";

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{
        padding: 20,
      }}
    >
      <Header />
      <GoogleMapView />
    </SafeAreaView>
  );
};

export default HomeScreen;
