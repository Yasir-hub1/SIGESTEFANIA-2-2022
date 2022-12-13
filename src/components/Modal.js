import React ,{useState} from 'react';
import { StyleSheet } from 'react-native';
import {Overlay} from "react-native-elements";

export default function Modal(props){

    const{isVisible,setIsvisible,children} = props;

    const [showModal,setshoModal]=useState(true);


    const closeModal=()=> setIsvisible(false);

   return(
       <Overlay 
       isVisible={isVisible}
       windowBackgroundColor="rgba(0,0,0,0.5)"
       overlayBackgroundColor="transparent"
       overlayStyle={styles.overlay}
       onBackdropPress={closeModal}
       >
           {children}

       </Overlay>
   );

   }

const styles = StyleSheet.create({
    overlay:{
        height:"auto",
        width:"90%",
        backgroundColor:"#ffffff",
        borderRadius:30,
        borderColor:"#ED4C67",
        borderWidth:5
    }

});