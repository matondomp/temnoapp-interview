import { v4 as uuid } from 'uuid'

import { ItypeRepository } from "../products/ItypeRepository";
import { Products } from "../products/model/product";
import { IuploadFileService } from '../provider/fileProvider/model/IUpload';

interface IRequest{
    name:string
    avatar?:string
    description:string
}

export class ProductCreateService{
   
    constructor(
        private Product:ItypeRepository ,
        private upload:IuploadFileService
        ){}

    public async execute(data:IRequest):Promise<Products>{
       const fileName= await this.upload.saveFile(data.avatar)
      const product= await this.Product.create({
            id: uuid(),
            ...data,
            avatar:fileName
        })

        return product
    }
}