import React from "react";
import { Text, StyleSheet, SafeAreaView, ScrollView, View } from "react-native";
// libs
import { Dropdown } from "react-native-material-dropdown";
// styles and components
import { OrderRedirectLink } from "../components/OrderRedirectLink";
import { CustomDropdown } from "../components/CustomDropdown";
import { TextRow, TextRowHighlighted } from "../components/TextRow";
import { Wrapper, OrderDetailsText } from "../styles/OrderDetailsStyles";
// assets
import backArrowImg from "../assets/images/arrow-back.png";
import arrow from "../assets/images/arrow.png";

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
        <Wrapper>
          <OrderRedirectLink
            redirectTo="Home"
            leftImgSource={backArrowImg}
            leftImgStyles={styles.arrow}
            text="Заказ №123456"
            navigation={navigation}
          >
            <Text style={styles.link}>Заказ №123456</Text>
          </OrderRedirectLink>
          <Dropdown
            label="Change status"
            data={data}
            value="Активен"
            animationDuration={0}
            pickerStyle={styles.picker}
            renderBase={({ value }) => {
              return <CustomDropdown value={value} />;
            }}
          />
          <View style={{ marginTop: 10, marginBottom: 30 }}>
            <OrderDetailsText marginBottom={10}>
              Адресс доставки:{" "}
            </OrderDetailsText>
            <OrderDetailsText>ул. Вишёвая, д. 15, кв. 40</OrderDetailsText>
          </View>
          <TextRow
            leftSideHeading="Номер телефона:"
            leftSideData="+380 123 456 789"
            rightSideHeading="Имя:"
            rightSideData="Пётр"
            width="75%"
            bottomSpacing={20}
          />
          <TextRowHighlighted
            width="92%"
            leftSideHeading="Сумма заказа:"
            leftSideData="600 грн"
            additionalLeftText="+доставка 40 грн"
            rightSideHeading="Сдача с:"
            rightSideData="1000 грн"
            bottomSpacing={20}
          />
          <TextRowHighlighted
            leftSideHeading="Итого:"
            leftSideData="640 грн"
            rightSideHeading="Способ оплаты"
            rightSideData="Наличными"
            bottomSpacing={20}
          />
          <OrderRedirectLink
            redirectTo="ProductsList"
            rightImgSource={arrow}
            rightImgStyles={styles.image}
            text="Список товаров"
            navigation={navigation}
            containerStyle={{ ...styles.highlighted, width: "65%" }}
          >
            <Text style={styles.productsLink}>Список товаров</Text>
          </OrderRedirectLink>
          <OrderDetailsText marginBottom={10}>
            Время доставки:{" "}
            <OrderDetailsText
              style={{ fontSize: 24, color: "#000" }}
              marginBottom={10}
            >
              17:20
            </OrderDetailsText>
          </OrderDetailsText>
          <OrderDetailsText>Сообщение клиента: </OrderDetailsText>
          <View
            style={{
              ...styles.highlighted,
              paddingBottom: 100,
              marginRight: 20,
            }}
          >
            <OrderDetailsText>Привезите тёплым!</OrderDetailsText>
          </View>
        </Wrapper>
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
  arrow: {
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
    marginLeft: 55,
  },
  picker: {
    borderRadius: 15,
    backgroundColor: "#fff",
    width: "65%",
    marginLeft: 18,
    marginTop: 27,
  },
  productsLink: {
    fontFamily: "Roboto-Medium",
  },
});
