import React from 'react'
import { useParams } from 'react-router-dom'
import { useChampions } from '../context/champions'

function DatailChapion() {
  //console.log("id")
  const { champion } = useParams();
  console.log(champion)
  /*const { getdatail, detail }=useChampions
  useEffect(() => {
    getdatail(champion)
  }, [])*/
  return (
    <div></div>
  )
}

export default DatailChapion