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
      console.log("Kliknuto na katergorii")
    )
  })
}

const handleCategoryClick = (category) => {
  return (
    console.log("kliklo se na: ", category)
  )
}


  return (
    <>

      <div className='w-1/4'>

      <p className='text-xl font-semibold'>Category</p>
        
        <div className='py-5 flex flex-col space-y-6'>
         
         <button className='flex' onClick={handleCategoryClick("People")}>
            <Form.Check
              category="people"
              type="checkbox"
            />
            <p className='ml-4'>People</p>
   
          </button>

          <button className='flex' onClick={() => handleCategoryClick("Premium")}>
            <Form.Check
              name="group1"
              type="checkbox"
            />
            <p className='ml-4'>Premium</p>
          </button>

          <button className='flex' onClick={() => handleCategoryClick("Pets")}>
            <Form.Check
              inline
              name="group1"
              type="checkbox"
            />
            <p className='ml-4'>Pets</p>
          </button>

          <button className='flex' onClick={() => handleCategoryClick("Food")}>
            <Form.Check
              inline
              name="group1"
              type="checkbox"
            />
            <p className='ml-4'>Food</p>
          </button>

          <button className='flex' onClick={() => handleCategoryClick("Landmarks")}>
            <Form.Check
              inline
              name="group1"
              type="checkbox"
            />
            <p className='ml-4'>Landmarks</p>
          </button>

          <button className='flex' onClick={() => handleCategoryClick("Cities")}>
            <Form.Check
              inline
              name="group1"
              type="checkbox"
            />
            <p className='ml-4'>Cities</p>
          </button>

          <button className='flex' onClick={() => handleCategoryClick("Nature")}>
            <Form.Check
              inline
              name="group1"
              type="checkbox"
            />
            <p className='ml-4'>Nature</p>
          </button>

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
