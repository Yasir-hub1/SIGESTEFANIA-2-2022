import {NavigationContainer}from "@react-navigation/native";

import ButtonTab from "./ButtonTab";

/// raiz principal de las navegaciones de las screens
export default function RootNavigation(){
    const user=true;
    return(
        <NavigationContainer>
            {/* <InicioStack/> */}
         <ButtonTab/>
            
          
            {/* <ButtonTab/> */}
        </NavigationContainer>
    );
}