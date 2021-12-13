import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from '../../component/header'
import { api } from "../../service/api";
import { Form } from '../../component/form'


export const RegisterProducts:React.FC=()=>{

    const [file,setFile]=useState<File>()
    const [formData,setFormData]=useState({
        name:'',
        description:''
    })
    const navegate =useNavigate()

    const getFileFromInput=useCallback((e: React.ChangeEvent<HTMLInputElement>)=>{

        const array=Array.from(e.target.files?e.target.files:[])
        
         setFile(array[0])
    },[])
   
    const getInputValueByKeyName=useCallback((event:React.ChangeEvent<HTMLInputElement>)=>{
        const { name, value }=event.target
        console.log(name,value)
        setFormData({
            ...formData,
            [name]:value
        })
    },[formData])

    const getTextAreaValueByKeyName=useCallback((event:React.ChangeEvent<HTMLTextAreaElement>)=>{
        const { name, value }=event.target
        console.log(name,value)
        setFormData({
            ...formData,
            [name]:value
        })
    },[formData])

     const hendleSubmit=useCallback(async(e:React.FormEvent)=>{
        e.preventDefault()
        
        const data=new FormData()

        data.append('name',formData.name)
        data.append('description',formData.description)

        if(file){
            data.append('avatar',file)
         }
         try {
             await api.post('/product',data)
             navegate('/')
             
            alert("Cadastrado com sucesso!!")
         } catch (error){

            alert("Erro ao cadastrar produto!!")
         }
    },[file,formData,navegate])

    const hendleCancel=useCallback(()=>{
        navegate('/')
     },[])

    return (
        <>
        <Header/>
         <Form  hendleSubmit={hendleSubmit}
                getFileFromInput={getFileFromInput}
                getInputValueByKeyName={getInputValueByKeyName}
                getTextAreaValueByKeyName={getTextAreaValueByKeyName}
                title={'Novo Produto'}
                buttonTitle={'Registar produto'}
         >

             <button onClick={hendleCancel} style={{ backgroundColor:"gray" }}>Cancelar</button>
         </Form>
    </>
    )
}