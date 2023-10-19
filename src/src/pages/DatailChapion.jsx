import React ,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { useChampions } from '../context/champions'
function DatailChapion() {
  //console.log("id")
  const URLIm = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/"
  const URLSp = "http://ddragon.leagueoflegends.com/cdn/13.20.1/img/"
  const urlV ="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/"
  const { champion } = useParams();
  console.log(champion)
  const { getdatail, detail, limpiarD } = useChampions()
  const [skillInfo, setSkillInfo ] = useState(null)
  function handel (e){
    console.log(e.target.name)
    if (setSkillInfo !=null ){
      if (e.target.name =="pasive") {
        const pasiva = detail[champion].passive.description.replace(/<[^>]*>/g, '')
        setSkillInfo({
          name: detail[champion].passive.name,
          description: pasiva,
          key: `${urlV}${detail[champion].key.padStart(4, "0000")}/ability_${detail[champion].key.padStart(4, "0000") }_P1.webm`
        }
        )
      } if (e.target.name==champion+"Q"){
        setSkillInfo({
          name:detail[champion].spells[0].name,
          description: detail[champion].spells[0].description,
          key: `${urlV}${detail[champion].key.padStart(4, "0000")}/ability_${detail[champion].key.padStart(4, "0000")}_Q1.webm`
        })
      } if (e.target.name == (champion + "W")) {
        setSkillInfo({
          name:detail[champion].spells[1].name,
          description: detail[champion].spells[1].description,
          key: `${urlV}${detail[champion].key.padStart(4, "0000")}/ability_${detail[champion].key.padStart(4, "0000")}_W1.webm`
        })
      } if (e.target.name == champion + "E") {
        setSkillInfo({
          name:detail[champion].spells[2].name,
          description: detail[champion].spells[2].description,
          key: `${urlV}${detail[champion].key.padStart(4, "0000")}/ability_${detail[champion].key.padStart(4, "0000")}_E1.webm`
        })
      } if (e.target.name == champion + "R") {
        setSkillInfo({
          name:detail[champion].spells[3].name,
          description: detail[champion].spells[3].description,
          key: `${urlV}${detail[champion].key.padStart(4, "0000")}/ability_${detail[champion].key.padStart(4, "0000")}_R1.webm`
        })
      }
    console.log(skillInfo)
  }
    }

   function handel2 (e){
     console.log(e.target.name)
     if (setSkillInfo != null) {
       if (e.target.name == "pasive") {
         const pasiva = detail[champion].passive.description.replace(/<[^>]*>/g, '')
         setSkillInfo({
           name: detail[champion].passive.name,
           description: pasiva,
           key: `${urlV}${detail[champion].key.padStart(4, "0000")}/ability_${detail[champion].key.padStart(4, "0000")}_P1.webm`
         }
         )
       }}
     
   } 
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
              <div className='absolute object-center min-h-[50vh] w-[110%] h-[110%]'>
                <img className=' object-cover  object-center w-[100%] h-[100%] blur' src={URLIm + champion + "_0.jpg"}></img>
              </div>
              <div className='absolute opacity-75 bg-black w-[100%] h-[100%]'>
                
              </div>
              <div className='absolute  w-[100%] h-[100%]'>
                <img className=' opacity-100 relative object-center w-[80%] h-[100%] ml-[10%] mr-[10%]' src={URLIm + champion + "_0.jpg"}></img>
              </div>
            </div>
            <div className='border bg-opacity-75 bg-black relative z-50 p-8'>
              <h1 className='z-50 relative text-4xl text-center'>
                <span ><strong><div><span>{detail[champion].id}</span></div></strong></span>
                <span ><div><span>{detail[champion].title}</span></div></span>
              </h1>
            </div>
          </section>
          <section className='relative pt-[30px] pb-[75px] min-h-[25vh] w-screen bg-black'>
           <div className='flex flex-col'>
              <div className='flex justify-between border-2 border-double p-8 w-[60%] ml-[20%]'>
                <button type="button" autoFocus   name='pasive' onFocus={handel2} onClick={handel} className='active:border-2 focus:border-2'><img className='z-50' name="pasive" src={URLSp + "passive" + "/" + detail[champion].passive.image.full} alt={detail[champion].passive.image.full} /></button>
                {detail[champion].spells.map((x) => <>
                  <button type="button" onClick={handel} className='active:border-2 focus:border-2'><img class='z-40' name={x.id} src={URLSp + x.image.group + "/" + x.image.full} alt={x.image.full} /></button>
                </>)}
              </div>
              <div className='flex justify-between border-2 border-double p-8 w-[60%] ml-[20%]'>
                {skillInfo != null ? (<div className='flex flex-col'>
                  <strong>{skillInfo.name}</strong>
                  <span>{skillInfo.description}</span>
                  <video  autoPlay loop src={skillInfo.key}></video>
                  </div>) : null}
              </div>
           </div>
          </section>
    </div>)
    :null}
  </div>
  )
}

export default DatailChapion