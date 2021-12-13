import { NativeStackScreenProps } from '@react-navigation/native-stack';
import  React, { useCallback, useEffect, useState } from 'react';
import {  TouchableOpacity } from 'react-native';

import api from '../../service/api'
import { useDetailsContextOfList } from '../../hooks/detailsProductContex'

import { 
   Contaner,
   Logo,
   Separator,
   TextItem,
   Content
  } from './style'

interface IProduct{
  item:Object
}

export const Dashbord: React.FC<NativeStackScreenProps<any>> =({ navigation })=> {

  const [products,setProducts]=useState([])
  const datailsProductsContext=useDetailsContextOfList()
  useEffect(()=>{

    getProducts()
  },[])

   const getProducts=useCallback(async()=>{

    const response= await api.get("/product")
    setProducts(response.data.data)
  },[])

   const setProductContext =useCallback((item)=>{
     console.log(item)
        datailsProductsContext.hendleItems(item)
        navigation.navigate('Details')
  },[])

  return (
    <Contaner>
      {
        products.map((product:any)=>(
             <>
               <TouchableOpacity key={ product.id }
                 onPress={() =>setProductContext(product) } >
                  <Content>
                      <Logo source={{ uri: product.image_url }}  />
                      <TextItem>
                        { product.name }
                      </TextItem>
                 </Content>
              </TouchableOpacity>
              <Separator/>
            </>
           )
          
         )
      }
  {/*  <Separator/>
            </> */}
   </Contaner>
  );
}


