import { StyleSheet } from 'react-native'
import React,{useState} from 'react'
import  {  Polyline } from "react-native-maps";

const Poli_2i = ({onPress = () => {}}) => {
 
    const [coordinates] = useState([
        {
          latitude: -17.80619, 
          longitude:-63.11868
        },
        {
          latitude: -17.80522,
          longitude: -63.11856
        },
        {
          latitude: -17.80453,
          longitude: -63.11843
        },
        {
          latitude: -17.80317,
          longitude: -63.11773
        },
        {
          latitude: -17.80281,
          longitude: -63.1176
        },
        {
          latitude: -17.80251, 
          longitude:-63.11762
        },
        {
          latitude: -17.80237, 
          longitude:-63.1177
        },
        {
          latitude: -17.80235,
          longitude: -63.11867
        },
        {
          latitude: -17.80153,
          longitude: -63.1187
        },
        {
          latitude: -17.80018,
          longitude: -63.11864
        },
        {
          latitude: -17.79814,
          longitude: -63.11851
        },
        {
          latitude: -17.7979,
          longitude: -63.11862
        },
        {
          latitude: -17.79404,
          longitude: -63.11834
        },
        {
          latitude: -17.79061, 
          longitude:-63.11811
        },
        {
          latitude: -17.78844, 
          longitude:-63.118
        },
        {
          latitude: -17.78697,
          longitude: -63.11796
        },
        {
          latitude: -17.78613,
          longitude: -63.11791
        },
        {
          latitude: -17.78412, 
          longitude:-63.11822
        },
        {
          latitude: -17.78104,
          longitude: -63.11867
        },
        {
          latitude: -17.78154, 
          longitude:-63.1206
        },
        {
          latitude: -17.78329, 
          longitude:-63.12465
        },
        {
          latitude: -17.7817, 
          longitude:-63.12529
        },
        {
          latitude: -17.78124, 
          longitude:-63.12557
        },
        {
          latitude: -17.78069, 
          longitude:-63.12569
        },
        {
          latitude: -17.78015,
          longitude: -63.12595
        },
        {
          latitude: -17.7793, 
          longitude:-63.12409
        },
        {
          latitude: -17.77864, 
          longitude:-63.12269
        },
        {
          latitude: -17.77721,
          longitude: -63.12371
        },
        {
          latitude: -17.77475, 
          longitude:-63.1255
        },
        {
          latitude: -17.77237, 
          longitude:-63.12762
        },
        {
          latitude: -17.77128,
          longitude: -63.1249
        },
        {
          latitude: -17.77051, 
          longitude:-63.12293
        },
        {
          latitude: -17.77038,
          longitude: -63.123
        },
        {
          latitude: -17.77126, 
          longitude:-63.12519
        },
        {
          latitude: -17.77311, 
          longitude:-63.12992
        },
        {
          latitude: -17.77875, 
          longitude:-63.14487
        },
        {
          latitude: -17.77944,
          longitude: -63.1467
        },
        {
          latitude: -17.77939,
          longitude: -63.14702
        },
        {
          latitude: -17.77925,
          longitude: -63.14741
        },
        {
          latitude: -17.77957, 
          longitude:-63.14788
        },
        {
          latitude: -17.77993,
          longitude: -63.14832
        },
        {
          latitude: -17.78055,
          longitude: -63.14981
        },
        {
          latitude:-17.78105,
          longitude: -63.15306 
        },
        {
          latitude: -17.78194, 
          longitude:-63.16272
        },
        {
          latitude: -17.78234, 
          longitude:-63.16607
        },
        {
          latitude: -17.78291, 
          longitude:-63.17178
        },
        {
          latitude: -17.78287, 
          longitude:-63.17204
        },
        {
          latitude: -17.78281,
          longitude: -63.17227
        },
        {
          latitude: -17.78297, 
          longitude:-63.17244
        },
        {
          latitude: -17.78321, 
          longitude:-63.17231
        },
        {
          latitude: -17.78408, 
          longitude:-63.17218
        },
        {
          latitude: -17.78423,
          longitude: -63.17412
        },
        {
          latitude: -17.78437,
          longitude: -63.17596
        },
        {
          latitude: -17.78506,
          longitude: -63.17579
        },
        {
          latitude: -17.78576,
          longitude: -63.17563
        },
        {
          latitude: -17.78691, 
          longitude:-63.18126
        },
        {
          latitude: -17.78774, 
          longitude:-63.1862
        },
        {
          latitude: -17.78807, 
          longitude:-63.18723
        },
        {
          latitude: -17.78862,
          longitude: -63.18774
        },
        {
          latitude: -17.79258,
          longitude: -63.19074
        },
        {
          latitude: -17.79614,
          longitude: -63.19317
        },
        {
          latitude: -17.79708, 
          longitude:-63.19166
        },
        {
          latitude: -17.79789,
          longitude: -63.19263
        },
        {
          latitude: -17.79793, 
          longitude:-63.19285
        },
        {
          latitude: -17.79819,
          longitude: -63.19301
        },
        {
          latitude: -17.80085, 
          longitude:-63.196
        },
        {
          latitude: -17.80383, 
          longitude:-63.19941
        },
        {
          latitude: -17.80492,
          longitude: -63.19856
        },
        {
          latitude: -17.80532,
          longitude: -63.19904
        },
        {
          latitude: -17.80671,
          longitude: -63.19771
        },
        {
          latitude: -17.80968, 
          longitude:-63.202
        },
        {
          latitude: -17.81317,
          longitude: -63.2066
        },
        {
          latitude: -17.81167,
          longitude: -63.20825
        },
        {
          latitude: -17.81187, 
          longitude:-63.20843
        },
        {
          latitude: -17.81399, 
          longitude:-63.2063
        },
        {
          latitude: -17.81573,
          longitude: -63.20421
        },
        {
          latitude: -17.81946,
          longitude: -63.20723
        },
        {
          latitude: -17.82434, 
          longitude:-63.21121
        },
        {
          latitude: -17.82652, 
          longitude:-63.21408
        },
        {
          latitude: -17.82634, 
          longitude:-63.21419
        },
        {
          latitude: -17.82714,
          longitude: -63.21506
        },
        {
          latitude: -17.82757,
          longitude: -63.21532
        },
        {
          latitude: -17.82876, 
          longitude:-63.21538
        },
        {
          latitude:-17.83053,
          longitude: -63.21706 
        },
        {
          latitude: -17.83391, 
          longitude:-63.22014
        },
        {
          latitude: -17.83612, 
          longitude:-63.22216
        },
        {
          latitude: -17.83864,
          longitude: -63.22448
        },
       

       
      ]);
  return (
    <Polyline
    coordinates={coordinates}
    strokeColor="orange"
    strokeWidth={4}
    lineCap="round"
    tappable={true}
    onPress={onPress}
  />
  )
}

export default Poli_2i

const styles = StyleSheet.create({})