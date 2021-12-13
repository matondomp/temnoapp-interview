import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from '../../component/header'
import { api } from "../../service/api";
import { Form } from "../../component/form";
import { useItemContextOfList } from "../../hooks/useItemOfList";

interface Iitem{
    id:string
    name:string
    description:string
}

export const UpdateProducts:React.FC=()=>{

    const [file,setFile]=useState<File>()
    const [formData,setFormData]=useState({
        name:'',
        description:'',
        id:''
    })
    const useItem=useItemContextOfList()

      useEffect(()=>{
        hendleItemForEditForm()
      },[])

      const navegate=useNavigate()

    const hendleItemForEditForm=useCallback(()=>{

        const data=useItem.item as Iitem

       setFormData(()=>{
           return{
               name:data.name,
               description:data.description,
               id:data.id
           }
       })
    },[useItem])


    const hendleSubmit=useCallback(async(e:React.FormEvent)=>{
        e.preventDefault()
        const data=new FormData()

        data.append('name',formData.name)
        data.append('description',formData.description)

        if(file){
            data.append('avatar',file)
         }
            try {
                await api.put(`/product/${formData.id}`,data)
                navegate('/')
                alert("Editado com sucesso!!")
            } catch (error) {
                alert("Erro ao editar!!")
            }
    },[file,formData,navegate])


    const getFileFromInput=useCallback((e: React.ChangeEvent<HTMLInputElement>)=>{

        const array=Array.from(e.target.files?e.target.files:[])
        
         setFile(array[0])
    },[])
   
    const getInputValueByKeyName=useCallback((event:React.ChangeEvent<HTMLInputElement>)=>{
        const { name, value }=event.target
        setFormData({
            ...formData,
            [name]:value
        })
    },[formData])

    const getTextAreaValueByKeyName=useCallback((event:React.ChangeEvent<HTMLTextAreaElement>)=>{
        const { name, value }=event.target
        setFormData({
            ...formData,
            [name]:value
        })
    },[formData])

     const eliminateProductItem=useCallback(async(e:React.FormEvent,id)=>{
       e.preventDefault()
        try {
            await api.delete(`/product/${id}`)
            navegate('/')
            alert("deletado com sucesso!!")
        } catch (error) {
            alert("Erro ao deletar!!")
        }
     },[navegate])

     const hendleCancel=useCallback(()=>{
        navegate('/')
     },[navegate])

    return (
        <>
        <Header/>
         <Form 
                hendleSubmit={hendleSubmit}
                getFileFromInput={getFileFromInput}
                getInputValueByKeyName={getInputValueByKeyName}
                getTextAreaValueByKeyName={getTextAreaValueByKeyName}
                title={'Editar Produto'}
                buttonTitle={'Editar produto'}
                name={formData.name}
                description={formData.description}
                
         >
            <div>
                <button onClick={(e)=>eliminateProductItem(e,formData.id) } style={{ backgroundColor:"red" }}>Eliminar</button>
                <button onClick={hendleCancel} style={{ backgroundColor:"gray",marginLeft:"20px" }}>Cancelar</button>
            </div>
         </Form>
    </>
    )
}