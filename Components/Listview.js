import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableHighlight,
  Image,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

export default function List(props) {
  return (
    <View>
      {props.images.map((img) => {
        return (
          <View style={styles.container}>
            <TouchableHighlight
              onPress={() => props.navigation.navigate("Image", { img: img })}
            >
              <Image
                source={{ uri: img.userImageURL }}
                style={styles.box}
                PlaceholderContent={<ActivityIndicator />}
              />
            </TouchableHighlight>
            <View style={styles.imgContainer}>
              <View>
                <Text style={{ fontSize: 20 }}>{img.user}</Text>
              </View>
              <View style={styles.info}>
                <AntDesign name="eye" size={18} color="black" />
                <Text> {img.views} </Text>
                <AntDesign name="like1" size={18} color="black" />
                <Text> {img.likes} </Text>
              </View>
            </View>
            <View style={styles.line}></View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 5,
    marginTop: 5,
  },
  info: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  line: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    width: "100%",
    marginTop: 5,
  },
  imgContainer: {
    paddingLeft: 20,
    justifyContent: "space-evenly",
  },
});
