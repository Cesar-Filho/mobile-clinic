import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "./views/Login";
import ListOrders from "./views/Orders/ListOrders";
import DetailOrder from "./views/Orders/DetailOrder";
import FormOrder from "./views/Orders/FormOrder";

export default function Home() {
  const Stack = createStackNavigator();
  const { Navigator, Screen } = Stack;

  return (
    <NavigationContainer>
      <Navigator initialRouteName="Login">
        <Screen name="Login" component={Login} />
        <Screen name="Lista de pedidos" component={ListOrders} />
        <Screen name="Pedido detalhado" component={DetailOrder} />
        <Screen name="Cadastrar pedido" component={FormOrder} />
      </Navigator>
    </NavigationContainer>
  );
}
