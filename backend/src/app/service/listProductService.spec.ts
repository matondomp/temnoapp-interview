import { ListProductService } from './listProductService'

import { ProductsFakeRepository } from '../products/fake/productFakeRepository'
import { ProductCreateService } from './productCreateService'
import { Products } from '../products/model/product'
 
let listProductService:ListProductService
let productsFakeRepository:ProductsFakeRepository
let createProductService:ProductCreateService

describe("ProductListService",()=>{

    beforeEach(
        ()=>{
              productsFakeRepository=new ProductsFakeRepository()
              listProductService=new ListProductService(productsFakeRepository)
              createProductService=new ProductCreateService(productsFakeRepository)
          }
     ) 

    it("it should be able to verify if delete method is being colled",async()=>{
         const deleteMethod=jest.spyOn(productsFakeRepository,'list')
        const createProduct= await createProductService.execute(
            {
                name:"mp",
                avatar:"mp.jpeg",
                description:"mp marca de calçado"
            }
          )
          const products=await listProductService.execute()

         expect(products.length).toBeGreaterThan(0)
    })

  
})