import React from 'react'
import  {useState} from "react";
import IndividualFilteredProduct from './IndividualFilteredProduct';

const Card = ({name, category, price, currency, image, bestseller}) => {

  const [isHovering, setIsHovering] = useState(false);

  const [filteredProducts, setFilteredProducts] = useState([]);

  let currencyUSD
  if (currency === "USD")
    currencyUSD = "$"

  let badgeText 
  if (bestseller === true ) {
    badgeText = "Best Seller"
  } 

  return (
    <div className='justify-items-end w-3/12'>
      <div className='relative'>
        <img className=' object-cover w-fit h-96' src={image} alt="" 
        onMouseEnter={() => setIsHovering(true)} 
        onMouseLeave={() => setIsHovering(false)}/>
        {badgeText && <div className='absolute top-0 left-0 bg-slate-100'>{badgeText}</div>}
        <button className={`bg-black text-white uppercase p-1 absolute bottom-0 left-0 w-full ${isHovering ? " " : "hidden"}`}>Add to cart</button>
      </div>

      <span className='text-secondary font-semibold'>{category}</span>
      <h1 className='font-bold text-2xl'>{name}</h1>
      <div className='flex text-secondary font-semibold'>
        <p>{currencyUSD}</p>
        <span className='text-lg'>{price}</span>
      </div>

    </div>


  )
}

export default Card