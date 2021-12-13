import { Request,Response } from 'express' 

import { ProductDeleteteService } from '../../service/deleteProductsService'
import { ListProductService } from '../../service/listProductService'
import { ProductCreateService } from '../../service/productCreateService'
import { ProductUpdateService } from '../../service/updateProductsService'

import { ProductsRepository } from '../repository/productRepository'
import { Products } from '../model/product'

import { UploadRepository }  from '../../provider/fileProvider/implamentation/uploadProvider'
import { UploadFileService } from '../../service/uploadFileProductService'

interface IRequest{
    name:string
    avatar:string
    description:string
}


export class ProductController{


   public async create(request:Request, response:Response):Promise<Response>{
     
      try {
            let productsRepository=new ProductsRepository()
            let uploadRepository=new UploadRepository()
            let uploadFileService=new UploadFileService(productsRepository,uploadRepository)
            let productCreateService=new ProductCreateService(productsRepository,uploadRepository) 
    
            const { name,description } = request.body
            const { filename }=request.file
           
            console.log(filename,name)
           
            const product=await productCreateService.execute({
                name,
                description,
                avatar:filename
            })
    
            return response.json({ data:product })
         } catch {
            return response.status(400)
        } 
      
    }
    
    public async update(request:Request, response:Response):Promise<Response>{

     //  try {
            let productsRepository=new ProductsRepository()
            let productUpdateService=new ProductUpdateService(productsRepository)

            let uploadRepository=new UploadRepository()
            let uploadFileService=new UploadFileService(productsRepository,uploadRepository)

            const { name,description } = request.body
            const { id } = request.params
            const { filename }=request.file

            const fileName=await uploadFileService.execute({file:filename,product_id:id})
            const product=await productUpdateService.execute(id,{
                name,
                description,
                avatar:fileName
            })
    
            return response.json({ data:product })
       /*  } catch {
            return response.status(400)
        } */
       
      }

      public async delete(request:Request, response:Response):Promise<Response>{
          try {
            let productsRepository=new ProductsRepository()
            let productDeleteteService=new ProductDeleteteService(productsRepository)
              const { id } = request.params
               
             const deleteResult= await productDeleteteService.execute(id)
      
              return response.status(200).json(deleteResult)
          } catch  {
            return response.status(400)
          }
       
      }
     
      public async list(request:Request, response:Response):Promise<Response>{
            let productsRepository=new ProductsRepository()
            let listProductService=new ListProductService(productsRepository)

            let uploadRepository=new UploadRepository()
            let uploadFileService=new UploadFileService(productsRepository,uploadRepository)
           
            const product=await listProductService.execute()
  
          return response.json({ data:product })
      }

     public async upload(request:Request, response:Response){
        
        const { filename }=request.file
        const { id }=request.params

        let productsRepository=new ProductsRepository()

        let uploadRepository=new UploadRepository()
        let uploadFileService=new UploadFileService(productsRepository,uploadRepository)
       
        const upload=await  uploadFileService.execute({
            file:filename,product_id:id
         })

         return response.json(upload) 
      }


}