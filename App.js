import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Here's a picture of my cats</Text>
        <Image
          style={{ width: 300, height: 300 }}
          source={require("./images/shadow-lola.jpg")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
