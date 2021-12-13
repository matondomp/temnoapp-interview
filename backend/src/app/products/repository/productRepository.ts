import { getRepository } from 'typeorm'

import { Products } from '../model/product'
import { ItypeRepository } from '../ItypeRepository'

export class ProductsRepository implements ItypeRepository{
   
    public async create(data:Products):Promise<Products>{ 
        const getProduct=getRepository(Products)

         const product=getProduct.create(data)
         await getProduct.save(product)

        return product
    }

    public async update(id:string,{ name,description}:Products):Promise<any>{
        
        const getProduct=getRepository(Products)
                   
        let product=await getProduct 
                            .createQueryBuilder()
                            .update(Products)
                            .set({ name: name, description: description })
                            .where({ id: id })
                            .execute();
 

        return product
    }

    public async delete(id:string):Promise<any>{
        const getProduct=getRepository(Products)
       const response= await getProduct.delete(id)
        return response
    }
    public async list():Promise<Products[]>{
        const getProduct=getRepository(Products)
        const listAllData=await getProduct.find()
        const serilized = listAllData.map(item => {
            return {
                ...item,
                image_url: `http://localhost:3335/uploads/${item.avatar}`
            }
        })
       return serilized
    } 

    public async findById(id:string): Promise<Products | undefined> {
        const getProduct=getRepository(Products)
        const product=await getProduct.findOne(id)
 
         return product
     }

     public async save(data:Products):Promise<Products>{
        const getProduct=getRepository(Products)
        const product=await getProduct.save(data)
        return product
    }
}