import React ,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useChampions } from '../context/champions'
function DatailChapion() {
  //console.log("id")
  const URLIm = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/"
  const URLSp = "http://ddragon.leagueoflegends.com/cdn/13.20.1/img/"
  const { champion } = useParams();
  console.log(champion)
  const { getdatail, detail, limpiarD } = useChampions()

  useEffect(() => {
    getdatail(champion)
    return () => {
      limpiarD()
    }
  }, [])
  console.log(detail)
  return (<>
    {(detail != undefined) ? (<div>
      <p>{detail[champion].id}</p>
      <img src={URLIm+champion+"_0.jpg"}></img>
      {detail[champion].spells.map((x) => <><p>{x.name}</p><img src={URLSp + x.image.group +"/"+ x.image.full} alt={x.image.full} /></>)}
      </div>):null}
    </>
  )
}

export default DatailChapion