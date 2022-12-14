import React, { useState, useRef, useEffect, useCallback } from "react";
import { TouchableOpacity, StyleSheet, View, Text, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Toast from "react-native-easy-toast";
import imagenPath from "../imagenPath";
import Poli_5i from "./Poligonos/poli_5i";
import Poli_5v from "./Poligonos/poli_5v";
import * as Location from "expo-location";

import BottomSheet, {
  BottomSheetView,

  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import Modal from "../../components/Modal";


const Linea5 = ({ navigation }) => {
  /* Info de la linea 5 */
  const Lineas5 = [//26
    {
      id: "1",
      titulo: "Avenida Kuljis"
    }, {
      id: "2",
      titulo: "Tienda Nelly"
    }, {
      id: "3",
      titulo: "Tienda de Barrio Mirtha \nVillagomez/Avenida Kuljis"
    }, {
      id: "4",
      titulo: "Tienda de Barrio Lily \nCarera/Avenida Kuljis"
    }, {
      id: "5",
      titulo: "Tienda de Barrio Melody \nMontenegro/Calle 10"
    }, {
      id: "6",
      titulo: "Tienda de Barrio Basilia \nYucra/Avenida Kuljis"
    }, {
      id: "7",
      titulo: "Tienda \nDalcy/Colectora Noreste"
    }, {
      id: "8",
      titulo: "Salón Anita:Color y \nEstilo./Avenida Piraí"
    }, {
      id: "9",
      titulo: "Avenida Tahuichi"
    }, {
      id: "10",
      titulo: "Spa Siempra \nBella/Avenida Piraí"
    }, {
      id: "11",
      titulo: "Metegol Cancha"
    }, {
      id: "12",
      titulo: "Tienda de Barrio Blanca \nMaldonado/Avenida Piraí"
    }, {
      id: "13",
      titulo: "Pablo Neruda"
    }, {
      id: "14",
      titulo: "Samantha Productos \nGourmet/Avenida Piraí"
    }, {
      id: "15",
      titulo: "Tienda de Barrio \nAbrahan/Campiñas"
    }, {
      id: "16",
      titulo: "Gusteaus \nResto-Bar/Avenida Piraí"
    }, {
      id: "17",
      titulo: "Takumi \nRamen/Avenida Piraí"
    }, {
      id: "18",
      titulo: "SMART servicio tecnico \nde celulares/Tobité"
    }, {
      id: "19",
      titulo: "Karen&Lucero\n/Pedro Suárez Arana"
    }, {
      id: "20",
      titulo: "Deja \nVu/Avenida Piraí"
    }, {
      id: "21",
      titulo: "Tienda \nJesus/Avenida Piraí"
    }, {
      id: "22",
      titulo: "Avenida Piraí"
    }, {
      id: "23",
      titulo: "Ruby Hair & Make - Up \nStudio/Avenida Piraí"
    }, {
      id: "24",
      titulo: "Atm-Banco Mercantil \nSanta Cruz/Avenida Piraí"
    },
    {
      id: "25",
      titulo: "Banco Unión/\nAvenida Piraí"
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
  /* localizacion de usuario */
  const [location, setlocation] = useState(null);
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

        setlocation({
          latitude: Userlocal.coords.latitude,
          longitude: Userlocal.coords.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        });
      }
    })();
  }, []);

  const toastRef = useRef();
  const [estado] = useState({
    origen: {
      latitude: -17.82429,
      longitude: -63.2357,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0942,
    },
    destino: {
      latitude: -17.72684,
      longitude: -63.13883,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0942,
    },
  });

  const mapRef = useRef();
  const { origen, destino } = estado;

  const alertaIda = () => {
    toastRef.current.show("Linea 5: Ruta de partida");
  };
  const alertaVuelta = () => {
    toastRef.current.show("Linea 5: Ruta de vuelta");
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
             <Poli_5i /* polígono de ida */ onPress={alertaIda} />

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
            <Poli_5v /* poligono de vuelta */ onPress={alertaVuelta} />

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
           <Poli_5i /* polígono de ida */ onPress={alertaIda} />

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
            <Poli_5v /* poligono de vuelta */ onPress={alertaVuelta} />

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
          <Text>
            Ruta de partida:<Text style={{ color: "navy" }}> ───────────</Text>
          </Text>
          <Text>
            Ruta de vuelta:
            <Text style={{ color: "lime" }}> ─ ─ ─ ─ ─ ─ ─ ─</Text>
          </Text>
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
            <Image source={imagenPath.linea5} style={styles.imagen}></Image>
            <View style={styles.cardContent}>
              <Text style={styles.titulo}>Linea 5</Text>
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
          {Lineas5.map((prop, key) => {
            return (
              <View key={key}>
                <Text style={styles.TextoMenu}>{prop.titulo}</Text>
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
        <Image source={imagenPath.linea5} style={styles.ImagenModal}></Image>
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

export default Linea5;
