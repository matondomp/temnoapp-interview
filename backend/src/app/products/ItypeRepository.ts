import { Products } from './model/product'

export interface ItypeRepository{
    create(data:Products):Promise<Products>
    update(id:string,data: Omit<Products,'id'> ):Promise<any>
    delete(id:string,):Promise<any>
    list():Promise<Products[]>
    findById(id:string):Promise< Products| undefined >
    save(data:Products):Promise<Products>
}