import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.text}>Image Browser</Text>
      </View>
      <View style={{ marginLeft: 50 }}>
        <TouchableHighlight
          onPress={() => {
            navigation.navigate("MyPage", { navigation: navigation });
          }}
        >
          <FontAwesome name="heart-o" size={30} color="#DC143C" />
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginLeft: 80,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
