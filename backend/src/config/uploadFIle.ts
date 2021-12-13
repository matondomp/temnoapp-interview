import {diskStorage } from "multer"
import path from "path"
import crypto from "crypto"
let directory=path.resolve(__dirname,'..','..','tmp')

export default {
  tmpDirectory:directory,
  storage:diskStorage({
      destination:directory,
      filename(req,file,callback){
        const fileHash=crypto.randomBytes(10).toString("hex")
        const fileName=`${fileHash}-${file.originalname}`
        return callback(null,fileName)
      }
  })
}

