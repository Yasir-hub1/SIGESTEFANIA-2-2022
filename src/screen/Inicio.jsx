import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import MapView, {
    Polyline,
} from "react-native-maps";
import * as Location from "expo-location";
import imagenPath from "../screen/imagenPath";

const Inicio = ({navigation}) => {
    /* estado para el origen del mapa */
    const [Origen, setOrigen] = useState(null);

    /*  const [envio, setenvio] = useState(false); */
    useEffect(() => {
        (async () => {
            const resultPermiso = await Location.requestForegroundPermissionsAsync();

            const EstadoPermiso = resultPermiso.status;

            if (EstadoPermiso !== "granted") {
                toastRef.current.show(
                    "Debes aceptar los permisos de localización",
                    3000
                );
            } else {
                const Userlocal = await Location.getCurrentPositionAsync({});

                setOrigen({
                    latitude: Userlocal.coords.latitude,
                    longitude: Userlocal.coords.longitude,
                    latitudeDelta: 0.0077,
                    longitudeDelta: 0.0077,
                });

            }
        })();
    }, []);
    const mapRef = useRef();
    return (
        <View style={styles.container}>
            <MapView ref={mapRef}
                provider={"google"}
                userLocationPriority="high"
                zoomEnabled={true}
                zoomTapEnabled={true}
                loadingEnabled={true}
                /*   zoomControlEnabled={true} */
                style={StyleSheet.absoluteFill}
                initialRegion={Origen}
                showsUserLocation={true}
                toolbarEnabled={false}
                showsMyLocationButton={true}
                userLocationFastestInterval={5000}
                maxZoomLevel={18}
                minZoomLevel={11}
                mapPadding={{ top: 335 }} >
            </MapView>

            <View style={styles.btnVerMenu}>

        <TouchableOpacity onPress={() => navigation.navigate("StackBucarLineas")}>
          <View style={styles.btnPlus}>
            <Image
              source={imagenPath.buscar}
              style={{ width: 40, height: 40,  }}
            ></Image>
          </View>
        </TouchableOpacity>
        {/* btn Refrsh */}
         <TouchableOpacity onPress={() => navigation.navigate("Mapa")}>
          <View style={[styles.btnindicador,{marginTop:-20}]}>
            <Image
              source={imagenPath.icono}
              style={{ width: 40, height: 40}}
            ></Image>
           
          </View>
        </TouchableOpacity>
      </View>
        </View>
    )
}

export default Inicio

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    btnPlus: {
        width: 45,
        height: 45,
        marginBottom: 30,
        // backgroundColor: "#ED4C67",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
      },
      btnVerMenu: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginTop: 400,
        marginRight: 10,
        position: "relative",
      },

})