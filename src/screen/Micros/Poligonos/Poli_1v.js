import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { Polyline } from "react-native-maps";

const Poli_1v = ({ onPress = () => {} }) => {
  const [coordinates] = useState([
    {
      latitude: -17.78632,
      longitude: -63.10819,
    },
    {
      latitude: -17.7824,
      longitude: -63.10805,
    },
    {
      latitude: -17.77975,
      longitude: -63.10791,
    },
    {
      latitude: -17.77726,
      longitude: -63.10769,
    },
    {
      latitude: -17.77716,
      longitude: -63.10777,
    },
    {
      /* 23 */ latitude: -17.77713,
      longitude: -63.10788,
    },
    {
      latitude: -17.77714,
      longitude: -63.10836,
    },
    {
      latitude: -17.77754,
      longitude: -63.10942,
    },
    {
      latitude: -17.78024,
      longitude: -63.11651,
    },
    {
      latitude: -17.77827,
      longitude: -63.11788,
    },
    {
      /* 27 */ latitude: -17.77795,
      longitude: -63.11723,
    },
    {
      latitude: -17.77719,
      longitude: -63.1176,
    },
    {
      latitude: -17.77771,
      longitude: -63.11911,
    },
    {
      latitude: -17.77565,
      longitude: -63.11974,
    },
    {
      latitude: -17.77499,
      longitude: -63.11992,
    },
    {
      latitude: -17.77444,
      longitude: -63.11784,
    },
    {
      latitude: -17.77316,
      longitude: -63.11818,
    },
    {
      latitude: -17.77329,
      longitude: -63.11876,
    },
    {
      latitude: -17.77084,
      longitude: -63.11891,
    },
    {
      latitude: -17.77098,
      longitude: -63.11979,
    },
    {
      latitude: -17.76953,
      longitude: -63.12057,
    },
    {
      latitude: -17.77098,
      longitude: -63.12415,
    },
    {
      latitude: -17.77943,
      longitude: -63.14632,
    },
    {
      latitude: -17.77978,
      longitude: -63.14684,
    },
    {
      latitude: -17.78002,
      longitude: -63.14694,
    },
    {
      latitude: -17.7802,
      longitude: -63.14716,
    },
    {
      latitude: -17.78025,
      longitude: -63.14752,
    },
    {
      latitude: -17.7801,
      longitude: -63.14782,
    },
    {
      latitude: -17.78025,
      longitude: -63.14843,
    },
    {
      latitude: -17.78077,
      longitude: -63.14985,
    },
    {
      latitude: -17.78101,
      longitude: -63.1511,
    },
    {
      latitude: -17.78156,
      longitude: -63.15633,
    },
    {
      /* 33 */ latitude: -17.7823,
      longitude: -63.16452,
    },
    {
      latitude: -17.78233,
      longitude: -63.16535,
    },
    {
      /* 35 */ latitude: -17.78295,
      longitude: -63.17179,
    },
    {
      latitude: -17.78308,
      longitude: -63.17203,
    },
    {
      latitude: -17.78316,
      longitude: -63.1721,
    },
    {
      latitude: -17.78318,
      longitude: -63.17234,
    },
    {
      latitude: -17.78307,
      longitude: -63.17245,
    },
    {
      latitude: -17.78282,
      longitude: -63.17237,
    },
    {
      latitude: -17.78194,
      longitude: -63.17251,
    },
    {
      latitude: -17.78229,
      longitude: -63.17634,
    },
    {
      latitude: -17.78505,
      longitude: -63.17578,
    },
    {
      latitude: -17.78646,
      longitude: -63.1755,
    },
    {
      latitude: -17.78721,
      longitude: -63.17871,
    },
    {
      latitude: -17.7888,
      longitude: -63.18513,
    },
    {
      latitude: -17.78936,
      longitude: -63.18735,
    },
    {
      latitude: -17.78937,
      longitude: -63.18745,
    },
    {
      latitude: -17.78951,
      longitude: -63.18745,
    },
    {
      latitude: -17.79051,
      longitude: -63.18724,
    },
    {
      latitude: -17.7931,
      longitude: -63.18693,
    },
    {
      latitude: -17.7932,
      longitude: -63.18687,
    },
    {
      latitude: -17.7933,
      longitude: -63.18682,
    },
    {
      latitude: -17.79344,
      longitude: -63.18693,
    },
    {
      latitude: -17.79342,
      longitude: -63.18719,
    },
    {
      latitude: -17.7935,
      longitude: -63.18744,
    },
    {
      latitude: -17.79793,
      longitude: -63.19243,
    },
    {
      latitude: -17.79811,
      longitude: -63.19251,
    },
    {
      latitude: -17.79821,
      longitude: -63.19257,
    },
    {
      latitude: -17.79831,
      longitude: -63.19281,
    },
    {
      latitude: -17.8038,
      longitude: -63.199,
    },
    {
      latitude: -17.80539,
      longitude: -63.19752,
    },
    {
      latitude: -17.80609,
      longitude: -63.19683,
    },
    {
      latitude: -17.80633,
      longitude: -63.1972,
    },
    {
      latitude: -17.80482,
      longitude: -63.19844,
    },
    {
      latitude: -17.80532,
      longitude: -63.19903,
    },
    {
      latitude: -17.80671,
      longitude: -63.19773,
    },
    {
      latitude: -17.80865,
      longitude: -63.2005,
    },
    {
      latitude: -17.81653,
      longitude: -63.19922,
    },
    {
      latitude: -17.81853,
      longitude: -63.19881,
    },
    {
      latitude: -17.81873,
      longitude: -63.19881,
    },
    {
      latitude: -17.81932,
      longitude: -63.19773,
    },
    {
      latitude: -17.81973,
      longitude: -63.19845,
    },
    {
      /* 85 */ latitude: -17.82555,
      longitude: -63.20146,
    },
    {
      latitude: -17.82841,
      longitude: -63.20294,
    },
    {
      latitude: -17.82865,
      longitude: -63.20302,
    },
    {
      latitude: -17.83044,
      longitude: -63.20155,
    },
    {
      latitude: -17.83541,
      longitude: -63.19697,
    },
    {
      latitude: -17.83766,
      longitude: -63.19954,
    },
    {
      latitude: -17.83893,
      longitude: -63.20104,
    },
    {
      latitude: -17.83933,
      longitude: -63.20016,
    },
    {
      latitude: -17.8429,
      longitude: -63.20199,
    },
    {
      latitude: -17.84382,
      longitude: -63.20014,
    },
    {
      latitude: -17.84704,
      longitude: -63.20177,
    },
    {
      latitude: -17.84666,
      longitude: -63.20248,
    },
    {
      latitude: -17.84838,
      longitude: -63.20348,
    },
    {
      latitude: -17.84893,
      longitude: -63.20383,
    },
    {
      latitude: -17.84997,
      longitude: -63.20226,
    },
    {
      latitude: -17.85002,
      longitude: -63.20204,
    },
    {
      latitude: -17.85006,
      longitude: -63.20197,
    },
    {
      latitude: -17.85021,
      longitude: -63.20185,
    },
    {
      latitude: -17.85019,
      longitude: -63.20184,
    },
    {
      latitude: -17.85026,
      longitude: -63.20168,
    },
    {
      latitude: -17.85043,
      longitude: -63.20144,
    },
    {
      latitude: -17.85058,
      longitude: -63.20111,
    },
    {
      latitude: -17.85076,
      longitude: -63.20086,
    },
    {
      latitude: -17.8513,
      longitude: -63.20004,
    },
    {
      latitude: -17.85291,
      longitude: -63.20116,
    },
    {
      latitude: -17.85276,
      longitude: -63.20142,
    },
    {
      latitude: -17.85526,
      longitude: -63.20334,
    },
    {
      latitude: -17.85456,
      longitude: -63.20434,
    },
  ]);
  return (
    <Polyline
      coordinates={coordinates}
      strokeColor="red"
      strokeWidth={4}
      lineCap="round"
      tappable={true}
      lineJoin="round"
      onPress={onPress}
      lineDashPattern={[5]}

    />
  );
};

export default Poli_1v;

const styles = StyleSheet.create({});
