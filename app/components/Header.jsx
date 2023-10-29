import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import colors from "../shared/colors";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
      <View>
        <TextInput style={styles.searchBar} placeholder="Search" />
      </View>
      <Image
        style={styles.userImage}
        source={require("../../assets/placeholder.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  logo: {
    width: 50,
    height: 50,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: colors.black,
    padding: 4,
    borderRadius: 50,
    paddingStart: 10,
    width: wp(60),
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
});

export default Header;
