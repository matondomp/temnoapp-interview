import React from "react";
import { Container } from './style'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'


export const Header:React.FC=()=>{
   return(
       <Container>
           <div>
                <img src={logo} alt="erro"  />
                <Link to="/">Dashbord</Link>
           </div>
          
       </Container>
   )
}