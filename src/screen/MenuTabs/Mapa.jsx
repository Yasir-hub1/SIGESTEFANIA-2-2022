/* Radio de lineas activas */
import Linea1i from "../LineasActiva/Linea1i";
import Linea1v from "../LineasActiva/Linea1v";

import Linea2ii from "../LineasActiva/Linea2ii";
import Linea2vv from "../LineasActiva/Linea2vv";

import Linea5ii from "../LineasActiva/Linea5ii";
import Linea5vv from "../LineasActiva/Linea5vv";

import Linea8ii from "../LineasActiva/Linea8ii";
import Linea8vv from "../LineasActiva/Linea8vv";

import Linea9ii from "../LineasActiva/Linea9ii";
import Linea9vv from "../LineasActiva/Linea9vv";

import Linea10ii from "../LineasActiva/Linea10ii";
import Linea10vv from "../LineasActiva/Linea10vv";

import Linea11ii from "../LineasActiva/Linea11ii";
import Linea11vv from "../LineasActiva/Linea11vv";

import Linea16ii from "../LineasActiva/Linea16ii";
import Linea16vv from "../LineasActiva/Linea16vv";

import Linea17ii from "../LineasActiva/Linea17ii";
import Linea17vv from "../LineasActiva/Linea17vv";

import Linea18ii from "../LineasActiva/Linea18ii";
import Linea18vv from "../LineasActiva/Linea18vv";



import React, { useState, useRef, useEffect, useCallback,useMemo } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  Alert,
  Button
} from "react-native";
import MapView, {
  AnimatedRegion,
  Animated,
  Circle,
  Marker,
  Callout,
  Polyline,
} from "react-native-maps";
import Toast from "react-native-easy-toast";
import * as Location from "expo-location";
import imagenPath from "../imagenPath";

import Modal from "../../components/Modal";

import MapViewDirections from "react-native-maps-directions";

