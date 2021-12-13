import React from "react"
import { Container,Label,ButtonAction } from './style'

interface PropsParams{
    hendleSubmit(e:React.FormEvent | undefined):void
    getInputValueByKeyName(e:React.ChangeEvent<HTMLInputElement> | undefined):void
    getFileFromInput(e: React.ChangeEvent<HTMLInputElement>):void
    getTextAreaValueByKeyName(e: React.ChangeEvent<HTMLTextAreaElement> | undefined):void
    name?:string
    description?:string
    title:string
    buttonTitle:string
}

export const Form:React.FC<PropsParams> = ({ 
    hendleSubmit,
    getFileFromInput,
    getInputValueByKeyName,
    getTextAreaValueByKeyName,
    name,
    description,
    title,
    buttonTitle,
    children
 })=>{

   return (
    <Container>
        <div>
            <h1> { title }</h1>

            <form  >
                <fieldset>
                <legend>Nome do produto</legend>
                <input value={ name } onChange={ getInputValueByKeyName } name="name" type="text" />
                </fieldset>
                
                <fieldset>
                    <legend>Imagem</legend>
                    <Label >
                        <input onChange={ getFileFromInput } type="file" accept="image/*"/>
                    </Label>
                </fieldset>
                
                <fieldset>
                <legend>Descrição do produto</legend>
                <textarea value={ description } onChange={ getTextAreaValueByKeyName } name="description" ></textarea>
                </fieldset>

                <ButtonAction>
                    <button  onClick={hendleSubmit}>{ buttonTitle }</button>
                { children }
                </ButtonAction>
                
            </form>

        </div>  
    </Container> 
   
   )
}


