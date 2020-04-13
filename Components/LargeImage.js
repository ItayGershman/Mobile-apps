import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Image,
  TouchableHighlight,
} from "react-native";
import { AsyncStorage } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

export default function LargeImage(props) {
  const [item, setItem] = useState(null);
  useEffect(() => {
    AsyncStorage.getItem(props.route.params.img.user, (err, result) => {
      setItem(result);
      if (err) alert(err);
    });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TouchableHighlight>
          <Image
            source={{ uri: props.route.params.img.userImageURL }}
            style={{ width: "100%", height: "100%" }}
            PlaceholderContent={<ActivityIndicator />}
          />
        </TouchableHighlight>
      </View>
      {item === null ? (
        <FontAwesome
          name="heart-o"
          size={60}
          color="#DC143C"
          style={styles.heart}
          onPress={() => {
            AsyncStorage.setItem(
              props.route.params.img.user,
              JSON.stringify(props.route.params.img)
            );
            setItem(props.route.params.img);
          }}
        />
      ) : (
        <View />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingTop: 40,
  },
  box: {
    flex: 4,
  },
  heart: {
    flex: 1,
    alignSelf: "center",
  },
});
