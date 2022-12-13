import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
/* importacion de las lineas del buscador */

import Linea1 from "../screen/Micros/Linea1";
import Linea2 from "../screen/Micros/Linea2";
import Linea5 from "../screen/Micros/Linea5";
import Linea8 from "../screen/Micros/Linea8";
import Linea9 from "../screen/Micros/Linea9";
import Linea10 from "../screen/Micros/Linea10";
import Linea11 from "../screen/Micros/Linea11";
import Linea16 from "../screen/Micros/Linea16";
import Linea17 from "../screen/Micros/Linea17";
import Linea18 from "../screen/Micros/Linea18";

import Buscar from '../screen/MenuTabs/Buscar';
const LineasStack = createStackNavigator();
const StackBucarLineas = () => {
    return (
        <LineasStack.Navigator>
          <LineasStack.Screen
            name="Buscar Linea" 
            component={Buscar}
            options={{headerShown:true}}
           
          />
                  
          <LineasStack.Screen
            name="Linea1"
            component={Linea1}
            options={{ title: "Linea 1" }}
          />
    
          <LineasStack.Screen
            name="Linea2"
            component={Linea2}
            options={{ title: "Linea 2",/* headerShown: false */}}
          />
    
          
          <LineasStack.Screen
            name="Linea5"
            component={Linea5}
            options={{ title: "Linea 5" }}
          />
      
    
          <LineasStack.Screen
            name="Linea8"
            component={Linea8}
            options={{ title: "Linea 8" }}
          />
          <LineasStack.Screen
            name="Linea9"
            component={Linea9}
            options={{ title: "Linea 9" }}
          />
          <LineasStack.Screen
            name="Linea10"
            component={Linea10}
            options={{ title: "Linea 10" }}
          />
          <LineasStack.Screen
            name="Linea11"
            component={Linea11}
            options={{ title: "Linea 11" }}
          />
         
          <LineasStack.Screen
            name="Linea16"
            component={Linea16}
            options={{ title: "Linea 16" }}
          />
          <LineasStack.Screen
            name="Linea17"
            component={Linea17}
            options={{ title: "Linea 17" }}
          />
          <LineasStack.Screen
            name="Linea18"
            component={Linea18}
            options={{ title: "Linea 18" }}
          />
        </LineasStack.Navigator>
      );
}

export default StackBucarLineas

const styles = StyleSheet.create({})