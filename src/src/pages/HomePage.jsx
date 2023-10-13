import React, { useEffect } from 'react'
import { champiosAll } from '../api/dataApi'
function HomePage() {
 let all= {}
 const allc = (async ()=>{
   const a=await champiosAll
  return a
  })

  useEffect(async () => {
    all= await allc()
    console.log(all)
  })
  return (
    
    
    <div>aa</div>
  )
}

export default HomePage