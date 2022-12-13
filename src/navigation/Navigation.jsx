import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
} from "react-native";
import React, { useRef, useState } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ModalInfoBtn from "../vistas/micros/ModalInfoBtn";
/* importando imagen */
import imagenPath from "../vistas/imagenPath";
/* iconos de fontAwesome */
import { FontAwesome5 } from "@expo/vector-icons";
/* Vistas de lineas */
import Principal from "../vistas/micros/Principal";
/* importacion de los Stack de navegacion */
import BuscadorStack from "./BuscadorStack";
/* importadcion de Stack RadioGeo */
import RadioGeoStack from "./RadioGeoStack";
/* vista de inicio */
import InicioStack from "./InicioStack";
import Inicio from "./Inicio";
/* Vistas Sockets */
import SocketStack from "./SocketStack";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  /* Animacion del Tab Plus imagen */
  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  /* estado para el modal */

  const [isvisibleMap, setisvisibleMap] = useState(false);
  /* Abrir modal */
  const openModal = () => setisvisibleMap(true);
  /* cerrar modal */
  const closeModal=()=> setisvisibleMap(false);

  return (
    <NavigationContainer initialRouteName="Inicio">
      <Tab.Navigator
        screenOptions={({ route }) => ({
          /*   tabBarVisible:isTabBarVisible(route), */
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "white",
            position: "absolute",
            bottom: 40,
            marginHorizontal: 20,
            height: 60,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 10,
              height: 10,
            },
            paddingHorizontal: 20,
          },
        })}
      >
        {/* tab screen */}

        {/* tab iconos */}

        <Tab.Screen
          name="Bienvenido"
          component={InicioStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ position: "absolute", top: 20 }}>
                <FontAwesome5
                  name="map"
                  size={20}
                  color={focused ? "#ED4C67" : "gray"}
                ></FontAwesome5>
              </View>
            ),
            /*  tabBarVisible:false,
            
            tabBarStyle: { display: 'none' }, */
            headerShown: false,
          }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>
        <Tab.Screen
          name="Buscar"
          component={BuscadorStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ position: "absolute", top: 20 }}>
                <FontAwesome5
                  name="search"
                  size={20}
                  color={focused ? "#ED4C67" : "gray"}
                ></FontAwesome5>
              </View>
            ),
            headerShown: false,
          }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: GetAncho(),
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>

        {/* TAB central */}

        <Tab.Screen
          name="Opcional"
          component={Opcional}
          options={{
            tabBarIcon: ({ focused }) => (
              <TouchableOpacity onPress={openModal}>
                <View style={styles.btnPlus}>
                  <Image
                    source={imagenPath.Image}
                    style={{ width: 38, height: 38 }}
                  ></Image>
                  <Opcional
                    isvisibleMap={isvisibleMap}
                    setisvisibleMap={setisvisibleMap}
                  />
                </View>
              </TouchableOpacity>
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: GetAncho(),
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>

        <Tab.Screen
          name="RadioGeo"
          component={RadioGeoStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ position: "absolute", top: 20 }}>
                <FontAwesome5
                  name="route"
                  size={20}
                  color={focused ? "#ED4C67" : "gray"}
                ></FontAwesome5>
              </View>
            ),
            headerShown: false,
          }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: GetAncho() * 3,
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>

        <Tab.Screen
          name="SocketStack"
          component={SocketStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ position: "absolute", top: 20 }}>
                <FontAwesome5
                  name="bus"
                  size={20}
                  color={focused ? "#ED4C67" : "gray"}
                ></FontAwesome5>
              </View>
            ),
            headerShown: false,
          }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: GetAncho() * 4,
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>
      </Tab.Navigator>
      <Animated.View
        style={{
          width: GetAncho() - 20,
          height: 2,
          backgroundColor: "#ED4C67",
          position: "absolute",
          bottom: 98,
          left: 50,
          borderRadius: 50,
          transform: [{ translateX: tabOffsetValue }],
        }}
      ></Animated.View>
    </NavigationContainer>
  );
};
/* funcion para tener el maximo ancho del dispositivo */
function GetAncho() {
  let width = Dimensions.get("window").width;

  /* paddin horizontal */
  width = width - 80;
  return width / 5;
}

