
import { ItypeRepository } from "../products/ItypeRepository";
import { Products } from "../products/model/product";



export class ListProductService{
   
    constructor(private Product:ItypeRepository){}

    public async execute():Promise<Products[]>{
        return await this.Product.list()
    }
}