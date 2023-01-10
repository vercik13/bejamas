import React, { useState } from 'react'
import {Form} from 'react-bootstrap'
import data from '../../data'


const Filter = () => {

  const handlePeopleClick = () => {


  const filterPeople = data.filter(people => {
    if (people.category === "People")
    return people
   });
   
   const peopleCards = filterPeople.map(item => {
    return (
      <div>
        <div className='flex justify-between pt-10 pb-5'>
            <p className='text-2xl font-semibold'>{item.name}</p>
            <button className='bg-black text-white uppercase px-5 py-1'>add to cart</button>
          </div>

          <div className='relative'>
            <img className=' w-full h-96 object-cover'src={item.image} alt=""/>
            <div className='absolute bottom-0 left-0 bg-slate-100 font-semibold py-3 px-5'>Photo of the day</div>
          </div>
      </div>
    )
  })

}

  return (
    <>

      <div className='w-1/4'>

      <p className='text-xl font-semibold'>Category</p>
        
        <div className='py-5 flex flex-col space-y-6'>
         
         <button className='flex' onClick={handlePeopleClick}>
          {peopleCards}
            <Form.Check
              category="people"
              type="checkbox"
            />
            <p className='ml-4'>People</p>
   
          </button>

          <span className='flex'>
            <Form.Check
              name="group1"
              type="checkbox"
            />
            <p className='ml-4'>Premium</p>
          </span>

          <span className='flex'>
            <Form.Check
              inline
              name="group1"
              type="checkbox"
            />
            <p className='ml-4'>Pets</p>
          </span>

          <span className='flex'>
            <Form.Check
              inline
              name="group1"
              type="checkbox"
            />
            <p className='ml-4'>Food</p>
          </span>

          <span className='flex'>
            <Form.Check
              inline
              name="group1"
              type="checkbox"
            />
            <p className='ml-4'>Landmarks</p>
          </span>

          <span className='flex'>
            <Form.Check
              inline
              name="group1"
              type="checkbox"
            />
            <p className='ml-4'>Cities</p>
          </span>

          <span className='flex'>
            <Form.Check
              inline
              name="group1"
              type="checkbox"
            />
            <p className='ml-4'>Nature</p>
          </span>

         </div>

          <div className='border-primary border-b-4 border-color-primary my-8 w-3/4'></div>

      <p className='text-xl font-semibold'>Price range</p>
      
      <div className='py-5 flex flex-col space-y-6'>
      <span className='flex'>
          <Form.Check
            inline
            name="group1"
            type="checkbox"
          />
          <p className='ml-4'>Lower than $20</p>
        </span>

        <span className='flex'>
          <Form.Check
            inline
            name="group1"
            type="checkbox"
          />
          <p className='ml-4'>$20 - $100</p>          
        </span>

        <span className='flex'>
          <Form.Check
            inline
            name="group1"
            type="checkbox"
          />
          <p className='ml-4'>$100 - $200</p>
        </span>

        <span className='flex'>
          <Form.Check
            inline
            name="group1"
            type="checkbox"
          />
          <p className='ml-4'>More than $2000</p>
        </span>

      </div>
      </div>

    </>
  )
}

export default Filter
