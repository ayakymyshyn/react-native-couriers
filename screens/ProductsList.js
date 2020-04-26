import React from "react";
import {
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";

import { ProductsTable, Row } from '../components/ProductsTable';
import backArrowImg from "../assets/images/arrow-back.png";

export const ProductsList = ({ navigation }) => {
    const Data = [['Пиво «Жигулёвское»', '1л', '30 грн'], ['Масло подсолнечное «Щедрый дар»', '2 шт', '40 грн'], ['Масло подсолнечное «Щедрый дар»', '2 шт', '40 грн']];
    const titles = ['Товар', 'Кол-во', 'Сумма'];

    return (<ScrollView>
        <TouchableOpacity
            onPress={() => navigation.navigate("OrderDetails")}
            style={{ ...styles.row, ...styles.fdrow }}
        >
            <Image source={backArrowImg} style={styles.arrow} />
            <Text style={styles.link}>Список заказа</Text>
        </TouchableOpacity>
        <Row data={titles} rowStyle={styles.heading} />
        <ProductsTable items={Data} styles={styles.text} />
    </ScrollView>
    )
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
    row: {
        alignItems: "center",
        marginTop: 40,
        marginBottom: 15,
    },
    arrow: {
        marginLeft: 20,
        marginRight: 20,
        height: 25,
        width: 25,
    },
    container: { padding: 16, paddingTop: 30, flexDirection: "row", justifyContent: "space-between" },
    text: { margin: 6, fontSize: 14, fontFamily: "Roboto-Medium", flexWrap: "wrap", width: "20%" },
    heading: { fontSize: 24, fontFamily: "Roboto-Medium" }
});