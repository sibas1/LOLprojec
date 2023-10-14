import {createContext, useState,useContext} from "react";
import { champiosAll,Datail } from "../api/dataApi";
export const Championscontext = createContext()
export const useChampions = () =>{
    const context=useContext( Championscontext)
    if (!context) {
        throw new Error("no esta en provider")
    }
    return context;
}
export const ChampionsProvider = ({children}) =>{
    const [championsAll,setChampionsAll] = useState()
    const [detail,setDetail] = useState()
     const getchampions = async () =>{
        const res =await champiosAll()
        setChampionsAll(res.data.data)
     }
    const getdatail = async () => {
        const res = await Datail()
        setDetail(res.data.data)
    }
    return (
        <Championscontext.Provider value={{
            getchampions,
            championsAll
        }}>
            {children}
        </Championscontext.Provider>)
}

