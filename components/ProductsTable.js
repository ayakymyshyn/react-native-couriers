import React from "react";
import { Text, StyleSheet, View } from "react-native";

export const ProductsTable = ({ items, styles }) => {
  return items.map((item, i) => <Row data={item} rowStyle={styles} key={i} />);
};

export const Row = ({ data, rowStyle }) => (
  <View style={styles.container}>
    {data &&
      data.map((item, i) => (
        <Text style={rowStyle} key={i}>
          {item.toString()}
        </Text>
      ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
