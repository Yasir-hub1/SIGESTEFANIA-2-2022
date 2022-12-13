import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//importando vistas
import Mapa from "../screen/MenuTabs/Mapa";
import Buscar from "../screen/MenuTabs/Buscar";
import StackBucarLineas from "./StackBucarLineas";
/* iconos */
import { FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";
import { Pressable } from "react-native";
import StackView from "./StackView";

const Tab = createBottomTabNavigator();

export default function ButtonTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        // cambiando color de los tab de forma global
        tabBarActiveTintColor: Colors.secundary,
      }}
    >
      <Tab.Screen
      name="Principal"
      component={StackView}
      options={{
        headerShown: false,
        
        
        tabBarBadgeStyle: { backgroundColor: "#ff4757", color: Colors.ligth },
        // color le pasa el color heredado por default de Android
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="home" size={27} color={"#B53471"} />
          ),
        }}
      
      
      />
      {/* <Tab.Screen
        name="Buscar"
        component={StackBucarLineas}
        options={{
          headerShown: false,
          // icono superior
         
          tabBarBadgeStyle: { backgroundColor: "#ff4757", color: Colors.ligth },
          // color le pasa el color heredado por default de Android
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="search" size={27} color={color} />
          ),
        }}
      /> */}

     {/*  <Tab.Screen
        name="Viaje"
        component={Mapa}
        options={{
          headerShown: false,
          tabBarBadgeStyle: { backgroundColor: "#ff4757", color: Colors.ligth },

          // color le pasa el color heredado por default de Android
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={27} color={color} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}
