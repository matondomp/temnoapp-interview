import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'


export const Contaner=styled.View`
    flex: 1; 
    align-items:center;
    margin-top:0;
    width: 100%;

`

export const Logo=styled.Image`
    width: ${RFValue(300)}px;
    height:  ${RFValue(300)}px;
    margin-left:20px;
    margin-bottom: 10px;
    margin-top:0;
    margin:0 20px 20px 20px
`
export const Header=styled.View`
   margin:0;
   width:100%;
   background-color:blue;
   height:100px;

`
export const TextItem=styled.Text`
    font-size: ${RFValue(20)}px;;
    font-weight: 500;
    max-width: ${RFValue(250)}px;
    margin: 20px 20px;
`
export const Title=styled.Text`
    font-size: 26px;
    font-weight: bold;
    max-width: ${RFValue(250)}px;
    margin: 20px 20px;
    margin-bottom:60px;
`
export const Description=styled.Text`
    margin-top:100px;
    font-size: 26px;
    font-weight: bold;
    margin: 0;
    padding:0;
`

export const Content=styled.View`
   width: ${RFValue(100)}%;
   margin-top:40px;
   flex-direction:column;
   align-items: center;
   justify-content: center;
   width: 0 auto;
  
`





