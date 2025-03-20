import React from 'react'
import { MdAddShoppingCart } from "react-icons/md";
import { BsPlus } from "react-icons/bs";
import { HiMiniMinus } from "react-icons/hi2";

const Card = ({ image, title, description, price, onAddToCart, quantity, onIncrease, onDecrease }) => {
  return (
    <div>
      <div className='flex justify-center relative'>
        <img  className={`w-64 h-64 rounded-xl ${quantity > 0 ? 'border-3 border-redd' : ''}`}  src={image} alt="image-food" />
        <button
          onClick={quantity === 0 ? onAddToCart : null}
          className={`
           cursor-pointer flex items-center justify-center gap-2
            absolute -bottom-5 w-44 h-12 border border-rosee-500 rounded-full
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
        </button>
      </div>
      <h1 className='pt-10 text-[14px]  font-normal text-rosee-400'>{title}</h1>
      <h2 className='text-[16px] font-bold text-rosee-900'>{description}</h2>
      <h3 className='text-redd font-semibold'>${price.toFixed(2)}</h3>
    </div>
  )
}

export default Card;
