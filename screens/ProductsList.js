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


import backArrowImg from "../assets/images/arrow-back.png";

export const ProductsList = ({ navigation }) => {
    const Title = ['Товар', 'Кол-во', 'Сумма'];
    const Title1 = ['Пиво «Жигулёвское»', '1л', '30 грн'];
    const Title2 = ['Масло подсолнечное «Щедрый дар»', '2 шт', '40 грн'];
    const Title3 = ['Молоко', '2 шт', '50 грн'];

    return (<ScrollView>
        <TouchableOpacity
            onPress={() => navigation.navigate("OrderDetails")}
            style={{ ...styles.row, ...styles.fdrow }}
        >
            <Image source={backArrowImg} style={styles.arrow} />
            <Text style={styles.link}>Список заказа</Text>
        </TouchableOpacity>
        <View style={styles.container}>
            <Text style={styles.heading}>Товар</Text>
            <Text style={styles.heading}>Кол-во</Text>
            <Text style={styles.heading}>Сумма</Text>
        </View>
        <View style={styles.container}>
            <Text style={styles.text}>Пиво «Жигулёвское»</Text>
            <Text style={styles.text}>1 шт</Text>
            <Text style={styles.text}>30 грн</Text>
        </View>
        <View style={styles.container}>
            <Text style={styles.text}>Масло подсолнечное «Щедрый дар»</Text>
            <Text style={styles.text}>2 шт</Text>
            <Text style={styles.text}>40 грн</Text>
        </View>
        <View style={styles.container}>
            <Text style={styles.text}>Молоко</Text>
            <Text style={styles.text}>2 шт</Text>
            <Text style={styles.text}>50 грн</Text>
        </View>
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
    head: { height: 40, flexWrap: "wrap", flexDirection: "row" },
    text: { margin: 6, fontSize: 14, fontFamily: "Roboto-Medium", flexWrap: "wrap", width: "20%" },
    heading: { fontSize: 24, fontFamily: "Roboto-Medium" }
});