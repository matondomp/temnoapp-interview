import { Request,Response, Router } from "express";
import multer from "multer";

import { ProductController } from '../../src/app/products/controller/productContreller'

let productController=new ProductController()
import multerConfig from '../config/uploadFIle'

const upload=multer(multerConfig)

const route =Router()

route.post("/",
upload.single('avatar'),
productController.create)

route.get("/",productController.list)
route.put("/:id",
upload.single('avatar'),
productController.update
)
route.delete("/:id",productController.delete)

route.patch("/upload/:id",
  upload.single('avatar'),
  productController.upload)

export { route }