import React, { Component, useEffect } from 'react'
import { useChampions } from '../context/champions'
import Card from '../componets/Card'
function HomePage() {
  const { championsAll, getchampions } = useChampions()
  let champions =[]

function recorrer(obj){
  for (const key in obj) { 
    champions.push(key)
  }
}

  useEffect(() => {
    getchampions()
    }, [])
 

  return (
    (championsAll != undefined) ? (<div className='grid gap-4 grid-cols-8 grid-rows-3'>
     { recorrer(championsAll) }
      {champions.map(x => <Card champion={x}></Card>)}
    </div>
    ):null
  )
}

export default HomePage