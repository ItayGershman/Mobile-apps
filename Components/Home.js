import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  ScrollView,
  Text,
} from "react-native";
import { ButtonGroup } from "react-native-elements";

import Search from "./Searchbar";
import Grid from "./Gridview";
import List from "./Listview";
import API_KEY from "../data";

export default function Home({ navigation }) {
  const buttons = ["Grid View", "List View"];
  const [view, setView] = useState(0);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://pixabay.com/api/?key=${API_KEY}&q=nature&image_type=photo`
      )
        .then((response) => response.json())
        .then((json) => {
          return json.hits;
        })
        .catch((error) => {
          alert(error);
        });
      setImages(data);
    };
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);

  const searchImage = (result) => {
    if (result != null) {
      setImages(result);
      setIsLoading(true);
    } else setImages((prevImages) => []);
  };

  return (
    <View>
      <View style={{ height: "100%" }}>
        <Search searchImage={searchImage}></Search>
        <ButtonGroup
          buttons={buttons}
          textStyle={{ color: "black" }}
          selectedIndex={view}
          containerStyle={{
            marginLeft: 0,
            marginTop: 0,
            width: "100%",
            borderColor: "#2089dc",
          }}
          selectedTextStyle={{ color: "white" }}
          onPress={(selected) => setView(selected)}
        />
        {images.length !== 0 ? (
          (setTimeout(() => {
            setIsLoading(false);
          }, 1000),
          isLoading ? (
            <View style={styles.emptyQuery}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          ) : (
            <ScrollView>
              {view ? (
                <List images={images} navigation={navigation} />
              ) : (
                <Grid images={images} navigation={navigation} />
              )}
            </ScrollView>
          ))
        ) : (
          <View style={styles.emptyQuery}>
            {
              (setTimeout(() => {
                setIsLoading(false);
              }, 2000),
              isLoading ? (
                <View style={styles.emptyQuery}>
                  <ActivityIndicator size="large" color="#0000ff" />
                </View>
              ) : (
                <Text>No results were found</Text>
              ))
            }
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyQuery: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
});
