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
    const getdatail = async (champion) => {
        const res = await Datail(champion)
        setDetail(res.data.data)
    }
    const limpiarD = ()=>{
        setDetail(null)
    }
    return (
        <Championscontext.Provider value={{
            getchampions,
            championsAll,
            getdatail,
            detail,
            limpiarD
        }}>
            {children}
        </Championscontext.Provider>)
}

