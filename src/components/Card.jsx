import React from 'react'
import { MdAddShoppingCart } from "react-icons/md";
import { BsPlus } from "react-icons/bs";
import { HiMiniMinus } from "react-icons/hi2";

const Card = ({ image, title, description, price, onAddToCart, quantity, onIncrease, onDecrease }) => {
  return (
    <div className='max-lg:w-full max-lg:h-full'>
      <div className='flex justify-center relative'>
        <img  className={`w-64 h-64 max-xl:w-54 max-xl:h-54 max-md:w-full rounded-xl ${quantity > 0 ? 'border-3 border-redd' : ''}`}   src={image} alt="image-food" />
        <div
          onClick={quantity === 0 ? onAddToCart : null}
          className={`
           cursor-pointer flex items-center justify-center gap-2
            absolute -bottom-5 w-44 h-12 border border-rosee-500 rounded-full
            max-xl:w-38 max-xl:text-sm max-xl:h-10
            max-md:w-44 max-md:h-12
            ${quantity === 0 ? 'bg-rosee-100' : 'bg-redd'}
            transition-all
          `}
        >
          {quantity === 0 ? (
            <>
              <MdAddShoppingCart className='text-orange-400' />
              Add to Cart
            </>
          ) : (
            <div className="flex items-center gap-3">
              <button
                onClick={(e) => { e.stopPropagation(); onDecrease(); }}
                className="cursor-pointer text-rosee-100 flex items-center justify-center w-6 h-6 rounded-full hover:bg-rosee-100 hover:text-redd border-1"
              >
                <HiMiniMinus className='text-sm' />
              </button>
              <span className="text-lg  text-rosee-100">{quantity}</span>
              <button
                onClick={(e) => { e.stopPropagation(); onIncrease(); }}
                className="cursor-pointer text-rosee-100 flex items-center justify-center w-6 h-6 rounded-full hover:bg-rosee-100 hover:text-redd border-1"
              >
                <BsPlus />
              </button>
            </div>
          )}
        </div>
      </div>
      <h1 className='pt-10 max-lg:pt-7 text-[14px] max-xl:text-[12px] font-normal text-rosee-400'>{title}</h1>
      <h2 className='max-xl:text-[14px] text-[16px] font-bold text-rosee-900'>{description}</h2>
      <h3 className=' text-redd font-semibold'>${price.toFixed(2)}</h3>
    </div>
  )
}

export default Card;
