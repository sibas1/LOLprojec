import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
      <ul class="flex border border-slate-500 bg-sky-900 py-2 px-8 justify-evenly  text-2xl ">
          <li class="mr-6">
              <Link to="/" class="text-slate-100 hover:text-slate-300" href="#">Champions</Link>
          </li>
          <li class="mr-6">
              <a class="text-slate-100  hover:text-slate-300" href="#">Objetos</a>
          </li>
      </ul>
  )
}

export default Navbar