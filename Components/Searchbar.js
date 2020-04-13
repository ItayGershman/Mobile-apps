import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import API_KEY from "../data";

export default function Search(props) {
  const [text, setText] = useState("");
  const getImages = async () => {

    const data = await fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${text}&image_type=photo`
    )
      .then((response) => response.json())
      .then((json) => {
        return json.hits;
      })
      .catch((error) => {
        alert(error);
      });
    props.searchImage(data);
    return;
  };

  return (
    <View style={styles.searchBar}>
      <Feather name="search" size={14} style={styles.searchIcon} />
      <TextInput
        placeholder={"Search"}
        style={styles.search}
        onChangeText={(text) => setText(text)}
        defaultValue={text}
        returnKeyType="search"
        clearButtonMode="while-editing"
        onSubmitEditing={() => getImages()}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
    height: "7%",
    backgroundColor: "white",
  },
  searchIcon: {
    backgroundColor: "white",
    color: "gray",
  },
  search: {
    backgroundColor: "white",
    width: "90%",
  },
});
