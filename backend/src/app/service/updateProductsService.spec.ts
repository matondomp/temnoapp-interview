import { ProductUpdateService } from './updateProductsService'

import { ProductsFakeRepository } from '../products/fake/productFakeRepository'
import { ProductCreateService } from './productCreateService'
 
let productUpdateService:ProductUpdateService
let productsFakeRepository:ProductsFakeRepository
let createProductService:ProductCreateService

describe("ProductUpdateService",()=>{

    beforeEach(
        ()=>{
              productsFakeRepository=new ProductsFakeRepository()
              productUpdateService=new ProductUpdateService(productsFakeRepository)
              createProductService=new ProductCreateService(productsFakeRepository)
          }
     ) 

    it("it should be able to verify if update method is being colled",async()=>{
         const update=jest.spyOn(productsFakeRepository,'update')
        const createProduct= await createProductService.execute(
            {
                name:"mp",
                avatar:"mp.jpeg",
                description:"mp marca de calçado"
            }
          )
          await productUpdateService.execute(
              createProduct.id,
              {
                  name:"mp",
                  avatar:"mp.jpeg",
                  description:"mp marca de calçado"
              }
          )

         expect(update).toBeCalled()
    })

    it("it should be able to update products",async()=>{
        const createProduct= await createProductService.execute(
            {
                name:"mp",
                avatar:"mp.jpeg",
                description:"mp marca de calçado"
            }
          )
         const updateProducts= await productUpdateService.execute(
              createProduct.id,
              {
                  name:"mp",
                  avatar:"mp.jpeg",
                  description:"mp marca de calçado"
              }
          )
        expect(updateProducts).toHaveProperty("name")
     })
})