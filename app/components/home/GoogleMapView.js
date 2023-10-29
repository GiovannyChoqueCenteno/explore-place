import { View, Text } from "react-native";
import React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const GoogleMapView = () => {
  return (
    <MapView
      style={{
        width: wp(90),
        height: hp(23),
        borderRadius: 20,
      }}
      provider="google"
      showsUserLocation
    ></MapView>
  );
};

export default GoogleMapView;
