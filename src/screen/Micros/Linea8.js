import React, { useState, useRef, useEffect, useCallback } from "react";
import { TouchableOpacity, StyleSheet, View, Image, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Toast from "react-native-easy-toast";
import imagenPath from "../imagenPath";
import Poli_8i from "../../screen/Micros/Poligonos/poli_8i";
import Poli_8v from "./Poligonos/Poli_8v";
import * as Location from "expo-location";
import BottomSheet, {
  BottomSheetView,

  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import Modal from "../../components/Modal";


const Linea8 = () => {
  /* Info de la linea 8 */
  const Lineas8 = [//26
    {
      id: "1",
      titulo: "Villa Santa Cruz"
    }, {
      id: "2",
      titulo: "Avenue Principal Plan 3 Mil"
    }, {
      id: "3",
      titulo: "Av. Plan Tres Mil \nY Av. El Mechero"
    }, {
      id: "4",
      titulo: "Av. 18 De Marzo \nY Los Pinos"
    }, {
      id: "5",
      titulo: "Av Che Guevara \nY Neptuno"
    }, {
      id: "6",
      titulo: "Av. Che Guevara \nY Av. Radial 10"
    }, {
      id: "7",
      titulo: "Av. Radial 10 \n Y Mercurio"
    }, {
      id: "8",
      titulo: "Av. 16 De Julio \nY Juan José"
    }, {
      id: "9",
      titulo: "Av. 16 De Julio Y Calle 4"
    }, {
      id: "10",
      titulo: "Av. Cumavi Y Av. C"
    }, {
      id: "11",
      titulo: "Hospital Municipal"
    }, {
      id: "12",
      titulo: "Av. Primero De Mayo\nY Av, 3 Pasos Al Frente"
    }, {
      id: "13",
      titulo: "Pablo Neruda"
    }, {
      id: "14",
      titulo: "Felix Bascopé, 10"
    }, {
      id: "15",
      titulo: "Av. Intermodal Y Siles"
    }, {
      id: "16",
      titulo: "Terminal Bimodal"
    }, {
      id: "17",
      titulo: "Av. Santa Cruz Y Marcó"
    }, {
      id: "18",
      titulo: "Av. Santa Cruz Y 27 De Mayo"
    }, {
      id: "19",
      titulo: "Av. Santa Cruz\nY Av. Tres Pasos Al Frente"
    }, {
      id: "20",
      titulo: "Av. El Trompillo \nY Av. Argentina"
    }, {
      id: "21",
      titulo: "Av. Omar Chavez Ortiz, 1249"
    }, {
      id: "22",
      titulo: "Av. Cañoto Y Suaréz De Figueroa"
    }, {
      id: "23",
      titulo: "Av. Monseñor\nRivero Y D' Orbigny"
    }, {
      id: "24",
      titulo: "Av. Cristo Redentor \nY Los Penocos"
    },
    {
      id: "25",
      titulo: "Av. Claracuta\nY Octavo Anillo"
    },
  ]
  /* estado para el modal */

  const [isvisibleMap, setisvisibleMap] = useState(false);
  /* Abrir modal */
  const openModal = () => setisvisibleMap(true);

  /* hook para el boton despegable */
  const sheetRef = useRef(null);
  const [IsOpen, setIsOpen] = useState(true);

  const snapPoints = ["60%", "95%"];

  const handledSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
    setIsOpen(true);
  }, []);



  const [location, setlocation] = useState(null);
  useEffect(() => {
    (async () => {
      const resultPermiso = await Location.requestForegroundPermissionsAsync();

      const EstadoPermiso = resultPermiso.status;

      if (EstadoPermiso !== "granted") {
        toastRef.current.show("Debes aceptar los permisos de localización", 3000);
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
  const [estado] = useState({
    origen: {
      latitude: -17.82602,
      longitude: -63.1332,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0942,
    },
    destino: {
      latitude: -17.71818,
      longitude: -63.13963,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0942,
    },
  });
  const mapRef = useRef();
  const toastRef = useRef();
  const { origen, destino } = estado;
  const Linea8i = () => {
    toastRef.current.show("Linea 8: Ruta de partida");
  };
  const Linea8v = () => {
    toastRef.current.show("Linea 8: Ruta de vuelta");
  };

  const [ActivarIda, setActivarIda] = useState(false);
  const [ActivaVuelta, setActivaVuelta] = useState(false);
  const [ActivarTodo, setActivarTodo] = useState(false);
  
  
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <MapView
          ref={mapRef}
          style={StyleSheet.absoluteFill}
          initialRegion={origen}
          showsUserLocation={true}
          toolbarEnabled={false}
          userLocationFastestInterval={5000}
          mapPadding={{ top: 455 }}

        >

          {ActivarIda ? <>

            <Marker
              coordinate={origen} /* marcador de inicio */
              image={imagenPath.icCurLoc} /* cambio de imagen del marker */
              title="Origen"
              description="Linea 8 de Ida"

            />
             <Poli_8i onPress={Linea8i} />

            <Marker
              coordinate={destino} /* marcador de destino */
              image={imagenPath.icGreenMarker} /* cambia de imagen del default */
              title="Destino"
            />


          </> : null}

          {ActivaVuelta ? <>


            <Marker
              coordinate={destino} /* marcador de destino */
              image={imagenPath.icCurLoc} /* cambia de imagen del default */
              title="Origen"
              description="Linea 8 de Vuelta"

            />
             <Poli_8v onPress={Linea8v} />   

            <Marker
              coordinate={origen} /* marcador de inicio */
              /* cambio de imagen del marker */
              image={imagenPath.icGreenMarker}

              title="Destino"
              
            />
          </> : null}

          {/* Mostrando ambos sentidos */}

          {ActivarTodo ? <>
            <Marker
              coordinate={origen} /* marcador de inicio */
              image={imagenPath.icCurLoc} /* cambio de imagen del marker */
              title="Origen"
              description="Linea 8 de Ida"
              
            />
            <Poli_8i onPress={Linea8i} />

            <Marker
              coordinate={destino} /* marcador de destino */
              image={imagenPath.icGreenMarker} /* cambia de imagen del default */
              title="Destino"
            />

            <Marker
              coordinate={destino} /* marcador de destino */
              image={imagenPath.icCurLoc} /* cambia de imagen del default */
              title="Origen"
              description="Linea 8 de Vuelta"

            />
           <Poli_8v onPress={Linea8v} />   

            <Marker
              coordinate={origen} /* marcador de inicio */
              /* cambio de imagen del marker */
              image={imagenPath.icGreenMarker}

              title="Destino"
              
            />

          </> : null}





        </MapView>
        {/* vista informativa */}
        <View style={styles.card}>
          <Text>Ruta de partida:<Text style={{ color: "green" }}> ───────────</Text> </Text>
          <Text>Ruta de Vuelta:<Text style={{ color: "red" }}> ─ ─ ─ ─ ─ ─ ─ ─</Text></Text>

        </View>


         {/* btn ver menu desplegable */}
         <View style={[styles.btnVerMenu, { marginTop: 220 }]}>
          <TouchableOpacity onPress={() => handledSnapPress(0)}>
            <View style={styles.btnPlus}>
              <Image
                source={imagenPath.puntero}
                style={{ width: 80, height: 40, tintColor: "#ffffff" }}
              ></Image>
            </View>
          </TouchableOpacity>
        </View>


          {/* //BTN DE TODO */}

        <View style={[styles.btnVerMenu, { marginTop: -20 }]}>
          <TouchableOpacity onPress={() => { setActivarTodo(!ActivarTodo); setActivarIda(false); setActivaVuelta(false) }}>
            <View style={styles.btnPlus}>
              <Text style={{ color: "#ffffff", fontSize: 15 }}>IV</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* //BTN DE IDA */}
        <View style={[styles.btnVerMenu, { marginTop: -20 }]}>
          <TouchableOpacity onPress={() => { setActivarIda(!ActivarIda); setActivaVuelta(false); setActivarTodo(false) }}>
            <View style={styles.btnPlus}>
              <Text style={{ color: "#ffffff", fontSize: 15 }}>LI</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* //BTN DE VUELTA */}

        <View style={[styles.btnVerMenu, { marginTop: -20 }]}>
          <TouchableOpacity onPress={() => { setActivaVuelta(!ActivaVuelta); setActivarIda(false); setActivarTodo(false) }}>
            <View style={styles.btnPlus}>
              <Text style={{ color: "#ffffff", fontSize: 15 }}>LV</Text>
            </View>
          </TouchableOpacity>
        </View>

        
      </View>
      <BottomSheet
        style={styles.MenuDesplegable}
        ref={sheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        onClose={() => setIsOpen(false)}
        index={-1}
        handleHeight={50}
        animatedIndex={50}
      >
        <BottomSheetView>
          <TouchableOpacity style={styles.linea} onPress={openModal}>
            <Image source={imagenPath.linea8} style={styles.imagen}></Image>
            <View style={styles.cardContent}>
              <Text style={styles.titulo}>Linea 8</Text>
              <Text style={styles.partida}>Horario: 05am - 10pm </Text>
              <Text style={styles.frecuencia}>Frecuencia: 10Min</Text>
              <Map1
                isvisibleMap={isvisibleMap}
                setisvisibleMap={setisvisibleMap}
              />
            </View>
          </TouchableOpacity>
        </BottomSheetView>
        <BottomSheetScrollView style={styles.ScrollViewMenu}>
          {/* componente de informacion de las rutas */}

          {Lineas8.map((l, key) => {
            return (
              <View key={key}>
                <Text style={styles.TextoMenu}>{l.titulo}</Text>
                <Image source={imagenPath.icono} style={styles.icono} />
              </View>
            );
          })}
          <Text style={styles.TextoMenu}></Text>

        </BottomSheetScrollView>
        <View style={{ marginBottom: 15 }} />
      </BottomSheet>
      <Toast ref={toastRef} position="top" opacity={0.8} />
    </View>
  );
};
function Map1(props) {
  const { isvisibleMap, setisvisibleMap } = props;

  return (
    <Modal isVisible={isvisibleMap} setIsvisible={setisvisibleMap}>
      <View style={styles.ViewModal}>
        <Text style={styles.TextoModal}>Vista Previa</Text>
        <Image source={imagenPath.linea8} style={styles.ImagenModal}></Image>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: "#ED4C67",
    shadowOffset: {
      width: 50,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 15,

    marginVertical: 2,
    marginHorizontal: 10,
    paddingTop: 1,
    backgroundColor: "white",
    flexBasis: "46%",
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    borderLeftWidth: 7,
    borderColor: "#ED4C67",
    maxHeight: 50,
  },
  TextoModal: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 80,
    fontSize: 17,
    color: "#ED4C67",
    fontWeight: "bold",
  },
  ViewModal: {
    width: "100%",
    height: 270,
    /*  borderRadius:10,
    borderColor:"#ED4C67",
    borderWidth:5 */
  },

  ImagenModal: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "105%",
    height: 230,
    padding: 5,
  },
  btnPlus: {
    width: 35,
    height: 35,
    marginBottom: 30,
    backgroundColor: "#ED4C67",
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
  ScrollViewMenu: {
    marginTop: -123,

    paddingLeft: 7,
    flex: 1,
    marginLeft: 10,
    maxHeight: "150%",
  },

  linea: {
    shadowColor: "#00000021",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 2,
    marginBottom: -15,
    backgroundColor: "white",
    padding: 10,
    paddingBottom: -10,
    flexDirection: "row",
    borderRadius: 10,
    /*  borderWidth: 3, */
    /* borderColor: "#ED4C67", */
    borderBottomColor: "#ED4C67",
    borderBottomWidth: 5,
    height: "50%",
  },

  imagen: {
    width: "45%",
    height: "85%",
    borderRadius: 10,
    borderColor: "#ebf0f7",
  },
  cardContent: {
    marginLeft: 7,
  },
  titulo: {
    fontSize: 25,
    flex: 1,
    alignSelf: "center",
    color: "#B53471",
    fontWeight: "bold",
  },
  partida: {
    fontSize: 14.2,
    flex: 1,
    alignSelf: "center",
    color: "#4b6584",
  },
  frecuencia: {
    fontSize: 14,
    flex: 1,
    alignSelf: "center",
    color: "#4b6584",
    marginTop: -15,
  },
  /* estilos de INfolineas */
  TextoMenu: {
    fontSize: 13.5,
    marginLeft: 100,
    flex: 1,
    paddingTop: 20,

    /*  textAlign: 'justify',  */
    /*  lineHeight: 25, */
  },
  icono: {

    width: 40,
    height: 30,
    marginLeft: 20,
    marginTop: -30

  },
});
export default Linea8;