/* menu dezplegable */
import BottomSheet, {
  BottomSheetView,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";



const Mapa = ({ navigation }) => {
 

 
  let PA = [];
  let PB = [];
  let rutasC = [];
  //*Plan primera más corta
  let primeraRD = [];
  //************ */
  let activar = false;
  let PuntosA = [];
  let PuntosB = [];
  let PuntosI = [];
  let PuntosD = []; //PUNTOS DIRECTOS DE A hacia B
  let NODO = [];
  let coordA = [];
  let coordB = [];

  let coorMarker = {
    latitude: 0,
    longitude: 0,
  };

  /* Ubicacion del usuario  */
  const [location, setlocation] = useState(null);

  /* hook para el boton despegable */
  const sheetRef = useRef(null);
  const [IsOpen, setIsOpen] = useState(true);

  const snapPoints = ["60%", "75%"];

  const handledSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
    setIsOpen(true);
  }, []);
  const handleClosePress = () => sheetRef.current.close()
  /* estado para el origen del mapa */
  const [Origen, setOrigen] = useState(null);

  // Solicitar permisos justo después de iniciar la aplicación
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

        setlocation({
          latitude: Userlocal.coords.latitude,
          longitude: Userlocal.coords.longitude,
          latitudeDelta: 0.0007,
          longitudeDelta: 0.0007,
        });
        setOrigen({
          latitude: Userlocal.coords.latitude,
          longitude: Userlocal.coords.longitude,
          latitudeDelta: 0.0077,
          longitudeDelta: 0.0077,
        });
        setPin1({
          latitude: Userlocal.coords.latitude,
          longitude: Userlocal.coords.longitude,
        });
        setMarkerB({
          latitude: Userlocal.coords.latitude,
          longitude: Userlocal.coords.longitude,
        });
      }
    })();
  }, []);


  /* estado del marker con el circle */
  const [Pin1, setPin1] = useState({ latitude: 0, longitude: 0 });
  console.log("Pin1 latitude " + JSON.stringify(Pin1));

  /* Marcador B */

  const [MarkerB, setMarkerB] = useState({ latitude: 0, longitude: 0 });

  const [estado] = useState({
    origen: {
      latitude: -17.79056,
      longitude: -63.17201,
      latitudeDelta: 0.00007,
      longitudeDelta: 0.00007,
    },
  });
  const mapRef = useRef();
  const toastRef = useRef();
  const { origen } = estado;

  /* metodos de mensaje al hacer click en los poligonos*/
  /* linea 1 */


  /* tiempo y duracion del usuario */
  const [Radio, SetRadio] = useState({
    distancia: 0,
    duracion: 0,
  });
  function RellenarRutas() {
    let rutas = [];

    rutas.push({
      nombre: "L1",
    });
    rutas.push({
      nombre: "L2",
    });
    rutas.push({
      nombre: "L5",
    });
    rutas.push({
      nombre: "L8",
    });
    rutas.push({
      nombre: "L9",
    });
    rutas.push({
      nombre: "L10",
    });
    rutas.push({
      nombre: "L11",
    });
    rutas.push({
      nombre: "L16",
    });
    rutas.push({
      nombre: "L17",
    });
    rutas.push({
      nombre: "L18",
    });
    return rutas;
  }

  function repiteAB(K, Puntos) {
    //  console.log("DENTRO DE REPITE, PA: " + JSON.stringify(Puntos) + ", K: " + K);
    for (let i = 0; i < Puntos.length; i++) {
      if (parseInt(K) == parseInt(Puntos[i].c)) {
        return true;
      }
    }
    return false;
  }

  function devuelveRuta(LS) {
    if (LS == "L1I") {//Empieza linea 1
      return Linea1i;
    } else if (LS == "L1V") {
      return Linea1v;
    } else if (LS == "L2I") {//Empieza linea 2
      return Linea2ii;
    } else if (LS == "L2V") {
      return Linea2vv;
    } else if (LS == "L5I") {//Empieza linea 5
      return Linea5ii;
    } else if (LS == "L5V") {
      return Linea5vv;
    } else if (LS == "L8I") {//Empieza linea 8
      return Linea8ii;
    } else if (LS == "L8V") {
      return Linea8vv;
    } else if (LS == "L9I") {//Empieza linea 9
      return Linea9ii;
    } else if (LS == "L9V") {
      return Linea9vv;
    } else if (LS == "L10I") {//Empieza linea 10
      return Linea10ii;
    } else if (LS == "L10V") {
      return Linea10vv;
    } else if (LS == "L11I") {//Empieza linea 11
      return Linea11ii;
    } else if (LS == "L11V") {
      return Linea11vv;
    } else if (LS == "L16I") {//Empieza linea 16
      return Linea16ii;
    } else if (LS == "L16V") {
      return Linea16vv;
    } else if (LS == "L17I") {//Empieza linea 17
      return Linea17ii;
    } else if (LS == "L17V") {
      return Linea17vv;
    } else if (LS == "L18I") {//Empieza linea 18
      return Linea18ii;
    } else if (LS == "L18V") {
      return Linea18vv;
    }
  }
  function recorridoAdelante(i, ruta, radio, marcador, array) {
    let cn = i;
    // console.log("DESDE RECORRIDO ADELANTE: " + "i: " + i + "RUTA: " + JSON.stringify(ruta.length));
    while (cn < ruta.length) {
      let ds = ((parseFloat(ruta[cn].latitude) - parseFloat(marcador.latitude)) ** 2) + ((parseFloat(ruta[cn].longitude) - parseFloat(marcador.longitude)) ** 2);
      if (ds <= parseFloat(radio) ** 2) {
        ds = (ds) ** (1 / 2);
        array.push({
          c: cn,
          d: ds
        });

      } else {
        cn = ruta.length;
      }
      cn++;
    }
  }
  function recorridoAtras(i, ruta, radio, marcador, array) {
    console.log("DESDE RECORRIDO ADELANTE: " + "i: " + i + "RUTA: " + JSON.stringify(ruta.length));
    let cn = i - 1;
    while (cn >= 0) {
      let ds = ((parseFloat(ruta[cn].latitude) - parseFloat(marcador.latitude)) ** 2) + ((parseFloat(ruta[cn].longitude) - parseFloat(marcador.longitude)) ** 2);
      if (ds <= parseFloat(radio) ** 2) {
        ds = (ds) ** (1 / 2);
        array.push({
          c: cn,
          d: ds
        });

      } else {
        cn = -1;
      }
      cn--;
    }
  }
  function RadioP(puntoC, puntoP, radio) {
    if ((((parseFloat(puntoP.latitude) - parseFloat(puntoC.latitude)) ** 2) + ((parseFloat(puntoP.longitude) - parseFloat(puntoC.longitude)) ** 2)) < parseFloat(radio) ** 2) {
      return true;
    } else {
      return false;
    }
  }
  function posmenor(array) {
    if (array.length > 0) {
      let k = 0;
      let m = array[k].d;
      for (let i = 1; i < array.length; i++) {
        //console.log("MENOR ACTUAL: "+m+", comparacion: "+parseFloat(array[i].d));
        if (parseFloat(m) > parseFloat(array[i].d)) {
          k = i;
          m = parseFloat(array[k].d);
        }
      }
      return k;
    }
    return -1;
  }
  function verificaRadio(i, punto, PuntoB, PuntoA) {//i subindice en del punto que es la ruta que se sigue de una ruta que pasa por el marcador A, k subindice da donde se encuentra el punto que pasa por el marcador B de la ruta B
    // for (let j = k; j >= 0; j--) {
    let ruta = devuelveRuta(PuntoB.ruta);

    let k = PuntoB.c;
    while (k >= 0) {
      if (RadioP(punto, ruta[k], 0.000938184)) {//radio 100 metros
        PuntosI.push({
          ca: i,  //posición que encuentra en la ruta A
          ra: PuntoA.ruta,
          cb: k,  //posición que encuentra en la ruta B
          rb: PuntoB.ruta
        });
        return true;
      }
      k = k - 1;
    }

    return false;
  }
  function repiteLineaAB(sentido, Puntos) {
    for (let i = 0; i < Puntos.length; i++) {
      if (sentido == Puntos[i].ruta)
        return i;
    }
    return -1;
  }

  function puntoInterseccion(i, j, PuntosA, PuntosB) {//Nombre se la linea y sentido
    // console.log("DESDE PUNTO DE INTERSECCION, PUNTOS A: " + JSON.stringify(PuntosA) + ", PUNTOS B: " + JSON.stringify(PuntosB));
    // console.log("DESDE PUNTO DE INTERSECCION, PUNTOS A: " + JSON.stringify(PuntosA[i]) + ", PUNTOS B: " + JSON.stringify(PuntosB[j]));

    let posAenB = repiteLineaAB(PuntosA[i].ruta, PuntosB);
    let posBenA = repiteLineaAB(PuntosB[j].ruta, PuntosA);

    let rutaA = devuelveRuta(PuntosA[i].ruta);
    let rutaB = devuelveRuta(PuntosB[j].ruta);
    if (posAenB >= 0 && posBenA >= 0) {//PRIMER CASO EN QUE LAS DOS RUTAS DE LOS DOS PUNTOS PASAN EN A Y B
      if (PuntosA[i].c < PuntosB[posAenB].c && PuntosB[j].c > PuntosA[posBenA].c) {
        //    console.log("DOS LINEAS DISTINTAS PASAN POR AMBOS PUNTOS");
        let inicialB = PuntosA[posBenA].c;
        //  console.log("inicial B: " + PuntosA[posBenA].c);
        //console.log("inicial A: " + PuntosA[i].c);
        //console.log("final B: " + PuntosB[j].c);
        //console.log("final A: " + PuntosB[posAenB].c);
        let b = true;
        // let contador = 0;
        let posi = 0;
        for (let m = PuntosA[i].c; m < PuntosB[posAenB].c; m++) {
          b = true;

          while (inicialB < PuntosB[j].c && b == true) {
            if (RadioP(rutaA[m], rutaB[inicialB], 0.000938184)) {
              b = false;
              posi = inicialB;
            } else {
              inicialB++;
            }
          }
          if (inicialB == PuntosB[j].c) {
            PuntosI.push({
              ca: m,
              ra: PuntosA[i].ruta,
              cb: posi,
              rb: PuntosB[j].ruta
            });
            return true;
          }
        }
        return false;
      } else {
        return false;
      }
    } else {
   
      return false;
    }
    
  }


  function distancia(P0, P1, ruta) {//0,1//2
    let d = 0;
    //console.log("DESDE DISTANCIA: P0: " + P0 + ", P1: " + P1 + ", tamaño ruta: " + ruta.length);
    if (P0 < ruta.length && P1 < ruta.length) {
      for (let i = P0; i < P1; i++) {
        d = d + ((((ruta[i + 1].latitude - ruta[i].latitude) ** 2) + ((ruta[i + 1].longitude - ruta[i].longitude) ** 2)) ** (1 / 2));
      }
    }
    //console.log("distancia: " + d);
    return parseFloat(d);
  }

  function tiempo(d, v) {
    return d / v;
  }
  function menor(VectorD) {
    let menor;
    let pos = -1;
    if (VectorD.length > 0) {
      menor = parseFloat(VectorD[0].distancia);
      pos = 0;
      for (let i = 1; i < VectorD.length; i++) {

        if (parseFloat(menor) > parseFloat(VectorD[i].distancia)) {
          pos = i;
          menor = parseFloat(VectorD[i].distancia);
        }

      }
    }

    return pos;
  }
  function llenarVector(VectorD) {
    let vector = [];
    for (let i = 0; i < VectorD.length; i++) {
      vector.push(VectorD[i]);
    }
    return vector;
  }
  function OrdenarRutaMenor(VectorD) {
    let aux = llenarVector(VectorD);
    //console.log("auxiliar menor: " + JSON.stringify(aux));
    let ordenado = [];
    let pi;
    if (VectorD.length > 0) {
      for (let i = 0; i < VectorD.length; i++) {
        pi = menor(aux);
        //console.log("posicion menor: " + pi);
        if (pi != -1) {
          ordenado.push(aux[pi]);
          aux.splice(pi, 1);
        }
      }
    }

    return ordenado;
  }

  const rutaMasCorta = (c) => {
    let rutaAuxiliar = [];
    let kmAd;
    let kmBd;
    let dAd;
    let dBd;
    let tiempoAd;
    let tiempoBd;
    let rutaAd;
    let rutaBd;
    for (let j = 0; j < PuntosD.length; j++) {//oa,pa,ra,ob,pb,rb
      rutaAd = devuelveRuta(PuntosD[j].ra);
      rutaBd = devuelveRuta(PuntosD[j].rb);
      //console.log("RUTA AD: " + rutaAd.length);
      //console.log("POS OD: " + PuntosD[j].oa + ", POS PA: " + PuntosD[j].pa);
      dAd = parseFloat(distancia(PuntosD[j].oa, PuntosD[j].pa, rutaAd));

      kmAd = (dAd * 0.1) / 0.000938184;
      tiempoAd = tiempo(kmAd, 22) * 60;
      tiempoAd = Math.round((tiempoAd + Number.EPSILON) * 100) / 100;
     
      dBd = parseFloat(distancia(PuntosD[j].pb, PuntosD[j].ob, rutaBd));

      kmBd = (dBd * 0.1) / 0.000938184;
      tiempoBd = tiempo(kmBd, 22) * 60;
      tiempoBd = Math.round((tiempoBd + Number.EPSILON) * 1000) / 1000;
     
      rutaAuxiliar.push({
        oa: PuntosD[j].oa,
        ca: PuntosD[j].pa,
        ra: PuntosD[j].ra,
        da: kmAd,
        ta: tiempoAd,
        ob: PuntosD[j].ob,
        cb: PuntosD[j].pb,
        rb: PuntosD[j].rb,
        db: kmBd,
        tb: tiempoBd,
        distancia: parseFloat(kmAd + kmBd),
        tiempo: (Math.round((parseFloat(tiempoAd + tiempoBd) + Number.EPSILON) * 1000) / 1000)
      });
    }
    let kmAn;
    let kmBn;
    let dAn;
    let dBn;
    let tiempoAn;
    let tiempoBn;
    let rutaAn;
    let rutaBn;

    for (let i = 0; i < NODO.length; i++) {//oa,pa,ra,ob,pb,rb
      rutaAn = devuelveRuta(NODO[i].ra);
      rutaBn = devuelveRuta(NODO[i].rb);
      //  console.log("RUTA AD: " + rutaAn.length);

      dAn = parseFloat(distancia(parseInt(NODO[i].oa), parseInt(NODO[i].ca), rutaAn));

      kmAn = (dAn * 0.1) / 0.000938184;
      // console.log("distancia KM A: " + kmAn);
      tiempoAn = tiempo(kmAn, 22) * 60;
      tiempoAn = Math.round((tiempoAn + Number.EPSILON) * 100) / 100;

      //console.log("tiempo A: " + tiempoAn);
      //console.log("RUTA AD: " + rutaBn.length);

      dBn = parseFloat(distancia(parseInt(NODO[i].cb), parseInt(NODO[i].ob), rutaBn));

      kmBn = (dBn * 0.1) / 0.000938184;
      //console.log("distancia KM B: " + kmBn);
      tiempoBn = tiempo(kmBn, 22) * 60;
      tiempoBn = Math.round((tiempoBn + Number.EPSILON) * 1000) / 1000;

    
      rutaAuxiliar.push({
        oa: NODO[i].oa,
        ca: NODO[i].ca,
        ra: NODO[i].ra,
        da: kmAn,
        ta: tiempoAn,
        ob: NODO[i].ob,
        cb: NODO[i].cb,
        rb: NODO[i].rb,
        db: kmBn,
        tb: tiempoBn,
        distancia: parseFloat(kmAn + kmBn),
        tiempo: (Math.round((parseFloat(tiempoAn + tiempoBn) + Number.EPSILON) * 1000) / 1000)
      });
    }
    //  console.log("rutas auxiliares: " + JSON.stringify(rutaAuxiliar));
    console.log("rutas auxiliares antes: " + JSON.stringify(rutaAuxiliar));
    rutaAuxiliar = OrdenarRutaMenor(rutaAuxiliar);
    //console.log("rutas auxiliares: " + JSON.stringify(rutaAuxiliar));
    for (let k = 0; k < rutaAuxiliar.length; k++) {//10
      if (k < c) {//5
        rutasC.push(rutaAuxiliar[k]);
      } else {
        k = rutaAuxiliar.length;
      }

    }

    if (rutasC.length > 0) {
      primeraRD = rutasC[0];
      // console.log("DESDE PRIMERA R: " + JSON.stringify(primeraRD));
      //coordA = llenarCoord(rutasC[0].oa, rutasC[0].ca, devuelveRuta(rutasC[0].ra));
      //coordB = llenarCoord(rutasC[0].cb, rutasC[0].ob, devuelveRuta(rutasC[0].rb));
    }
    //setactivo(null);
    console.log("rutas Cortas: " + JSON.stringify(rutasC));
  }
  const interseccion = (a, b) => {
    let valor = [];
    let coord1 = [];
    let coord2 = [];
    let l = 0;
    console.log("DESDE INTERSECCION, puntos A: " + JSON.stringify(PuntosA) + ", puntos B: " + JSON.stringify(PuntosB))
    if (PuntosA.length > 0 && PuntosB.length > 0) {
      //  console.log("DESDE INTERSECCION");
      for (let i = 0; i < PuntosA.length; i++) {

        // console.log("DENTRO DE INTERSECCION, PUNTOS DE A: " + JSON.stringify(PuntosA[i]));
        for (let j = 0; j < PuntosB.length; j++) {

          if (PuntosA[i].ruta != PuntosB[j].ruta) {
            if (puntoInterseccion(i, j, PuntosA, PuntosB)) {
              valor = PuntosI[PuntosI.length - 1];
              if (parseInt(PuntosA[i].c) <= parseInt(valor.ca) && parseInt(valor.cb) <= parseInt(PuntosB[j].c)) {
                //    let rutaA = devuelveRuta(PuntosA[i].ruta);
                //  let rutaB = devuelveRuta(PuntosB[j].ruta);
                //rutaA[Nodo[0].ca]
                NODO.push({
                  oa: PuntosA[i].c,
                  ca: valor.ca,
                  ra: valor.ra,
                  ob: PuntosB[j].c,
                  cb: valor.cb,
                  rb: valor.rb
                });
              }
            }
          } else {
            console.log("ENTRA MISMA LINEA: " + JSON.stringify(PuntosA[i]) + ", " + JSON.stringify(PuntosB[j]));
            if (parseInt(PuntosA[i].c) <= parseInt(PuntosB[j].c)) {

              PuntosD.push({
                oa: PuntosA[i].c,
                pa: PuntosB[j].c,
                ra: PuntosA[i].ruta,
                ob: PuntosB[j].c,
                pb: PuntosB[j].c,
                rb: PuntosB[j].ruta
              });
            } else {
              let rutaA = devuelveRuta(PuntosA[i].ruta);
              if (RadioP(rutaA[rutaA.length - 1], rutaA[0], 0.000938184)) {
                console.log("ENTRA RUTAS IGUALES, CON INTERSECCION")
                NODO.push({
                  oa: PuntosA[i].c,
                  ca: rutaA.length - 1,
                  ra: PuntosA[i].ruta,
                  ob: PuntosB[j].c,
                  cb: 0,
                  rb: PuntosB[j].ruta
                });
              }
            }
          }
        }
      }
    } else {
      console.log("Entra a interseccion, pero no hace nada");
    }

  }
  const calculo = (a, b) => {
    let rutas = RellenarRutas();
    //console.log("DEVUELVE RUTA DESDE CALCULO: "+JSON.stringify(devuelveRuta("L1I")));
    for (let i = 0; i < rutas.length; i++) {
      let idaA = PuntoRadioRuta(a, devuelveRuta(rutas[i].nombre + "I"), rutas[i].nombre + "I");
      let idaB = PuntoRadioRuta(b, devuelveRuta(rutas[i].nombre + "I"), rutas[i].nombre + "I");

      if (idaA.length > 0) {
        //  console.log("punto A ida: "+JSON.stringify(idaA[0]));
        if (repiteAB(idaA[0].c, PA) == false) {
          //popSentidoContrario(PA, "L1I");
          PuntosA.push(idaA[0]);
        }
      }
      if (idaB.length > 0) {

        //console.log("punto B ida: "+JSON.stringify(idaA[0]));
        if (repiteAB(idaB[0].c, PB) == false) {
          // popSentidoContrario(PB, "L1I");
          PuntosB.push(idaB[0]);
        }
      }
      let vueltaA = PuntoRadioRuta(a, devuelveRuta(rutas[i].nombre + "V"), rutas[i].nombre + "V");
      let vueltaB = PuntoRadioRuta(b, devuelveRuta(rutas[i].nombre + "V"), rutas[i].nombre + "V");
      // console.log("vueltaA L1: "+JSON.stringify(vueltaA));
      if (vueltaA.length > 0) {

        if (repiteAB(vueltaA[0].c, PA) == false) {

          //popSentidoContrario(PA, "L1I");
          PuntosA.push(vueltaA[0]);
        }
      }
      if (vueltaB.length > 0) {
        //  console.log("entra punto vuelta B")
        if (repiteAB(vueltaB[0].c, PB) == false) {
          // popSentidoContrario(PB, "L1I");

          PuntosB.push(vueltaB[0]);
        }
      }
    }
  }
  function RadioIntersecion(puntoC, puntoP) {
    if (
      parseFloat(
        (parseFloat(JSON.stringify(puntoP.latitude)) -
          parseFloat(puntoC.latitude)) **
        2
      ) +
      parseFloat(
        (parseFloat(JSON.stringify(puntoP.longitude)) -
          parseFloat(puntoC.longitude)) **
        2
      ) <=
      0.000938184 ** 2
    ) {
      return true;
    } else {
      return false;
    }
  }

  function PuntoRadioRuta(a, ruta, sentido) {
    let puntos = [];
    let p = [];
    let b = false;
    let puntoCerca = [];
    for (let i = 0; i < ruta.length; i++) {
      if (((ruta[i].latitude - a.latitude) ** 2 + (ruta[i].longitude - a.longitude) ** 2) <= 0.000938184 ** 2) {//50 metros a la redonda
        //   b = true;
        recorridoAdelante(i, ruta, 0.000938184, a, puntoCerca);
        recorridoAtras(i, ruta, 0.000938184, a, puntoCerca);

        //  console.log("DESDE PUNTO RADIO RUTA: " + JSON.stringify(puntoCerca));
        let m = posmenor(puntoCerca);
        if (m != -1) {
          p.push({
            c: puntoCerca[m].c,
            ruta: sentido
          });
          //  console.log("DESDE PUNTO RADIO EL MENOR: "+JSON.stringify(p));
          return p;
        }
       

      }
    }
    return puntos;
  }
  const trazarRutasA = (i, j, ruta) => {
    llenarcoordenasA(i, j, ruta);
    if (coordA.length > 0) {

      return (
        <Polyline
          coordinates={coordA}
          strokeColor="green"
          strokeWidth={4}
          lineCap="round"
          tappable={true}
          lineJoin="round"

        />
      );
    }
  }
  function llenarcoordenasA(i, j, ruta) {
    let coA = [];
    if (i < j) {
      for (let k = i; k <= j; k++) {
        coA.push(ruta[k]);
      }
    }
    console.log("DESDE LLENAR COORDENADAS A: " + coA.length);
    coordA = coA;
  }
  function llenarcoordenasB(i, j, ruta) {
    let coB = [];
    if (i < j) {
      for (let k = i; k <= j; k++) {
        coB.push(ruta[k]);
      }
    }
    coordB = coB;
  }
  const trazarRutasTrasbordo = (pA, pB) => {
    let coordenada = [];
    coordenada.push(pA);
    coordenada.push(pB);
    return (
      <Polyline
        coordinates={coordenada}
        strokeColor="black"
        strokeWidth={4}
        lineCap="round"
        tappable={true}
        lineJoin="round"

      />
    );

  }
  const trazarRutasB = (i, j, ruta, LSA, LSB) => {
    llenarcoordenasB(i, j, ruta);
    if (coordB.length > 0) {
      if (LSA != LSB) {
        coorMarker = {
          latitude: coordB[0].latitude,
          longitude: coordB[0].longitude
        }
      }
      return (
        <Polyline
          coordinates={coordB}
          strokeColor="red"
          strokeWidth={4}
          lineCap="round"
          tappable={true}
          lineJoin="round"

        />
      );
    }

  }
  const [activo, setactivo] = useState(null);
  function ponerPosicion(c) {
    console.log("entra funcion ponerposicion")
    if (c == 0) {
      setactivo(c);
      //return handledSnapPress(-1);
    } else if (c == 1) {
      setactivo(c);
    } else if (c == 2) {
      setactivo(c);
    } else if (c == 3) {
      setactivo(c);
    } else if (c == 4) {
      setactivo(c);
    } else {
      setactivo(null);
    }

  }

  //const [activar,setactivar]=useState(null);
  return (
    <View style={styles.map}>
      <MapView
        ref={mapRef}
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
        mapPadding={{ top: 335 }}
     
      >
        {/*MAINP */}
        {calculo(Pin1, MarkerB)}
        {/*console.log("PUNTOS A: " + JSON.stringify(PuntosA) + ", PUNTOS B: " + JSON.stringify(PuntosB))*/}
        {interseccion(Pin1, MarkerB)}
        {rutaMasCorta(5)}

      
        {console.log("****NODO" + JSON.stringify(NODO))}
        {console.log("****NODO tamaño: " + NODO.length)}
        {console.log("****NODO DIRECTO" + JSON.stringify(PuntosD))}
        {/**primero mas rapido */}
        {activo == 0 ? (trazarRutasA(primeraRD.oa, primeraRD.ca, devuelveRuta(primeraRD.ra))) : null}
        {activo == 0 ? (trazarRutasB(primeraRD.cb, primeraRD.ob, devuelveRuta(primeraRD.rb), primeraRD.ra, primeraRD.rb)) : null}
        {/**segundo mas rapido */}
        {activo == 1 ? (trazarRutasA(rutasC[1].oa, rutasC[1].ca, devuelveRuta(rutasC[1].ra))) : null}
        {activo == 1 ? (trazarRutasB(rutasC[1].cb, rutasC[1].ob, devuelveRuta(rutasC[1].rb), rutasC[1].ra, rutasC[1].rb)) : null}
        {/**tercero mas rapido */}
        {activo == 2 ? (trazarRutasA(rutasC[2].oa, rutasC[2].ca, devuelveRuta(rutasC[2].ra))) : null}
        {activo == 2 ? (trazarRutasB(rutasC[2].cb, rutasC[2].ob, devuelveRuta(rutasC[2].rb), rutasC[2].ra, rutasC[2].rb)) : null}
        {/**cuarta mas rapido */}
        {activo == 3 ? (trazarRutasA(rutasC[3].oa, rutasC[3].ca, devuelveRuta(rutasC[3].ra))) : null}
        {activo == 3 ? (trazarRutasB(rutasC[3].cb, rutasC[3].ob, devuelveRuta(rutasC[3].rb), rutasC[3].ra, rutasC[3].rb)) : null}
        {/**cuarta mas rapido */}
        {activo == 4 ? (trazarRutasA(rutasC[4].oa, rutasC[4].ca, devuelveRuta(rutasC[4].ra))) : null}
        {activo == 4 ? (trazarRutasB(rutasC[4].cb, rutasC[4].ob, devuelveRuta(rutasC[4].rb), rutasC[4].ra, rutasC[4].rb)) : null}



        {/* ////////////////////////// MARKADOR DE INTERSECCION //////////////*/}
        {/* marcador de interseccion */}
        <Marker
          coordinate={coorMarker}
          image={imagenPath.inter}
          tittle="Trasbordo">
          <Callout
            tooltip={false} /*  style={{ backgroundColor: "#ED4C67" }} */
          >
            <Text style={{ fontWeight: "bold" }}>Trasbordo</Text>
          </Callout>
        </Marker>


        {console.log("desde el markador interseccion " + JSON.stringify(coorMarker))}

        {/* Marker A */}
        <Marker
          tappable={true}
          coordinate={Pin1}
          image={imagenPath.a}
          draggable={true}
          tracksInfoWindowChanges={true}
          onDragStart={(e) => {
            // console.log("Inicio", e.nativeEvent.coordinate);
          }}
          onDragEnd={(e) => {
            // console.log("FIn", e.nativeEvent.coordinate);

            setPin1({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
            setactivo(null);
            console.log("A->", e.nativeEvent.coordinate);
          }}
        >

          <Callout
            tooltip={false} /*  style={{ backgroundColor: "#ED4C67" }} */
          >
            <Text style={{ fontWeight: "bold" }}>ORIGEN</Text>
          </Callout>
        </Marker>

        <Circle center={Pin1} radius={90} />

        {/* Marker B */}
        <Marker
          tappable={true}
          coordinate={MarkerB}
          image={imagenPath.icGreenMarker}
          draggable={true}
          tracksInfoWindowChanges={true}
          onDragStart={(e) => {
            // console.log("Inicio", e.nativeEvent.coordinate);
          }}
          onDragEnd={(e) => {
            // console.log("FIn", e.nativeEvent.coordinate);
            setMarkerB({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
            setactivo(null);
            console.log("B->", e.nativeEvent.coordinate);
          }}
        >
          <Callout
            tooltip={false} /*  style={{ backgroundColor: "#ED4C67" }} */
          >
            <Text style={{ fontWeight: "bold" }}>DESTINO</Text>
          </Callout>
        </Marker>

        <Circle center={MarkerB} radius={90} />
      </MapView>
      <Toast
        ref={toastRef}
        position="top"
        opacity={0.8}
        fadeOutDuration={1000}
      />
      {/* btn desplegable */}

      <View style={styles.btnVerMenu}>
        <TouchableOpacity onPress={() => handledSnapPress(0)}>
          <View style={styles.btnPlus}>
            <Image
              source={imagenPath.puntero}
              style={{ width: 80, height: 40, tintColor: "#ffffff" }}
            ></Image>
          </View>
        </TouchableOpacity>
        {/* btn Refrsh */}
        {/*  <TouchableOpacity onPress={() => requestPermissions()}>
          <View style={styles.btnindicador}>
            <Image
              source={imagenPath.user}
              style={{ width: 70, height: 70}}
            ></Image>
           
          </View>
        </TouchableOpacity> */}
      </View>

      {/* menu bottomSheet desplegable */}
      <BottomSheet
         style={styles.MenuDesplegable}
         ref={sheetRef}
         snapPoints={snapPoints}
         enablePanDownToClose={true}
         /*   onChange={handleSheetChange} */
         onClose={() => setIsOpen(false)}
         index={-1}
         handleHeight={50}
         animatedIndex={50}
      >
        {/*  mainsheet  <BottomSheetView style={styles.container}> */}

        <BottomSheetScrollView style={styles.container}>
          {/* Linea 1i */}
          {rutasC.length == 0 ? null : (<>
            {primeraRD ? (
              <>
                <TouchableOpacity style={styles.card}>
                  <View style={styles.cardContent}>
                    <Text style={styles.description}>{`Plan 1     Tiempo: ${primeraRD.tiempo} min`}</Text>
                    {primeraRD.db > 0 && primeraRD.da > 0 ? (
                      <>
                        <Text style={styles.date}>
                          1.- Iniciar en :
                          <Text style={{ color: "green" }}> {primeraRD.ra}</Text>
                          {/* <Text style={{ color: "black" }}> ───────</Text>{" "} */}
                          {"    "}<Text style={styles.date}>Tiempo: {primeraRD.ta} Min</Text>{`\n`}

                          <Text style={styles.date}>Distancia: {(Math.round((primeraRD.da + Number.EPSILON) * 100000) / 100000)} Km</Text>
                        </Text>
                        <Text style={styles.date}>2.- Trasbordo:<Text style={{ color: "red" }}> {primeraRD.rb}</Text>
                          {"  "}
                          <Text style={styles.date}>Tiempo: {primeraRD.tb} Min</Text>{`\n`}
                          <Text style={styles.date}>Distancia: {(Math.round((primeraRD.db + Number.EPSILON) * 100000) / 100000)}  KM</Text>
                        </Text>
                      </>) : primeraRD.da > 0 ? (<>

                        <Text style={styles.date}>
                          1.- Iniciar en :
                          <Text style={{ color: "green" }}> {primeraRD.ra}</Text>
                          {/* <Text style={{ color: "black" }}> ───────</Text>{" "} */}
                          {"    "}<Text style={styles.date}>Tiempo: {primeraRD.ta} Min</Text>{`\n`}

                          <Text style={styles.date}>Distancia: {(Math.round((primeraRD.da + Number.EPSILON) * 100000) / 100000)} Km</Text>
                        </Text>

                      </>) : primeraRD.db > 0 ? (<>

                        <Text style={styles.date}>
                          1.- Iniciar en :
                          <Text style={{ color: "green" }}> {primeraRD.rb}</Text>
                          {/* <Text style={{ color: "black" }}> ───────</Text>{" "} */}
                          {"    "}<Text style={styles.date}>Tiempo: {primeraRD.tb} Min</Text>{`\n`}

                          <Text style={styles.date}>Distancia: {(Math.round((primeraRD.db + Number.EPSILON) * 100000) / 100000)} Km</Text>
                        </Text>
                      </>) : null}
                    <Text style={styles.date}> Fin ruta<Text style={{ color: "black" }}></Text></Text>
                    <Button title="Ver ruta" color="red" onPress={() => { ponerPosicion(0); handleClosePress() }} />
                  </View>

                </TouchableOpacity>
              </>
            ) : null}
            {rutasC.length > 1 ? (
              <>
                <TouchableOpacity style={styles.card} >
                  <View style={styles.cardContent}>
                    <Text
                      style={styles.description}
                    >{`Plan 2     Tiempo: ${rutasC[1].tiempo} min`}</Text>
                    {(rutasC[1].db > 0 && rutasC[1].da > 0) ? (
                      <>
                        <Text style={styles.date}>
                          1.- Iniciar en :
                          <Text style={{ color: "green" }}> {rutasC[1].ra}</Text>
                          {/* <Text style={{ color: "black" }}> ───────</Text>{" "} */}
                          {"    "}<Text style={styles.date}>Tiempo: {rutasC[1].ta} Min</Text>{`\n`}

                          <Text style={styles.date}>Distancia: {(Math.round((rutasC[1].da + Number.EPSILON) * 100000) / 100000)} Km</Text>
                        </Text>
                        <Text style={styles.date}>2.- Trasbordo:<Text style={{ color: "red" }}> {rutasC[1].rb}</Text>
                          {"  "}
                          <Text style={styles.date}>Tiempo: {rutasC[1].tb} Min</Text>{`\n`}
                          <Text style={styles.date}>Distancia: {(Math.round((rutasC[1].db + Number.EPSILON) * 100000) / 100000)}  KM</Text>

                        </Text>
                      </>) : rutasC[1].da > 0 ? (<>

                        <Text style={styles.date}>
                          1.- Iniciar en :
                          <Text style={{ color: "green" }}> {rutasC[1].ra}</Text>
                          {/* <Text style={{ color: "black" }}> ───────</Text>{" "} */}
                          {"    "}<Text style={styles.date}>Tiempo: {rutasC[1].ta} Min</Text>{`\n`}

                          <Text style={styles.date}>Distancia: {(Math.round((rutasC[1].da + Number.EPSILON) * 100000) / 100000)} Km</Text>
                        </Text>

                      </>) : rutasC[1].db > 0 ? (<>

                        <Text style={styles.date}>
                          1.- Iniciar en :
                          <Text style={{ color: "green" }}> {rutasC[1].rb}</Text>
                          {/* <Text style={{ color: "black" }}> ───────</Text>{" "} */}
                          {"    "}<Text style={styles.date}>Tiempo: {rutasC[1].tb} Min</Text>{`\n`}

                          <Text style={styles.date}>Distancia: {(Math.round((rutasC[1].db + Number.EPSILON) * 100000) / 100000)} Km</Text>
                        </Text>
                      </>) : null}
                    <Text style={styles.date}>Fin ruta<Text style={{ color: "black" }}></Text></Text>
                    <Button title="Ver ruta" color="red" onPress={() => { ponerPosicion(1); handleClosePress() }} />
                  </View>

                </TouchableOpacity>
              </>
            ) : (null)}
            {rutasC.length > 2 ? (
              <>
                <TouchableOpacity style={styles.card} >
                  <View style={styles.cardContent}>
                    <Text
                      style={styles.description}
                    >{`Plan 3     Tiempo: ${rutasC[2].tiempo} min`}</Text>
                    {rutasC[2].db > 0 && rutasC[2].da > 0 ? (
                      <>
                        <Text style={styles.date}>
                          1.- Iniciar en :
                          <Text style={{ color: "green" }}> {rutasC[2].ra}</Text>
                          {/* <Text style={{ color: "black" }}> ───────</Text>{" "} */}
                          {"    "}<Text style={styles.date}>Tiempo: {rutasC[2].ta} Min</Text>{`\n`}

                          <Text style={styles.date}>Distancia: {(Math.round((rutasC[2].da + Number.EPSILON) * 100000) / 100000)} Km</Text>
                        </Text>
                        <Text style={styles.date}>2.- Trasbordo:<Text style={{ color: "red" }}> {rutasC[2].rb}</Text>
                          {"  "}
                          <Text style={styles.date}>Tiempo: {rutasC[2].tb} Min</Text>{`\n`}
                          <Text style={styles.date}>Distancia: {(Math.round((rutasC[2].db + Number.EPSILON) * 100000) / 100000)}  KM</Text>

                        </Text>
                      </>) : rutasC[2].da > 0 ? (<>

                        <Text style={styles.date}>
                          1.- Iniciar en :
                          <Text style={{ color: "green" }}> {rutasC[2].ra}</Text>
                          {/* <Text style={{ color: "black" }}> ───────</Text>{" "} */}
                          {"    "}<Text style={styles.date}>Tiempo: {rutasC[2].ta} Min</Text>{`\n`}

                          <Text style={styles.date}>Distancia: {(Math.round((rutasC[2].da + Number.EPSILON) * 100000) / 100000)} Km</Text>
                        </Text>

                      </>) : rutasC[2].db > 0 ? (<>

                        <Text style={styles.date}>
                          1.- Iniciar en :
                          <Text style={{ color: "green" }}> {rutasC[2].rb}</Text>
                          {/* <Text style={{ color: "black" }}> ───────</Text>{" "} */}
                          {"    "}<Text style={styles.date}>Tiempo: {rutasC[2].tb} Min</Text>{`\n`}

                          <Text style={styles.date}>Distancia: {(Math.round((rutasC[2].db + Number.EPSILON) * 100000) / 100000)} Km</Text>
                        </Text>
                      </>) : null}
                    <Text style={styles.date}>Fin ruta<Text style={{ color: "black" }}></Text></Text>
                    <Button title="Ver ruta" color="red" onPress={() => { ponerPosicion(2); handleClosePress() }} />
                  </View>

                </TouchableOpacity>
              </>
            ) : null}
            {rutasC.length > 3 ? (
              <>
                <TouchableOpacity style={styles.card}>
                  <View style={styles.cardContent}>
                    <Text
                      style={styles.description}
                    >{`Plan 4     Tiempo: ${rutasC[3].tiempo} min`}</Text>
                    {rutasC[3].db > 0 && rutasC[3].da > 0 ? (
                      <>
                        <Text style={styles.date}>
                          1.- Iniciar en :
                          <Text style={{ color: "green" }}> {rutasC[3].ra}</Text>
                          {/* <Text style={{ color: "black" }}> ───────</Text>{" "} */}
                          {"    "}<Text style={styles.date}>Tiempo: {rutasC[3].ta} Min</Text>{`\n`}

                          <Text style={styles.date}>Distancia: {(Math.round((rutasC[3].da + Number.EPSILON) * 100000) / 100000)} Km</Text>
                        </Text>
                        <Text style={styles.date}>2.- Trasbordo:<Text style={{ color: "red" }}> {rutasC[3].rb}</Text>
                          {"  "}
                          <Text style={styles.date}>Tiempo: {rutasC[3].tb} Min</Text>{`\n`}
                          <Text style={styles.date}>Distancia: {(Math.round((rutasC[3].db + Number.EPSILON) * 100000) / 100000)}  KM</Text>

                        </Text>
                      </>) : rutasC[3].da > 0 ? (<>

                        <Text style={styles.date}>
                          1.- Iniciar en :
                          <Text style={{ color: "green" }}> {rutasC[3].ra}</Text>
                          {/* <Text style={{ color: "black" }}> ───────</Text>{" "} */}
                          {"    "}<Text style={styles.date}>Tiempo: {rutasC[3].ta} Min</Text>{`\n`}

                          <Text style={styles.date}>Distancia: {(Math.round((rutasC[3].da + Number.EPSILON) * 100000) / 100000)} Km</Text>
                        </Text>

                      </>) : rutasC[3].db > 0 ? (<>

                        <Text style={styles.date}>
                          1.- Iniciar en :
                          <Text style={{ color: "green" }}> {rutasC[3].rb}</Text>
                          {/* <Text style={{ color: "black" }}> ───────</Text>{" "} */}
                          {"    "}<Text style={styles.date}>Tiempo: {rutasC[3].tb} Min</Text>{`\n`}

                          <Text style={styles.date}>Distancia: {(Math.round((rutasC[3].db + Number.EPSILON) * 100000) / 100000)} Km</Text>
                        </Text>
                      </>) : null}
                    <Text style={styles.date}>Fin ruta<Text style={{ color: "black" }}></Text></Text>
                    <Button title="Ver ruta" color="red" onPress={() => { ponerPosicion(3); handleClosePress() }} />
                  </View>

                </TouchableOpacity>
              </>
            ) : null}

            {rutasC.length > 4 ? (
              <>
                <TouchableOpacity style={styles.card}>
                  <View style={styles.cardContent}>
                    <Text
                      style={styles.description}
                    >{`Plan 5     Tiempo: ${rutasC[4].tiempo} min`}</Text>
                    {rutasC[4].db > 0 && rutasC[4].da > 0 ? (
                      <>
                        <Text style={styles.date}>
                          1.- Iniciar en :
                          <Text style={{ color: "green" }}> {rutasC[4].ra}</Text>
                          {/* <Text style={{ color: "black" }}> ───────</Text>{" "} */}
                          {"    "}<Text style={styles.date}>Tiempo: {rutasC[4].ta} Min</Text>{`\n`}

                          <Text style={styles.date}>Distancia: {(Math.round((rutasC[4].da + Number.EPSILON) * 100000) / 100000)} Km</Text>
                        </Text>
                        <Text style={styles.date}>2.- Trasbordo:<Text style={{ color: "red" }}> {rutasC[4].rb}</Text>
                          {"  "}
                          <Text style={styles.date}>Tiempo: {rutasC[4].tb} Min</Text>{`\n`}
                          <Text style={styles.date}>Distancia: {(Math.round((rutasC[4].db + Number.EPSILON) * 100000) / 100000)}  KM</Text>

                        </Text>
                      </>) : rutasC[4].da > 0 ? (<>

                        <Text style={styles.date}>
                          1.- Iniciar en :
                          <Text style={{ color: "green" }}> {rutasC[4].ra}</Text>
                          {/* <Text style={{ color: "black" }}> ───────</Text>{" "} */}
                          {"    "}<Text style={styles.date}>Tiempo: {rutasC[4].ta} Min</Text>{`\n`}

                          <Text style={styles.date}>Distancia: {(Math.round((rutasC[4].da + Number.EPSILON) * 100000) / 100000)} Km</Text>
                        </Text>

                      </>) : rutasC[4].db > 0 ? (<>

                        <Text style={styles.date}>
                          1.- Iniciar en :
                          <Text style={{ color: "green" }}> {rutasC[4].rb}</Text>
                          {/* <Text style={{ color: "black" }}> ───────</Text>{" "} */}
                          {"    "}<Text style={styles.date}>Tiempo: {rutasC[4].tb} Min</Text>{`\n`}

                          <Text style={styles.date}>Distancia: {(Math.round((rutasC[4].db + Number.EPSILON) * 100000) / 100000)} Km</Text>
                        </Text>
                      </>) : null}
                    <Text style={styles.date}>Fin ruta<Text style={{ color: "black" }}></Text></Text>
                    <Button title="Ver ruta" color="red" onPress={() => { ponerPosicion(4); handleClosePress() }} />
                  </View>

                </TouchableOpacity>
              </>
            ) : null}
          </>)}
          <View style={{ marginBottom: 100 }} />

          {/* componente de informacion de las rutas */}
        </BottomSheetScrollView>
        {/*    </BottomSheetView> */}

        {/*    </BottomSheetView> */}
      </BottomSheet>
    </View>
  );
};
const styles = StyleSheet.create({
  mapModal: {
    width: "100%",
    height: 590,
  },
  ViewModal: {
    width: "100%",
    height: 270,
    /*  borderRadius:10,
    borderColor:"#ED4C67",
    borderWidth:5 */
  },
  RadioUSers: {
    backgroundColor: "white",
    alignContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
  /* inicio de estilos del menu desplegable */
  container: {
    container: {
      flex: 1,
      marginTop: 20,
      backgroundColor: "#ED4C67",
    },
    tasks: {
      flex: 1,
    },
  },
  card: {
    shadowColor: "#ED4C67",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: "white",
    flexBasis: "46%",
    padding: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    borderLeftWidth: 3,
    borderTopWidth: 3,
    borderColor: "#ED4C67",
    width: "100%",
    marginLeft: 1.5,
    marginRight: 2.5,
  },
  btnVerMenu: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop: 400,
    marginRight: 10,
    position: "relative",
  },
  btnRefresh: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop: 370,
    marginRight: 10,
    position: "relative",
  },
  btnSalirModal: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop: -80,
    marginRight: 10,
    position: "relative",
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
  btnindicador: {
    width: 45,
    height: 45,
    marginTop: -10,
    marginBottom: 30,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  linea: {
    minHeight: "100%",
  },
  cardContent: {
    marginLeft: 2,
    marginTop: 7,
  },
  description: {
    fontSize: 18,
    flex: 1,
    color: "#008080",
    fontWeight: "bold",
  },
  date: {
    fontSize: 14,
    flex: 1,
    color: "#696969",
    marginTop: 5,
  },
  map: {
    flex: 1,
  },
});
export default Mapa;
