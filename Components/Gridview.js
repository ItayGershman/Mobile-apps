import React from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Image,
  TouchableHighlight,
} from "react-native";

export default function Grid(props) {
  return (
    <View style={styles.container}>
      {props.images.map((img) => {
        return (
          <View style={styles.box}>
            <TouchableHighlight
              onPress={() => props.navigation.navigate("Image", { img: img })}
            >
              <Image
                source={{ uri: img.userImageURL }}
                style={{ width: 120, height: 120 }}
                PlaceholderContent={<ActivityIndicator />}
              />
            </TouchableHighlight>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#ADD8E6", //Can make it pixaby logo as background....
    marginLeft: 4,
    marginTop: 4,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
