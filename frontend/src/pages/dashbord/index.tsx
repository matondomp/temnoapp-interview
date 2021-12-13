import React, { useState } from "react";
import { useNavigate } from "react-router";
import  { Container }  from './style'     
import  { Header }  from '../../component/header'             
import { Link } from "react-router-dom";
import{ api } from '../../service/api'
import { useEffect } from "react";
import { useItemContextOfList } from '../../hooks/useItemOfList'


export const Dashbord:React.FC=()=>{
    

    const [ products,setProducts] =useState<any>([])
    const navegate =useNavigate()
    const useItem=useItemContextOfList()

    useEffect(()=>{
        getProductItemOnTheServer()
    },[])

    async function getProductItemOnTheServer(){
      const response= await api.get('/product')
      const  data = response.data.data
      setProducts(data)
    }

   function hendleSubmit(id:string,item:Object){
       useItem.hendleItems(item)
       navegate("/edit/"+id)
    }

    return (
        <>
        <Header />    

        <Container>

           <div>
                 <table>
                    <thead>
                        <h1>Listagem de produtos</h1>
                    </thead>
                 <tbody>
                     <tr className="trHeader" style={{ color:"#fff",border:"2px solid black",background:"blue"}} >
                         <th>#</th>
                         <th>IMAGEN</th>
                         <th style={{width:'40%'}}>NOME</th>
                         <th style={{width:'60%'}}>DESCRIÇÃO</th>
                     </tr>
                         {
                             products.map((item:any,index:number)=>( 
                          
                                 <tr onClick={()=>hendleSubmit(item.id,item)} key={item.id} >
                                       <td>{index+1}</td>
                                        <td> <img src={ item.image_url } /> </td>
                                    
                                        <td >{ item.name }</td>
                                  
                                        <td>{ item.description }</td>
                                </tr>
                            
                                
                                
                                )
                                )
                            } 
                        
                 </tbody>
                 
                 </table>
             
               </div>
           
           <Link to="/create">
              <button >Registar</button>     
           </Link>
        </Container>  
        </>
      
    )
}