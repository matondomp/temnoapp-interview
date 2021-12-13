import { v4 as uuid } from 'uuid'

import { IuploadFileService } from "../provider/fileProvider/model/IUpload";
import { ItypeRepository } from "../products/ItypeRepository";
import { Products } from "../products/model/product";

interface IRequest{
    product_id?:string
    file:string
}

export class UploadFileService{
   
    constructor(
        private products:ItypeRepository,
        private upload:IuploadFileService
          ){}

    public async execute({ file,product_id }:IRequest):Promise<string>{

        const product= await this.products.findById(product_id)
    
        if(!product){
            throw  new Error("product don't exist!");
        }
       
        if(product.avatar){
           await this.upload.removeFile(product.avatar)
        }
         
        const fileName= await this.upload.saveFile(file)
        /* product.avatar=fileName
        await this.products.save(product) */
        return fileName

    }
}