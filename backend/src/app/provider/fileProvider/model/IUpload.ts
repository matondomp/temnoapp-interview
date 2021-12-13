export interface IuploadFileService{
    saveFile(file:string): Promise<string>
    removeFile(file:string): Promise<void>
}