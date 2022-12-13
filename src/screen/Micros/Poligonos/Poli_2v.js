import { StyleSheet } from 'react-native'
import React,{useState} from 'react'
import  {  Polyline } from "react-native-maps";

const Poli_2 = ({onPress = () => {}}) => {
 
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
    {/* 10 */
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
    {/* 26 */
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
    
    {/* 36 */
      latitude: -17.77237, 
      longitude:-63.12762
    },
    {/* 37 */
      latitude:-17.77322, 
      longitude: -63.12986
    },
    {
      latitude: -17.77565, 
      longitude: -63.1363
    },
    {
      latitude:-17.77691, 
      longitude: -63.13965
    },
    {
      latitude: -17.77955, 
      longitude:-63.14652
    },
    {
      latitude:-17.77977, 
      longitude: -63.14681
    },
    {/* 42 */
      latitude: -17.78001,
      longitude: -63.14695
    },
    {
      latitude:-17.78018,
      longitude:  -63.14711
    },
    {
      latitude: -17.78029, 
      longitude:-63.14749
    },
    {
      latitude: -17.78008, 
      longitude:-63.14784
    },
    {
      latitude: -17.78032, 
      longitude:-63.14858
    },
    {
      latitude: -17.78087, 
      longitude:-63.15042
    },
    {
      latitude: -17.78143, 
      longitude: -63.15467
    },
    {
      latitude: -17.7823, 
      longitude:-63.16403
    },
    {
      latitude:-17.7823, 
      longitude:-63.16514
    },
    {
      latitude: -17.78238,
      longitude: -63.16605
    },
    {
      latitude: -17.78297,
      longitude:  -63.17178
    },
    {
      latitude: -17.78302, 
      longitude: -63.17202
    },
    {
      latitude: -17.7832, 
      longitude: -63.1722
    },
    {
      latitude: -17.7831, 
      longitude: -63.17242
    },
    {
      latitude: -17.78283,
      longitude: -63.17238
    },
    {
      latitude: -17.78193,
      longitude: -63.1725
    },
    {
      latitude:-17.78214, 
      longitude:-63.17489
    },
    {
      latitude: -17.78239, 
      longitude: -63.17732
    },
    {
      latitude: -17.78445, 
      longitude: -63.17713
    },
    {
      latitude: -17.78602, 
      longitude: -63.17691
    },
    {
      latitude: -17.78677, 
      longitude:-63.17677
    },
    {
      latitude: -17.78728, 
      longitude: -63.17899
    },
    {
      latitude: -17.78818, 
      longitude:-63.18236
    },
    {
      latitude: -17.78886, 
      longitude: -63.1854
    },
    {
      latitude: -17.78933,
      longitude: -63.18732
    },
    {
      latitude:-17.78936,
      longitude: -63.18743
    },
    {
      latitude: -17.7895, 
      longitude: -63.18745
    },
    {
      latitude: -17.78955, 
      longitude: -63.18762
    },
    {
      latitude: -17.78944, 
      longitude:-63.18775
    },
    {
      latitude: -17.78957, 
      longitude:-63.18828
    },
    {
      latitude: -17.78959, 
      longitude: -63.18849
    },
    {/* --- */
      latitude: -17.78956, 
      longitude: -63.18857
    },
    {
      latitude: -17.7926, 
      longitude:-63.19073
    },
    {
      latitude: -17.79488, 
      longitude:-63.19241 
    },
    {
      latitude: -17.79614, 
      longitude: -63.19319
    },
    {
      latitude: -17.79713, 
      longitude: -63.19157
    },
    {
      latitude: -17.79795,
      longitude: -63.19247
    },
    {
      latitude: -17.79804, 
      longitude:-63.19251
    },
    {
      latitude: -17.79823, 
      longitude:-63.19258
    },
    {
      latitude: -17.79832, 
      longitude: -63.19281
    },
    {
      latitude: -17.79966, 
      longitude:-63.19433
    },
    {
      latitude: -17.80156, 
      longitude:-63.19644
    },
    {
      latitude:-17.8038, 
      longitude: -63.19901 
    },
    {
      latitude:-17.80463,
      longitude: -63.19822
    },
    {
      latitude: -17.8054,
      longitude: -63.19752
    },
    {
      latitude: -17.80562, 
      longitude: -63.19779
    },
    {
      latitude: -17.80483, 
      longitude: -63.19847
    },/* fin rojo sin copiar de  1ida */
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
      latitude: -17.8118, 
      longitude: -63.20808
    },
    {
      latitude:-17.81201, 
      longitude:-63.20829
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
    strokeColor="green"
    strokeWidth={4}
    lineCap="round"
    lineDashPattern={[5]}
    tappable={true}
    onPress={onPress}
  />
  )
}

export default Poli_2

const styles = StyleSheet.create({})