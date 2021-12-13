import { v4 as uuid } from 'uuid'

import { ItypeRepository } from "../products/ItypeRepository";
import { Products } from "../products/model/product";



export class ProductDeleteteService{
   
    constructor(private Product:ItypeRepository){}

    public async execute(id:string):Promise<void>{
        return await this.Product.delete(id)
    }
}