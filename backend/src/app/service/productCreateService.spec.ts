import { ProductCreateService } from './productCreateService'
import { ProductsFakeRepository } from '../products/fake/productFakeRepository'
import { UploadFakeRepository } from '../provider/fileProvider/fake/uploadFakeProvider'
 
let createProductService:ProductCreateService
let productsFakeRepository:ProductsFakeRepository
let uploadFakeFileService:UploadFakeRepository


describe("ProductCreateService",()=>{

    beforeEach(
        ()=>{
            uploadFakeFileService=new UploadFakeRepository()
            productsFakeRepository=new ProductsFakeRepository(),
              createProductService=new ProductCreateService(productsFakeRepository,uploadFakeFileService)
          }
     ) 

    it("it should be able to verify if create method is being colled",async()=>{
         const create=jest.spyOn(productsFakeRepository,'create')
          await createProductService.execute(
              {
                  name:"mp",
                  avatar:"mp.jpeg",
                  description:"mp marca de calçado"
              }
          )

         expect(create).toBeCalled()
    })

    it("it should be able to create products",async()=>{

        const products=await createProductService.execute(
            {
                name:"mp",
                avatar:"mp.jpeg",
                description:"mp marca de calçado"
            }
        )
        expect(products).toHaveProperty("name")
     })
})