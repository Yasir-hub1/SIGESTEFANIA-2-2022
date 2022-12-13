import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
  } from "react-native";
  import imagenPath from "../../screen/imagenPath";
  import React, { useState, useEffect, useRef } from "react";
  import Modal from "../../components/Modal";
  import Linea1 from "../Micros/Linea1";
  import * as Permissions from "expo-permissions";
  import Toast from "react-native-easy-toast";
  import * as Location from "expo-location";
  import MapView from "react-native-maps";
  const Buscar = ({ navigation }) => {
    /* estado para el modal */
  
    // const [isvisibleMap, setisvisibleMap] = useState(false);
    /* Abrir modal */
    // const openModal = () => setisvisibleMap(true);
  
    const toastRef = useRef();
    const linea1 = () => {
      navigation.navigate("Linea1");
    };
    const linea2 = () => {
      navigation.navigate("Linea2");
    };
    const linea5 = () => {
      navigation.navigate("Linea5");
    };
    const linea8 = () => {
      navigation.navigate("Linea8");
    };
    const linea9 = () => {
      navigation.navigate("Linea9");
    };
    const linea10 = () => {
      navigation.navigate("Linea10");
    };
    const linea11 = () => {
      navigation.navigate("Linea11");
    };
    const linea16 = () => {
      navigation.navigate("Linea16");
    };
    const linea17 = () => {
      navigation.navigate("Linea17");
    };
    const linea18 = () => {
      navigation.navigate("Linea18");
    };
  
    return (
      <ScrollView keyboardShouldPersistTaps="handled" styles={styles.scroll}>
        <TouchableOpacity style={styles.filas}>
          <Image source={imagenPath.linea1} style={styles.imagen}></Image>
  
          <View style={styles.cardContent}>
            <Text style={styles.titulo}>Linea 1</Text>
            {/* <Text style={styles.partida}>Ruta Partida</Text> */}
            <TouchableOpacity style={styles.btnVer} onPress={linea1}>
              <Text style={styles.btnVerText}>Ver</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.filas}>
          <Image source={imagenPath.linea2} style={styles.imagen}></Image>
          <View style={styles.cardContent}>
            <Text style={styles.titulo}>Linea 2</Text>
            {/* <Text style={styles.partida}>Ruta Partida</Text> */}
            <TouchableOpacity style={styles.btnVer} onPress={linea2}>
              <Text style={styles.btnVerText}>Ver</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filas}>
          <Image source={imagenPath.linea5} style={styles.imagen}></Image>
          <View style={styles.cardContent}>
            <Text style={styles.titulo}>Linea 5</Text>
            {/* <Text style={styles.partida}>Ruta Partida</Text> */}
            <TouchableOpacity style={styles.btnVer} onPress={linea5}>
              <Text style={styles.btnVerText}>Ver</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filas}>
          <Image source={imagenPath.linea8} style={styles.imagen}></Image>
          <View style={styles.cardContent}>
            <Text style={styles.titulo}>Linea 8</Text>
            {/* <Text style={styles.partida}>Ruta Partida</Text> */}
            <TouchableOpacity style={styles.btnVer} onPress={linea8}>
              <Text style={styles.btnVerText}>Ver</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filas}>
          <Image source={imagenPath.linea9} style={styles.imagen}></Image>
          <View style={styles.cardContent}>
            <Text style={styles.titulo}>Linea 9</Text>
            {/* <Text style={styles.partida}>Ruta Partida</Text> */}
            <TouchableOpacity style={styles.btnVer} onPress={linea9}>
              <Text style={styles.btnVerText}>Ver</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filas}>
          <Image source={imagenPath.linea10} style={styles.imagen}></Image>
          <View style={styles.cardContent}>
            <Text style={styles.titulo}>Linea 10</Text>
            {/* <Text style={styles.partida}>Ruta Partida</Text> */}
            <TouchableOpacity style={styles.btnVer} onPress={linea10}>
              <Text style={styles.btnVerText}>Ver</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filas}>
          <Image source={imagenPath.linea11} style={styles.imagen}></Image>
          <View style={styles.cardContent}>
            <Text style={styles.titulo}>Linea 11</Text>
            {/* <Text style={styles.partida}>Ruta Partida</Text> */}
            <TouchableOpacity style={styles.btnVer} onPress={linea11}>
              <Text style={styles.btnVerText}>Ver</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filas}>
          <Image source={imagenPath.linea16} style={styles.imagen}></Image>
          <View style={styles.cardContent}>
            <Text style={styles.titulo}>Linea 16</Text>
            {/* <Text style={styles.partida}>Ruta Partida</Text> */}
            <TouchableOpacity style={styles.btnVer} onPress={linea16}>
              <Text style={styles.btnVerText}>Ver</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filas}>
          <Image source={imagenPath.linea17} style={styles.imagen}></Image>
          <View style={styles.cardContent}>
            <Text style={styles.titulo}>Linea 17</Text>
            {/* <Text style={styles.partida}>Ruta Partida</Text> */}
            <TouchableOpacity style={styles.btnVer} onPress={linea17}>
              <Text style={styles.btnVerText}>Ver</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filas}>
          <Image source={imagenPath.linea18} style={styles.imagen}></Image>
          <View style={styles.cardContent}>
            <Text style={styles.titulo}>Linea 18</Text>
            {/* <Text style={styles.partida}>Ruta Partida</Text> */}
            <TouchableOpacity style={styles.btnVer} onPress={linea18}>
              <Text style={styles.btnVerText}>Ver</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
       
  
        {/* <Map1 isvisibleMap={isvisibleMap} setisvisibleMap={setisvisibleMap} /> */}
        <Toast ref={toastRef} position="top" opacity={0.8} />
        <View style={styles.bajo}/>
      </ScrollView>
    );
  };
  /* function Map1(props) {
    const { isvisibleMap, setisvisibleMap } = props;
    const [location, setlocation] = useState(null);
    useEffect(() => {
      (async () => {
        const resultPermiso = await Permissions.askAsync(Permissions.LOCATION);
        const EstadoPermiso = resultPermiso.permissions.location.status;
        if (EstadoPermiso !== "granted") {
          toastRef.current.show(
            "Debes aceptar los permisos de localización",
            3000
          );
        } else {
          const Userlocal = await Location.getCurrentPositionAsync({});
         
          setlocation({
            latitude: Userlocal.coords.latitude,
            longitude: Userlocal.coords.longitude,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          });
        }
      })();
    }, []);
  
    return (
      <Modal isVisible={isvisibleMap} setIsvisible={setisvisibleMap}>
        <View>
          <MapView
            style={styles.map}
            initialRegion={location}
            showsUserLocation={true}
          ></MapView>
        </View>
      </Modal>
    );
  } */
  const styles = StyleSheet.create({
    bajo:{
      marginBottom:110
    },
    map: {
      width: "100%",
      height: 570,
    },
    scroll: {
      backgroundColor: "white",
      flex: 1,
      padding: 24,
    
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
  
      marginLeft: 20,
      marginRight: 20,
      marginTop: 20,
      backgroundColor: "white",
      padding: 10,
      flexDirection: "row",
      borderRadius: 30,
      borderWidth: 3.5,
      borderColor: "#ED4C67",
    },
    /*  padding: 15,
      marginTop: 15,
      backgroundColor: "white",
      borderWidth: 1.5,
      borderColor: "black",
      borderRadius:12 */
  
    imagen: {
      width: 130,
      height: 100,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: "#ebf0f7",
    },
    cardContent: {
      marginLeft: 20,
      marginTop: 10,
    },
    titulo: {
      fontSize: 18,
      flex: 1,
      alignSelf: "center",
      color: "#B53471",
      fontWeight: "bold",
    },
    partida: {
      fontSize: 14,
      flex: 1,
      alignSelf: "center",
      color: "#4b6584",
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
  });
  
  export default Buscar;
  