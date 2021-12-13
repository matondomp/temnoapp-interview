
import fs from 'fs'
import path from 'path';
import { IuploadFileService } from '../model/IUpload'

import ConfigUploadFile from '../../../../config/uploadFIle'

export class UploadRepository implements IuploadFileService{
   
    
    public async saveFile(file:string): Promise<string>{

        path.resolve(ConfigUploadFile.tmpDirectory,file)
        
        return file
    }

    public async removeFile(file:string): Promise<void>{

        const getFile=path.resolve(ConfigUploadFile.tmpDirectory,file)
        try {
            fs.promises.stat(getFile)
        } catch {
            return
        }
           fs.promises.unlink(getFile)
    }
}