import React, { useState, useRef, useEffect, useCallback } from "react";
import { TouchableOpacity, StyleSheet, View, Image, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Toast from "react-native-easy-toast";
import imagenPath from "../imagenPath";
import Poli_9i from './Poligonos/Poli_9i';
import Poli_9v from './Poligonos/Poli_9v';
import * as Location from "expo-location";
import BottomSheet, {
  BottomSheetView,

  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import Modal from "../../components/Modal";


const Linea9 = () => {
  /* Info de la linea 9 */
  const Lineas9 = [//26
    {
      id: "1",
      titulo: "B° La Madre"
    }, {
      id: "2",
      titulo: "Av. 3 Pasos Al Frente\nVillagomez/Y Av. El Cupesí"
    }, {
      id: "3",
      titulo: "Av. Libertadores\nY Octavo Anillo"
    }, {
      id: "4",
      titulo: "Av. Libertadores \nY Los Penocos"
    }, {
      id: "5",
      titulo: "Calle 6 Y Av. D"
    }, {
      id: "6",
      titulo: "Av. Cumavi Y Calle 4"
    }, {
      id: "7",
      titulo: "Av. Cumavi \nY Av. Canal Guapilo"
    }, {
      id: "8",
      titulo: "Cuarto Anillo \nY Calle Sur Y Chilchi"
    }, {
      id: "9",
      titulo: "Calle Angel Chavez Ruiz, 3030"
    }, {
      id: "10",
      titulo: "Av. Brasil Y Valverde"
    }, {
      id: "11",
      titulo: "Avenida Prolongación\nSan Pablo, 2145"
    }, {
      id: "12",
      titulo: "Av. Brasil Y Av. Intermodal"
    }, {
      id: "13",
      titulo: "Ñuflo De Chávez\nY Av. Viedma"
    }, {
      id: "14",
      titulo: "Av. Viedma Y Av. Melchor Pinto"
    }, {
      id: "15",
      titulo: "Av. Uruguay\nY Bolívar (Cementerio General)"
    }, {
      id: "16",
      titulo: "Av. Uruguay \nY Tumusla"
    }, {
      id: "17",
      titulo: "Buenos Aires Y Libertad"
    }, {
      id: "18",
      titulo: "Hospital De Niños"
    }, {
      id: "19",
      titulo: "Av. Cañoto Y Cuéllar"
    }, {
      id: "20",
      titulo: "Avenida Busch, 682"
    }, {
      id: "21",
      titulo: "Av. Busch Y Julio Salmón"
    }, {
      id: "22",
      titulo: "Av. Busch Y Calle 5"
    }, {
      id: "23",
      titulo: "Av. Bush Y Serrano"
    }, {
      id: "24",
      titulo: "Av. Busch Y Napoleón Rodríguez"
    },
    {
      id: "25",
      titulo: "Av. Busch Y Calle 6"
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
  const [estado, setEstado] = useState({

    origen: {
      latitude: -17.7713983 /* partida inicial */,
      longitude: -63.2082648,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0942,
    },


    destino: {
      latitude: -17.8034172 /* destino  */,
      longitude: -63.0896447,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0942,
    },
  });
  const mapRef = useRef();
  const toastRef = useRef();
  const { origen, destino } = estado;
  //linea 9
  const Linea9i = () => {
    toastRef.current.show("Linea 9: Ruta de partida");
  };
  const Linea9v = () => {
    toastRef.current.show("Linea 9: Ruta de vuelta");
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
          mapPadding={{ top: 495 }}

        >

          {ActivarIda ? <>

            <Marker
              coordinate={origen} /* marcador de inicio */
              image={imagenPath.icCurLoc} /* cambio de imagen del marker */
              title="Origen"
              description="Ruta de partida"
            />
            <Poli_9i onPress={Linea9i} />

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
            />
            <Poli_9v onPress={Linea9v} />

            <Marker
              coordinate={origen} /* marcador de inicio */
              /* cambio de imagen del marker */
              image={imagenPath.icGreenMarker}

              title="Destino"
              description="Ruta de partida"
            />
          </> : null}

          {/* Mostrando ambos sentidos */}

          {ActivarTodo ? <>
            <Marker
              coordinate={origen} /* marcador de inicio */
              image={imagenPath.icCurLoc} /* cambio de imagen del marker */
              title="Origen"
              description="Ruta de partida"
            />
            <Poli_9i onPress={Linea9i} />

            <Marker
              coordinate={destino} /* marcador de destino */
              image={imagenPath.icGreenMarker} /* cambia de imagen del default */
              title="Destino"
            />

            <Marker
              coordinate={destino} /* marcador de destino */
              image={imagenPath.icCurLoc} /* cambia de imagen del default */
              title="Origen"
            />
            <Poli_9v onPress={Linea9v} />

            <Marker
              coordinate={origen} /* marcador de inicio */
              /* cambio de imagen del marker */
              image={imagenPath.icGreenMarker}

              title="Destino"
              description="Ruta de partida"
            />

          </> : null}


        </MapView>
        {/* vista informativa */}
        <View style={styles.card}>
          <Text>Ruta de partida:<Text style={{ color: "purple" }}> ───────────</Text> </Text>
          <Text>Ruta de vuelta:<Text style={{ color: "brown" }}> ─ ─ ─ ─ ─ ─ ─ ─</Text></Text>

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
              <Text style={{ color: "#ffffff", fontSize: 20 }}>IV</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* //BTN DE IDA */}
        <View style={[styles.btnVerMenu, { marginTop: -20 }]}>
          <TouchableOpacity onPress={() => { setActivarIda(!ActivarIda); setActivaVuelta(false); setActivarTodo(false) }}>
            <View style={styles.btnPlus}>
              <Text style={{ color: "#ffffff", fontSize: 20 }}>LI</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* //BTN DE VUELTA */}

        <View style={[styles.btnVerMenu, { marginTop: -20 }]}>
          <TouchableOpacity onPress={() => { setActivaVuelta(!ActivaVuelta); setActivarIda(false); setActivarTodo(false) }}>
            <View style={styles.btnPlus}>
              <Text style={{ color: "#ffffff", fontSize: 20 }}>LV</Text>
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
            <Image source={imagenPath.linea9} style={styles.imagen}></Image>
            <View style={styles.cardContent}>
              <Text style={styles.titulo}>Linea 9</Text>
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
          {/*  <InfoLinea9/> */}
          {Lineas9.map((l, key) => {
            return (
              <View key={key}>
                <Text style={styles.TextoMenu}>{l.titulo}</Text>
                <Image source={imagenPath.icono} style={styles.icono} />
              </View>
            );
          })}
          <Text style={styles.TextoMenu}></Text>
        </BottomSheetScrollView>
        <View style={{ marginBottom: 30 }} />
      </BottomSheet>
      <Toast ref={toastRef} position="top" opacity={0.8} />
    </View>
  );
}

function Map1(props) {
  const { isvisibleMap, setisvisibleMap } = props;

  return (
    <Modal isVisible={isvisibleMap} setIsvisible={setisvisibleMap}>
      <View style={styles.ViewModal}>
        <Text style={styles.TextoModal}>Vista Previa</Text>
        <Image source={imagenPath.linea9} style={styles.ImagenModal}></Image>
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
    width: 45,
    height: 45,
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
export default Linea9