import React from "react";
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import { Dropdown } from "react-native-material-dropdown";

import backArrowImg from "../assets/images/arrow-back.png";
import arrow from "../assets/images/arrow.png";
import { CustomDropdown } from "../components/CustomDropdown";

export const OrderDetails = ({ navigation }) => {
  let data = [
    {
      value: "Активен",
    },
    {
      value: "Завершен",
    },
  ];
  return (
    <SafeAreaView>
      <ScrollView>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{ ...styles.row, ...styles.fdrow }}
        >
          <Image source={backArrowImg} style={styles.arrow} />
          <Text style={styles.link}>Заказ №123456</Text>
        </TouchableOpacity>
        <Dropdown
          label="Favorite Fruit"
          data={data}
          value="Активен"
          animationDuration={0}
          pickerStyle={styles.picker}
          renderBase={({ value }) => {
            return <CustomDropdown value={value} />;
          }}
        />
        <View style={{ ...styles.ml25, marginTop: 10, marginBottom: 30 }}>
          <Text style={{ fontFamily: "Roboto-Medium" }}>Адресс доставки: </Text>
          <Text style={{ fontFamily: "Roboto-Medium" }}>
            ул. Вишёвая, д. 15, кв. 40
          </Text>
        </View>
        <View style={{ ...styles.fdrow, ...styles.flexRow }}>
          <View>
            <Text style={{ marginBottom: 10, fontFamily: "Roboto-Medium" }}>
              Номер телефона:
            </Text>
            <Text style={{ marginBottom: 10, fontFamily: "Roboto-Medium" }}>
              +380 123 456 789
            </Text>
          </View>
          <View style={styles.ml100}>
            <Text style={{ marginBottom: 10, fontFamily: "Roboto-Medium" }}>
              Имя:
            </Text>
            <Text style={{ marginBottom: 10, fontFamily: "Roboto-Medium" }}>
              Пётр
            </Text>
          </View>
        </View>
        <View style={{ ...styles.fdrow, ...styles.ml25 }}>
          <View>
            <Text style={{ fontFamily: "Roboto-Medium" }}>Сумма заказа:</Text>
            <View style={styles.highlighted}>
              <Text style={{ fontFamily: "Roboto-Medium" }}>600 грн</Text>
            </View>
            <Text style={{ fontFamily: "Roboto-Medium" }}>
              +доставка 40 грн
            </Text>
          </View>
          <View style={{ ...styles.ml100 }}>
            <Text style={{ fontFamily: "Roboto-Medium" }}>Сдача с:</Text>
            <View style={styles.highlighted}>
              <Text style={{ fontFamily: "Roboto-Medium" }}>1000 грн</Text>
            </View>
          </View>
        </View>
        <View style={{ ...styles.fdrow, ...styles.ml25, marginTop: 30 }}>
          <View>
            <Text style={{ fontFamily: "Roboto-Medium" }}>Итого:</Text>
            <View style={styles.highlighted}>
              <Text style={{ fontFamily: "Roboto-Medium" }}>640 грн</Text>
            </View>
          </View>
          <View style={{ ...styles.ml100 }}>
            <Text style={{ fontFamily: "Roboto-Medium" }}>Способ оплаты:</Text>
            <View style={styles.highlighted}>
              <Text style={{ fontFamily: "Roboto-Medium" }}>Наличными</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("ProductsList")}
          style={{
            ...styles.fdrow,
            ...styles.ml25,
            ...styles.highlighted,
            width: "65%",
          }}
        >
          <Text style={{ fontFamily: "Roboto-Medium" }}>Список товаров</Text>
          <Image source={arrow} style={styles.image} />
        </TouchableOpacity>
        <Text
          style={{
            ...styles.ml25,
            fontFamily: "Roboto-Medium",
            marginTop: 10,
            color: "grey",
            marginBottom: 10,
          }}
        >
          Время доставки:{" "}
          <Text style={{ fontSize: 24, color: "#000" }}>17:20</Text>
        </Text>
        <Text style={{ ...styles.ml25, fontFamily: "Roboto-Medium" }}>
          Сообщение клиента:{" "}
        </Text>
        <View
          style={{
            ...styles.ml25,
            ...styles.highlighted,
            paddingBottom: 100,
            marginRight: 20,
          }}
        >
          <Text style={{ fontFamily: "Roboto-Medium" }}>Привезите тёплым!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  link: {
    fontSize: 27,
    color: "#000",
    fontFamily: "Roboto-Medium",
  },
  fdrow: {
    flexDirection: "row",
    alignItems: "center",
  },
  ml25: {
    marginLeft: 25,
  },
  ml100: {
    marginLeft: 100,
  },
  row: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 15,
  },
  flexRow: {
    marginLeft: 25,
  },
  arrow: {
    marginLeft: 20,
    marginRight: 20,
    height: 25,
    width: 25,
  },
  highlighted: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    width: 15,
    height: 15,
    marginLeft: 75,
  },
  picker: {
    borderRadius: 15,
    backgroundColor: "#fff",
    width: "65%",
    marginLeft: 18,
    marginTop: 27,
  },
});
