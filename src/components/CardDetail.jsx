import React from 'react'
import data from '../data';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'

const CardDetail = () => {

  const featuredTrue = data.filter(flag => {
   return flag.featured
  });
  
  const cardDetail = featuredTrue.map(item => {

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

          <div className='py-5 flex flex-wrap'>
            <div className='w-2/4'>
              <p className='text-xl font-semibold'>About {item.name}</p>
              <p className='text-slate-400 font-semibold'>{item.category}</p>
              <p>{item.details.description}</p>
            </div>

            <div className='w-2/4 text-right'>
              <p className='text-2xl font-semibold'>People also buy</p>
              <div className='py-5 flex gap-8 justify-end'>
                <img className='w-1/6' src={img1} />
                <img className='w-1/6' src={img2} />
                <img className='w-1/6' src={img3} />
              </div>
              <p className=' text-lg font-semibold  '>Details</p>
              <p className='text-secondary'>Size: 1020 x 1020 pixel</p>
              <p className='text-secondary'>Size: 15 mb</p>
            </div>

          </div>


          <div className='border-primary border-b-4 border-color-primary my-10'></div>
        </div>



    )
  })

  return (
    <>
      {cardDetail}
    </>
  )
}

export default CardDetail