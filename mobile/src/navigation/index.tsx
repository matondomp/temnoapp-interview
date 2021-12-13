/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import { Dashbord } from '../screens/dashbord';
import ProductDetails from '../screens/productDetails';

const { Navigator, Screen } = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
       <Navigator screenOptions={{
         headerStyle:{
           backgroundColor:'blue',
           
         },
         contentStyle:{
           borderBottomColor:"blue",
           height:600

         },
         headerTitleStyle:{
           fontWeight:'bold',
           color:"#fff"
         }
       }} >
        <Screen name="Root" component={Dashbord} 
        
          options={{ 
              title: 'PRODUTOS',
              
          }}
        
        />
        <Screen name="Details" component={ProductDetails} 
          options={{ 
                title: 'DETALHE DO PRODUTOS',
                headerTintColor:"#fff",
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}




