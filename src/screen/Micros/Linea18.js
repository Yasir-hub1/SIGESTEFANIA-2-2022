import React, { useState, useRef, useEffect, useCallback } from "react";
import { TouchableOpacity, StyleSheet, View, Image, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Toast from "react-native-easy-toast";
import imagenPath from "../imagenPath";
import Poli_18 from "./Poligonos/Poli_18";
import Poli_18v from "./Poligonos/Poli_18v";
import * as Location from "expo-location";
import BottomSheet, {
  BottomSheetView,
 
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import Modal from "../../components/Modal";


const Linea18 = ({ navigation }) => {
    /* Info de la linea 18 */
const Lineas18=[//26
{
  id:"1",
  titulo:"Av. Viedma Y Walter Vega"
},{
  id:"2",
  titulo:"Av. Viedma Y 27 De Mayo"
},{
  id:"3",
  titulo:"Av. Viedma \nY Hormando Balcazar"
},{
  id:"4",
  titulo:"Av. Viedma \nY Humberto Riva"
},{
  id:"5",
  titulo:"Av. Uruguay \nY Bolívar (Cementerio General)"
},{
  id:"6",
  titulo:"Av. Uruguay Y Berlín"
},{
  id:"7",
  titulo:"Av. Uruguay \nY Av. Trinidad"
},{
  id:"8",
  titulo:"Av. Uruguay Y Campero"
},{
  id:"9",
  titulo:"Av. Uruguay Y Aroma"
},{
  id:"10",
  titulo:"Av. Cañoto Y Libertad"
},{
  id:"11",
  titulo:"Av. Cañoto Y México"
},{
  id:"12",
  titulo:"Av. Cañoto Y Buenos Aires"
},{
  id:"13",
  titulo:"Av. Cañoto Y Alameda Junín"
},{
  id:"14",
  titulo:"Av. Cañoto \nY Av. Saucedo Sevilla"
},{
  id:"15",
  titulo:"Av. Cañoto \nY Montero"
},{
  id:"16",
  titulo:"Av. Cañoto \nY Vasquez Machicado"
},{
  id:"17",
  titulo:"Av. Cañoto E Itatines"
},{
  id:"18",
  titulo:"Av. Cañoto Y Chané"
},{
  id:"19",
  titulo:"Av. Irala\nY Av. Ejército Nacional"
},{
  id:"20",
  titulo:"Av. Irala Y Av. Velaverde"
},{
  id:"21",
  titulo:"Av. Irala Y Santiestevan"
},{
  id:"22",
  titulo:"Av. Irala Y Av. Las Américas"
},{
  id:"23",
  titulo:"Avenida Irala, 207"
},{
  id:"24",
  titulo:"Av. Irala Y Tarija"
},
{
  id:"25",
  titulo:"Av. Viedma Y Walter Vega"
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
  const [estado] = useState({
    origen: {
      latitude: -17.79056,
      longitude: -63.17201,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0942,
    },
    destino: {
      latitude: -17.79095,
      longitude: -63.17244,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0942,
    },
  });

  const mapRef = useRef();
  const toastRef = useRef();
  const { origen, destino } = estado;
  //linea 18
  const Linea18i = () => {
    toastRef.current.show("Linea 18: Ruta de partida");
  };
  const Linea18v = () => {
    toastRef.current.show("Linea 18: Ruta de vuelta");
  };
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
          mapPadding={{ top: 395 }}
        >
          <Marker
            coordinate={origen} /* marcador de inicio */
            image={imagenPath.icCurLoc} /* cambio de imagen del marker */
            title="Origen"
            description="Ruta de partida"
          />

          <Marker
            coordinate={destino} /* marcador de destino */
            image={imagenPath.icGreenMarker} /* cambia de imagen del default */
            title="Destino"
          />

          <Poli_18 onPress={Linea18i} />
          <Poli_18v onPress={Linea18v} />
        </MapView>
         {/* vista informativa */}
         <View style={styles.card}>
        <Text>Ruta de partida:<Text style={{color:"turquoise"}}> ───────────</Text> </Text>
        <Text>Ruta de vuelta:<Text style={{color:"ivory",backgroundColor:"#ED4C67"}}> ─ ─ ─ ─ ─ ─ ─ ─</Text></Text>
            
        </View>
        {/* btn desplegable*/}
        <View style={styles.btnVerMenu}>
          <TouchableOpacity onPress={() => handledSnapPress(0)}>
            <View style={styles.btnPlus}>
              <Image
                source={imagenPath.puntero}
                style={{ width: 80, height: 40, tintColor: "#ffffff" }}
              ></Image>
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
            <Image source={imagenPath.linea18} style={styles.imagen}></Image>
            <View style={styles.cardContent}>
              <Text style={styles.titulo}>Linea 18</Text>
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
          {Lineas18.map((l,key)=>{
            return(
             <View key={key}>
             <Text style={styles.TextoMenu}>{l.titulo}</Text>
             <Image source={imagenPath.icono} style={styles.icono} />
           </View>
           );
          })}
          <Text style={styles.TextoMenu}></Text>
        </BottomSheetScrollView>
        <View style={{marginBottom:30}}/>
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
        <Image source={imagenPath.linea18} style={styles.ImagenModal}></Image>
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
    marginTop: -30,
  },
});
export default Linea18;