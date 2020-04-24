import * as React from "react";
import { ScrollView } from "react-native";

import { OrderItem } from './OrderItem';


export function ActiveOrders({navigation}) {
    return (
        <ScrollView>
            <OrderItem completed={false} id="123456" navigation={navigation}/>
            <OrderItem completed={false} id="123456" />
            <OrderItem completed={false} id="123456" />
            <OrderItem completed={false} id="123456" />
            <OrderItem completed={false} id="123456" />
            <OrderItem completed={false} id="123456" />
            <OrderItem completed={false} id="123456" />
            <OrderItem completed={false} id="123456" />
            <OrderItem completed={false} id="123456" />
            <OrderItem completed={false} id="123456" />
            <OrderItem completed={false} id="123456" />
        </ScrollView>
    );
}

export function CompletedOrders({navigation}) {
    return (
        <ScrollView>
            <OrderItem completed={true} id="123456" />
            <OrderItem completed={true} id="123456" />
            <OrderItem completed={true} id="123456" />
            <OrderItem completed={true} id="123456" />
            <OrderItem completed={true} id="123456" />
            <OrderItem completed={true} id="123456" />
            <OrderItem completed={true} id="123456" />
            <OrderItem completed={true} id="123456" />
            <OrderItem completed={true} id="123456" />
            <OrderItem completed={true} id="123456" />
            <OrderItem completed={true} id="123456" />
            <OrderItem completed={true} id="123456" />
            <OrderItem completed={true} id="123456" />
            <OrderItem completed={true} id="123456" />
        </ScrollView>
    );
};