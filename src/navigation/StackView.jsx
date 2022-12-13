import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Inicio from "../screen/Inicio";
//importando vistas
import Mapa from "../screen/MenuTabs/Mapa";
import Buscar from "../screen/MenuTabs/Buscar";
import StackBucarLineas from "./StackBucarLineas";
/* importacion de las lineas del buscador */

const ViewStack = createStackNavigator();
const StackView = () => {
    return (
        <ViewStack.Navigator>
            <ViewStack.Screen
                name="INICIO"
                component={Inicio}
                options={{ headerShown: true , headerTitleAlign: "center",}}
            />

            <ViewStack.Screen
                name="Mapa"
                component={Mapa}
                options={{ headerShown: true }}
            />
            <ViewStack.Screen
                name="StackBucarLineas"
                component={StackBucarLineas}
                options={{ headerShown: false }}
            />
        </ViewStack.Navigator>
    );
};

export default StackView;

const styles = StyleSheet.create({});
