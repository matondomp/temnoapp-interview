import { ItypeRepository } from "../ItypeRepository";
import { Products } from '../model/product'

export class ProductsFakeRepository  implements ItypeRepository{
    private product:Products[]=[]
    public async create(data:Products):Promise<Products>{ 
        const product=new Products()
        Object.assign(product,{...data})
        this.product.push(product)
        return product
    }

    public async update(id:string,data:Products):Promise<Products>{
        const index=this.product.findIndex(item=>item.id==id)
        this.product[index]=data

        return this.product[index]
    }

    public async delete(id:string):Promise<void>{
        const index=this.product.findIndex(item=>item.id==id)
        this.product.splice(index,1)
    }
    public async list():Promise<Products[]>{
        return this.product
    } 

    public async findById(id:string):Promise<Products | undefined>{
        const reponse=this.product.find(item=>item.id==id)
        return reponse

    }

    public async save(data:Products):Promise<Products>{
        const index=this.product.findIndex(item=>item.id==data.id)
        this.product[index]=data

        return this.product[index]
    }
}