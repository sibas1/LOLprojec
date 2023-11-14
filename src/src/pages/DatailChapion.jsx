import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useChampions } from '../context/champions'


function DatailChapion() {
  const [skin, setSkin] = useState({ num: 0, name: "default" });
  const URLIm = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/"
  const URLSp = "http://ddragon.leagueoflegends.com/cdn/13.20.1/img/"
  const urlV = "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/"
  const URLSS = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/"
  const { champion } = useParams();
  const { getdatail, detail, limpiarD } = useChampions()
  const [skillInfo, setSkillInfo] = useState(null)
  const imageToPreload = new Image();
  imageToPreload.src = URLIm + champion + "_0.jpg";

  function handel(e) {
    if (setSkillInfo != null) {
      if (e.target.name == "pasive") {
        const pasiva = detail[champion].passive.description.replace(/<[^>]*>/g, '')
        setSkillInfo({
          name: "Pasiva :" + detail[champion].passive.name,
          description: pasiva,
          key: `${urlV}${detail[champion].key.padStart(4, "0000")}/ability_${detail[champion].key.padStart(4, "0000")}_P1.webm`
        }
        )
      } if (e.target.name == 0) {
        setSkillInfo({
          name: "Q :" + detail[champion].spells[0].name,
          description: detail[champion].spells[0].description.replace(/<[^>]*>/g, ''),
          key: `${urlV}${detail[champion].key.padStart(4, "0000")}/ability_${detail[champion].key.padStart(4, "0000")}_Q1.webm`
        })
      } if (e.target.name == 1) {
        setSkillInfo({
          name: "W :" + detail[champion].spells[1].name,
          description: detail[champion].spells[1].description.replace(/<[^>]*>/g, ''),
          key: `${urlV}${detail[champion].key.padStart(4, "0000")}/ability_${detail[champion].key.padStart(4, "0000")}_W1.webm`
        })
      } if (e.target.name == 2) {
        setSkillInfo({
          name: "E :" + detail[champion].spells[2].name,
          description: detail[champion].spells[2].description.replace(/<[^>]*>/g, ''),
          key: `${urlV}${detail[champion].key.padStart(4, "0000")}/ability_${detail[champion].key.padStart(4, "0000")}_E1.webm`
        })
      } if (e.target.name == 3) {
        setSkillInfo({
          name: "R :" + detail[champion].spells[3].name,
          description: detail[champion].spells[3].description.replace(/<[^>]*>/g, ''),
          key: `${urlV}${detail[champion].key.padStart(4, "0000")}/ability_${detail[champion].key.padStart(4, "0000")}_R1.webm`
        })
      }
    }
  }

  function handel2(e) {
    if (setSkillInfo != null) {
      if (e.target.name == "pasive") {
        const pasiva = detail[champion].passive.description.replace(/<[^>]*>/g, '')
        setSkillInfo({
          name: "Pasiva :" + detail[champion].passive.name,
          description: pasiva,
          key: `${urlV}${detail[champion].key.padStart(4, "0000")}/ability_${detail[champion].key.padStart(4, "0000")}_P1.webm`
        }
        )
      }
    }

  }

  function skinsN(e) {
    setSkin({
      num: e.target.name,
      name: e.target.alt
    })
  }

  function scroll() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {

    getdatail(champion)
    window.scrollTo(0, 0);

    return () => {
      limpiarD()
    }
  }, [])

  return (
    <div className='relative max-w-[100%]'>

      <div className='flex flex-col w-[100%] items-center'>
        <section className='relative min-h-[75vh]  pt-[15px] pb-[75px] w-[100%] bg-black'>
          <div className='relative w-full pb-[50%]'>
            <div className='absolute object-center min-h-[50vh] w-[100hv] h-[110%]'>
              <img onLoad={scroll} className=' object-cover  object-center w-[100%] h-[100%] blur' src={imageToPreload.src}></img>
            </div>
            <div className='absolute opacity-75 bg-black w-[100%] h-[100%]'>

            </div>
            <div className='absolute  w-[100%] h-[100%]'>
              <img className=' opacity-100 relative object-center  w-[80%] h-[100%] ml-[10%] mr-[10%]' src={imageToPreload.src}></img>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75 "></div>
            </div>
          </div>
          {(detail != undefined) ? (<div className='border flex justify-center bg-opacity-75 bg-black relative z-50 p-8'>
            <h1 className=' z-50 relative text-4xl text-center'>
              <span ><strong><div><span>{detail[champion].id}</span></div></strong></span>
              <span ><div><p className='bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent ease-in duration-300 first-letter:uppercase'>{detail[champion].title}</p></div></span>
              {detail ? (<div className='flex justify-center mt-3'><img src={`../assets/${detail[champion].tags[0]}.png`}></img></div>) : null}
            </h1>

          </div>)
            : null}
        </section>
        <section style={{
          backgroundImage: `url(../public/assets/fondn.jpg)`,
        }} className='relative pt-[30px] pb-[75px] min-h-[25vh] w-[100%] '>
          <div className='flex flex-col'>
            {(detail != undefined) ? (<div key="aaaa" className='flex justify-between select-none border-slate-500 border-b-0  border-2 border-double p-8 w-[60%] ml-[20%]'>
              <button key="pasive" type="button" autoFocus  name='pasive' onFocus={handel2} onClick={handel} className='active:border-2 focus:border-2'><img className='z-50' name="pasive" src={URLSp + "passive" + "/" + detail[champion].passive.image.full} alt={detail[champion].passive.image.full} /></button>
              {detail[champion].spells.map((x, i) => <>
                <button type="button" key={x.name} onClick={handel} className='active:border-2 hover:-translate-y-2 focus:border-2'><img className='z-40' name={i} src={URLSp + x.image.group + "/" + x.image.full} alt={x.image.full} /></button>
              </>)}
            </div>
            )
              : null}
            <div className='flex justify-between  border-slate-500 border-2 border-double p-8 w-[60%] ml-[20%]'>
              {skillInfo != null ? (<div className='flex flex-col'>
                <strong className='my-2'>{skillInfo.name}</strong>
                <span className='mb-8'>{skillInfo.description}</span>
                <video autoPlay muted loop src={skillInfo.key}></video>
              </div>) : null}
            </div>
            {detail ? (<div className='w-[50%] text-gray-500 z-50 ml-[20%]'>
              <a href={"https://www.op.gg/champions/" + champion.toLowerCase()}>op.gg </a>
              <a className="m-5" href={"https://www.probuilds.net/champions/details/" + detail[champion].key}>probuilds.net</a>
              <a href={"https://www.leagueofgraphs.com/es/champions/builds/" + champion.toLowerCase()}>leagueofgraphs.com</a>
            </div>) : null}
          </div>
        </section>
        <section className='relative pt-[30px] pb-[70px]  w-[100%] bg-black'>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          {(detail != undefined) ? (<div className='flex flex-col w-[70%]  ml-[15%] text-center'>
            <span className='text-4xl m-8'>Historia del campeon</span>
            <span>{detail[champion].lore}</span>
          </div>)
            : null}
        </section>
        <section style={{
          backgroundImage: `url(../public/assets/fondn.jpg)`,
        }} className='relative  pb-[75px] min-h-[25vh] w-[100%] bg-black'>
          <hr className="h-px mb-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div className=' flex flex-col  p-8 '>
            <span className='text-4xl text-center'>{skin.name}</span>
            {detail ? (<div className='my-8 m-auto' ><img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_${skin.num}.jpg`} /></div>) : null}
            <div className='w-[90%] ml-[5%] '>
              <ul className='flex flex-row justify-center'>
                {detail ? (detail[champion].skins.map((x) => <li className='flex flex-col' >
                  <button onClick={skinsN} ><img className='w-24' name={x.num} alt={x.name} src={URLSS + champion + "_" + x.num + ".jpg"}></img></button>
                </li>)
                ) : null}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DatailChapion