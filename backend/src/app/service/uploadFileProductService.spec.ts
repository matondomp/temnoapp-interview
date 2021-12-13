import { ProductUpdateService } from './updateProductsService'

import { ProductsFakeRepository } from '../products/fake/productFakeRepository'
import { ProductCreateService } from './productCreateService'
import { UploadFakeRepository } from '../provider/fileProvider/fake/uploadFakeProvider'
import { UploadFileService } from './uploadFileProductService'
 
let productUpdateService:ProductUpdateService
let productsFakeRepository:ProductsFakeRepository
let createProductService:ProductCreateService
let uploadFakeFileService:UploadFakeRepository
let uploadFileProductService:UploadFileService

describe("uploadFileProductService",()=>{

    beforeEach(
        ()=>{
              productsFakeRepository=new ProductsFakeRepository()
              productUpdateService=new ProductUpdateService(productsFakeRepository)
              uploadFakeFileService=new UploadFakeRepository()
              createProductService=new ProductCreateService(productsFakeRepository,uploadFakeFileService)
              uploadFileProductService=new UploadFileService(
                  productsFakeRepository,
                  uploadFakeFileService
                )
          }
     ) 

    it("it should be able to upload file",async()=>{

        const createProduct= await createProductService.execute(
            {
                name:"mp",
                description:"mp marca de calçado"
            }
          )
        const response=  await uploadFileProductService.execute(
              {
                  file:"mp.jpeg",
                  product_id:createProduct.id
              }
          )

         expect(response).toBe("mp.jpeg")
    })

    it("it should be able to validate if products",async()=>{

       await createProductService.execute(
            {
                name:"mp",
                description:"mp marca de calçado"
            }
          )

        await expect( 
            uploadFileProductService.execute( {
                file:"mp.jpeg",
                product_id:"no-exiting-id"
            })).rejects.toBeInstanceOf(Error)
    })
    
    it("it should be able to update old file to new one",async()=>{

        const createProduct= await createProductService.execute(
            {
                name:"mp",
                avatar:"vp.png",
                description:"mp marca de calçado"
            }
          )
        const response=  await uploadFileProductService.execute(
              {
                  file:"mp.jpeg",
                  product_id:createProduct.id
              }
          )

         expect(response).toBe("mp.jpeg")
    })

})