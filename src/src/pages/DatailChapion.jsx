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
  return (
    <div>
    {(detail != undefined) ? (
        <div className='flex flex-col w-screen items-center'>
          <section className='relative min-h-[75vh] pt-[30px] pb-[75px] w-screen bg-black'>
            <div className='relative w-full pb-[50%]'>
              <div className='absolute w-[110%] h-[110%]'>
                <img className='blur object-cover object-center w-[100%] h-[100%]' src={URLIm + champion + "_0.jpg"}></img>
              </div>
            </div>
            <h1 className='z-50 relative text-4xl text-center'>
              <span ><div><span>{detail[champion].title}</span></div></span>
              <span ><strong><div><span>{detail[champion].id}</span></div></strong></span>
            </h1>
          </section>
          
         {detail[champion].spells.map((x) => <><p>{x.name}</p><img className='z-50' src={URLSp + x.image.group + "/" + x.image.full} alt={x.image.full} /></>)}
    </div>):null}
  </div>
  )
}

export default DatailChapion