function Opcional(props) {
  const { isvisibleMap, setisvisibleMap } = props;
  const CloseModal=() =>setisvisibleMap(false);
  
  return (
    <ModalInfoBtn isVisible={isvisibleMap} setIsvisible={setisvisibleMap}>
      <View style={styles.ViewModal}>
        <Text style={styles.TextoModal}>Botones De Navegación </Text>

        <TouchableOpacity style={styles.filas}>
          <FontAwesome5
            style={styles.imagen}
            name="map"
            size={35}
            color={"#ED4C67"}
          ></FontAwesome5>

          <View style={styles.cardContent}>
            <Text style={styles.titulo}>Map</Text>
            <Text
              style={styles.partida}
            >{`Explora todas las rutas de partida \ny final presionando las lineas de\ncolor en el mapa.`}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filas}>
          <FontAwesome5
            style={styles.imagen}
            name="search"
            size={35}
            color={"#ED4C67"}
          ></FontAwesome5>

          <View style={styles.cardContent}>
            <Text style={styles.titulo}>Buscar</Text>
            <Text
              style={styles.partida}
            >{`Busca la linea de tu preferencia\ny explora su ruta y visualiza\nsu recorrido.`}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filas}>
          <FontAwesome5
            style={styles.imagen}
            name="route"
            size={35}
            color={"#ED4C67"}
          ></FontAwesome5>

          <View style={styles.cardContent}>
            <Text style={styles.titulo}>Tiempo y Distancia</Text>
            <Text
              style={styles.partida}
            >{`Arrastra el marcador verde a tu\ndestino y visualiza el tiempo y la\ndistancia que te tomará llegar\ndesde tu ubicación.`}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filas}>
          <FontAwesome5
            style={styles.imagen}
            name="bus"
            size={35}
            color={"#ED4C67"}
          ></FontAwesome5>

          <View style={styles.cardContent}>
            <Text style={styles.titulo}>Tiempo Real</Text>
            <Text
              style={styles.partida}
            >{`Observa y explora las lineas\nen movimiento en tiempo real, y\nvisualiza cuanto tiempo le toma\nllegar a tu ubicación`}</Text>
          </View>
        </TouchableOpacity >
        <View style={styles.ViewBtnClose}>
          <TouchableOpacity style={styles.BtnCloseModal} onPress={CloseModal}> 
            <Image source={imagenPath.cerrarModal} style={styles.CerrarModal} tintColor={"white"} />
          </TouchableOpacity>
        </View>
      </View>
    </ModalInfoBtn>
  );
}

export default Navigation;

const styles = StyleSheet.create({
  ViewBtnClose: {
    marginTop: 70,
    marginLeft:30,
  },
  BtnCloseModal: {

    justifyContent: "center",
    alignSelf: "center",
  
  },
  CerrarModal: {
    justifyContent: "center",
    alignSelf: "center",
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#ED4C67",
    backgroundColor: "transparent",
   
 
  },
  /* Inicio de Card de las info de los botones de navegacion */
  imagen: {
    width: 42,
    height: 42,
    marginLeft: 10,
    marginTop: 15,

    /*   borderRadius: 3, */
    /*  borderWidth: 0.5, */
    /*   borderColor: "#ED4C67", */
    justifyContent: "center",
  },
  filas: {
    shadowColor: "#00000021",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    /*  marginLeft: 8,
    marginRight: 20, */
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "white",
    /*   padding: 10, */
    paddingTop: -10,
    flexDirection: "row",
    borderRadius: 30,
    borderWidth: 3.5,
    borderColor: "#ED4C67",
    width: "120%",
    height: "22.8%",
  },
  cardContent: {
    marginLeft: 20,
    marginTop: 5,
  },
  titulo: {
    marginLeft: -80,
    fontSize: 15,
    flex: 1,
    alignSelf: "center",
    color: "#B53471",
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
  },
  partida: {
    marginLeft: -15,
    marginTop: -40,
    fontSize: 11,
    flex: 1,
    alignSelf: "flex-start",
    color: "#4b6584",
    justifyContent: "space-between",
    textAlign: "left",
  },
  btnVer: {
    marginTop: 10,
    height: 35,
    width: 100,
    padding: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ED4C67",
  },
  btnVerText: {
    color: "#ED4C67",
    fontSize: 13,
    fontWeight: "bold",
  },

  /* fin */

  ViewModal: {
    height: "85%",
    width: "85%",
  },
  btnPlus: {
    width: 55,
    height: 55,
    marginBottom: 30,
    backgroundColor: "white",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#ED4C67",
    justifyContent: "center",
    alignItems: "center",
  },
  TextoModal: {
    marginLeft: 20,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 18,
    color: "#ED4C67",
  },
});
