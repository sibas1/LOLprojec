import React, { Component, useEffect, useState } from 'react'
import { useChampions } from '../context/champions'
import Card from '../componets/Card'
function HomePage() {
  const { championsAll, getchampions } = useChampions()
  let champions = []
  const [filtter, setFiltter] = useState("")
  function recorrer(obj) {
    if (filtter == "") {
      for (const key in obj) {
        champions.push({ key: key, tags: championsAll[key].tags })
      }
    } else {
      for (const key in obj) {
        if ((championsAll[key].tags[1] == filtter) || (championsAll[key].tags[0] == filtter)) champions.push({ key: key, tags: championsAll[key].tags })
      }
    }
  }

  function handelF(e) {
    console.log(e.target.value)
    setFiltter(e.target.value)

  }

  useEffect(() => {
    getchampions()
  }, [])


  return (<div className='flex-col'>
    <div className=" select-none border w-[80%] ml-[10%] rounded-tl-lg border-slate-500 my-8">
      <ul className='flex flex-wrap justify-between px-3'>
        <button onClick={handelF} value="" className=' text-slate-300  hover:text-white m-2'>Todos</button>
        <button onClick={handelF} value="Assassin" className=' text-slate-300  hover:text-white m-2'>Asesinos</button>
        <button onClick={handelF} value="Fighter" className=' text-slate-300  hover:text-white m-2'>Luchadores</button>
        <button onClick={handelF} value="Mage" className=' text-slate-300  hover:text-white m-2'>Magos</button>
        <button onClick={handelF} value="Marksman" className=' text-slate-300  hover:text-white m-2'>Tiradores</button>
        <button onClick={handelF} value="Support" className=' text-slate-300  hover:text-white m-2'>Soportes</button>
        <button onClick={handelF} value="Tank" className=' text-slate-300  hover:text-white m-2'>Tanques</button>
      </ul>
    </div>
    {(championsAll != undefined) ? (<div className=' flex flex-wrap  w-[90%] ml-[5%] my-8'>
      {recorrer(championsAll)}
      {champions.map(x => <Card key={x.key} champion={x.key}></Card>)}
    </div>
    ) : null}
  </div>
  )
}
export default HomePage