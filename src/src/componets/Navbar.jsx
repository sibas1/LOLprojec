import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <ul className="select-none flex border border-slate-500 bg-black py-2 px-8 justify-evenly w-[100%] text-2xl ">
            <li className="mr-6">
                <Link to="/" className="text-slate-100 hover:text-slate-300">Campeones</Link>
            </li>
            <li className="mr-6">
                <Link to="/item" className="text-slate-100  hover:text-slate-300" >Objetos</Link>
            </li>
        </ul>
    )
}

export default Navbar