
import { IuploadFileService } from '../model/IUpload'

interface IFile{
    file:string
}

export class UploadFakeRepository implements IuploadFileService{
   
    private listOfiles:IFile[]=[]
    public async saveFile(file:string): Promise<string>{
      
        this.listOfiles.push({file})
        return file
    }

    public async removeFile(file:string): Promise<void>{
        const findIndex=this.listOfiles.findIndex(files=>files.file===file)
        this.listOfiles.splice(findIndex,1)
    }
}