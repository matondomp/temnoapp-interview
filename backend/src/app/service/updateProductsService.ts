import { v4 as uuid } from 'uuid'

import { ItypeRepository } from "../products/ItypeRepository";
import { Products } from "../products/model/product";

interface IRequest{
    name:string
    avatar:string
    description:string
}

export class ProductUpdateService{
   
    constructor(private Product:ItypeRepository){}

    public async execute(id:string,data:IRequest):Promise<Products>{
        const product= await this.Product.update(id,data)
        
        return product
    }
}