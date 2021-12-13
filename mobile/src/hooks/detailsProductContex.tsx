import React,{ 
    createContext,
    useContext,
    useCallback,
    useState
} from "react"
    


interface contextDataType{
    item:Object
    hendleItems(item:Object):void
}

const context=createContext<contextDataType>({} as contextDataType)


export const ProviderItemContext:React.FC=({ children })=>{

    const [item,setItem]=useState({})

    const hendleItems=useCallback((item)=>{
        setItem(item)
    },[])
       return(
        <context.Provider value={{ item:item,hendleItems }} >
           { children }
        </context.Provider>
     )
}


export const useDetailsContextOfList=()=>{
    const getContext=useContext(context)
    if(!getContext){
        throw new Error("you mast provid useItemContext")
    }
    return getContext
}