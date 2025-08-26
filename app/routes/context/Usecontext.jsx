import {createContext, use,useContext,useReducer,useState} from 'react'


export const  Dcontext= createContext()

export const useDemoContext=()=>{
    const context= useContext (Dcontext)
    if (!context){
        throw new Error('useDemoContext must be used within a DemoContextProvider')
    }
    return context
}

