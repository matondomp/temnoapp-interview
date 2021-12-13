import  React, { useCallback, useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useDetailsContextOfList } from '../../hooks/detailsProductContex'

import { 
  Contaner,
  Logo,
  TextItem,
  Content,
  Title,
  Description
 } from './style'

 interface Products{
   id: string
   name: string
   description: string
   image_url: string
 }

export default function ProductDetails({navigation}:NativeStackScreenProps<any>) {

  const [details,setDetails]=useState<any>({})
   const getProductsContext=useDetailsContextOfList()

  useEffect(()=>{
    getProductsDetails()
  },[])

  const getProductsDetails=useCallback(()=>{
    setDetails(getProductsContext.item)
  },[])

  console.log(details)

  return (
    <Contaner>
         <Content>
            
              <Logo source={{ uri: details.image_url }}  />
              <Title>
                 {details.name}
              </Title>

              <Description>Descrição</Description>

                <TextItem>
                    {details.description}
                </TextItem>
          </Content>

    </Contaner>
  );
}

