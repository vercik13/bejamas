import React from 'react'
import logo from '../assets/logo.svg'
import { Dropdown, Badge } from "react-bootstrap"
import {BsCart3} from 'react-icons/bs'

const Header = () => {
  return (
    <nav className='flex justify-between border-primary border-b-4 border-color-primary pb-4 relative'>
      <img className="nav--logo" src={logo} alt="logo" />
      <Dropdown >
        <Dropdown.Toggle className='flex'>
          <BsCart3 className='text-4xl'/>
          <Badge className='p-0.5 mt-6 bg-black text-white'>{10}</Badge>
        </Dropdown.Toggle> 

        <Dropdown.Menu>
          <div className='absolute top-0 right-0 p-10 border-primary bg-white z-0 border-4'>
            <span >Cart is Empty</span>
            <button>Clear</button>
          </div>
        </Dropdown.Menu>
      </Dropdown>


    </nav>
  )
}

export default Header