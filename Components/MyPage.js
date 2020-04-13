import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { AsyncStorage } from "react-native";
import Grid from "./Gridview";

export default function MyPage(props) {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let imgArr = [];
  useEffect(() => {
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, stores) => {
        stores.map((result, i, store) => {
          let value = store[i][1];
          imgArr.push(JSON.parse(value));
        });
        setImages(...images, imgArr);
      });
    });
  }, []);

  return (
    <View style={{ height: "100%" }}>
      {images.length === 0 ? (
        <View />
      ) : (
        (setTimeout(() => {
          setIsLoading(false);
        }, 1000),
        isLoading ? (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          <Grid images={images} navigation={props.navigation} />
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  loader: {
    height: "100%",
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
});
