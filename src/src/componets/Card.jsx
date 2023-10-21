import React from 'react'
import { useChampions } from '../context/champions'
import { Link } from "react-router-dom";
function Card(props) {
    const { championsAll, getchampions } = useChampions()
    const URL ="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/"
  return (
    <Link className=' relative flex-[1_1_18%] max-w-[20%] box-border m-1 group ' to={`/detail/${props.champion}`}>

      <div tag={championsAll[props.champion].tags} className='pb-[120%] relative overflow-hidden block ' >
        <a href='a'><img className='object-cover absolute group-hover:scale-125 ' src={URL+props.champion+"_0.jpg"}/></a>
        
    </div>
      <samp className='block font-sans text-[0.9em] tracking-[0.2em] group-hover:bg-[#33876b] font-bold bg-[#061C25] py-[6%] px-[8%]'>{championsAll[props.champion].name}</samp>
    </Link>
  )
}

export default Card