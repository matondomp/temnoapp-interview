import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Contaner=styled.View`
    flex: 1; 
    align-items:center;
    

`

export const Logo=styled.Image`
    width: ${RFValue(100)}px;
    height:  ${RFValue(100)}px;
    margin-left:20px;
    margin-bottom: 10px;
    margin-top:0;
`
export const Separator=styled.Text`
    background-color:#d0d0d0b0;
    width:98%;
    padding:1px;
    margin-top: 0p;
`
export const TextItem=styled.Text`
    font-size: 20px;
    font-weight: bold;
    max-width: ${RFValue(250)}px;
    margin: 20px 20px;
`
export const Title=styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-top:40px;
`
export const Content=styled.View`
   margin-top:40px;
   flex-direction:row;
   align-items: center;
   justify-content: center;
   width: 0 auto;
  
`



