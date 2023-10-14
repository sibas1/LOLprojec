import React from 'react'
import { useChampions } from '../context/champions'
import { Link } from "react-router-dom";
function Card(props) {
    const { championsAll, getchampions } = useChampions()
    const URL ="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/"
  return (
      <Link to={`/detail/${props.champion}`}>
      <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <a href='a'><img className='' src={URL+props.champion+"_0.jpg"}/></a>
          <p className=''>{championsAll[props.champion].id}</p>
          {championsAll[props.champion].tags.map(x => <p className='font-mono m-1 inline'>{x}</p>)}
    </div>
    </Link>
  )
}

export default Card