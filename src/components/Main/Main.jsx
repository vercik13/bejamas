import React from 'react'
import MainHead from './MainHead'
import Filter from './Filter'
import Card from './Card'
import data from '../../data'

const Main = () => {

  const cards = data.map(item => {
    return (
      <Card 
      name={item.name}
      category={item.category}
      price={item.price}
      currency={item.currency}
      image={item.image}
      bestseller={item.bestseller}
      featured={item.featured}
      details={item.details}
      />
      )
  })


  return (
    <div>
      <MainHead />
      <div className='flex my-10'>
        <Filter />
        <section className='w-3/4'>
          <div className='flex flex-wrap gap-10 justify-end'>
            {cards}
          </div>
        </section>
      </div>

    </div>
  )
}

export default Main