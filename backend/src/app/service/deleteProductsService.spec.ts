import { ProductDeleteteService } from './deleteProductsService'

import { ProductsFakeRepository } from '../products/fake/productFakeRepository'
import { ProductCreateService } from './productCreateService'
 
let productDeleteteService:ProductDeleteteService
let productsFakeRepository:ProductsFakeRepository
let createProductService:ProductCreateService

describe("ProductDeleteService",()=>{

    beforeEach(
        ()=>{
              productsFakeRepository=new ProductsFakeRepository()
              productDeleteteService=new ProductDeleteteService(productsFakeRepository)
              createProductService=new ProductCreateService(productsFakeRepository)
          }
     ) 

    it("it should be able to verify if delete method is being colled",async()=>{
         const deleteMethod=jest.spyOn(productsFakeRepository,'delete')
        const createProduct= await createProductService.execute(
            {
                name:"mp",
                avatar:"mp.jpeg",
                description:"mp marca de calçado"
            }
          )
          await productDeleteteService.execute(createProduct.id)

         expect(deleteMethod).toBeCalled()
    })

  
})