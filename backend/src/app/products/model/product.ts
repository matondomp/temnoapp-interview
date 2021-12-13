import { 
    Entity, 
    Column,
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn 
} from 'typeorm'


@Entity()
export class Products{
   
   @PrimaryGeneratedColumn("uuid")
   id:string

   @Column('text')
   name:string

   @Column('text')
   avatar?:string

   @Column('text')
   description:string

   @CreateDateColumn()
   created_at?: Date

   @UpdateDateColumn()
   updated_at?: Date

  
}