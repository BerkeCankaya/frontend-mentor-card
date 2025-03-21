import React, { useState } from 'react'
import Card from './components/Card'
import Baklava from "./assets/image-baklava-desktop.jpg"
import Brownie from "./assets/image-brownie-desktop.jpg"
import Cake from "./assets/image-cake-desktop.jpg"
import CremeBrulee from "./assets/image-creme-brulee-desktop.jpg"
import Macaron from "./assets/image-macaron-desktop.jpg"
import Meringue from "./assets/image-meringue-desktop.jpg"
import PannaCotta from "./assets/image-panna-cotta-desktop.jpg"
import Tiramisu from "./assets/image-tiramisu-desktop.jpg"
import Waffle from "./assets/image-waffle-desktop.jpg"
import EmptyCard from "./assets/illustration-empty-cart.svg"
import { TiDeleteOutline } from "react-icons/ti";
import CarbonNeutralIcon from './assets/icon-carbon-neutral.svg';
import IconConfirmed from './assets/icon-order-confirmed.svg';


function App() {

  const data=[
    {
      id:1,
      title:"Waffle",
      image:Waffle,
      description:"Waffle with Berries",
      price:6.50,
      quantity: 1 
    },
    {
      id:2,
      title:"Crème brûlée",
      image:CremeBrulee, 
      description:"Vanilla Bean Crème brûlée",
      price:7.00,
      quantity: 1 
    },
    {
      id:3,
      title:"Macaron",
      image:Macaron,
      description:"Macaron Mix of Fİve",
      price:8.00,
      quantity: 1 
    },
    {
      id:4,
      title:"Tiramisu",
      image:Tiramisu,
      description:"Classic Tiramisu",
      price:5.50,
      quantity: 1 
    },
    {
      id:5,
      title:"Baklava",
      image:Baklava,
      description:"Pistachio Baklava",
      price:4.00,
      quantity: 1 
    },
    {
      id:6,
      title:"Pie",
      image:Meringue,
      description:"Lemon Meringue Pie",
      price:5.00,
      quantity: 1 
    },
    {
      id:7,
      title:"Cake",
      image:Cake,
      description:"Red Velvet Cake",
      price:4.50,
      quantity: 1 
    },
    {
      id:8,
      title:"Brownie",
      image:Brownie,
      description:"Salted Caramel Brownie",
      price:5.50,  quantity: 1 
    },
    {
      id:9,
      title:"Panna Costa",
      image:PannaCotta,
      description:"Vanilla Panna Cotta",
      price:6.50,
      quantity: 1 
    }
  ]

  const [cart,setCart] = useState([]);

  const handleAddToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const handleRemoveCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  

  const handleIncreaseQuantity = (id) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };
  
  const handleDecreaseQuantity = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ).filter(item => item.quantity > 0);
    
    setCart(updatedCart);
  };
  
  const [ModalPageOpen, setModalPageOpen] = useState(false);
  
  return (
   <div className="min-h-screen flex justify-center ">
    <div className='min-w-[85%] pt-[75px] flex max-md:flex-col max-md:items-center '>
      <div className='w-[70%] h-full max-md:w-[80%] max-sm:flex max-sm:flex-col'>
        <h1 className="pb-5 pl-14 max-sm:pl-0 max-sm:text-4xl text-rosee-900 font-redhat  text-4xl font-extrabold">Desserts</h1>
        <div className='gap-2 w-full h-full grid grid-cols-3 grid-rows-3 place-items-center max-xl:gap-6 max-lg:gap-2 max-lg:grid-cols-2 max-lg:grid-rows-4 max-md:grid-cols-1 max-md:grid-rows-9 max-sm:gap-y-5'>
          {data.map((item) => 
            <Card 
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
            onAddToCart={() => handleAddToCart(item)}
            quantity={cart.find(cartItem => cartItem.id === item.id)?.quantity || 0}
            onIncrease={() => handleIncreaseQuantity(item.id)}
            onDecrease={() => handleDecreaseQuantity(item.id)}
            />
          )}
        </div>
      </div>
      <div className='w-[30%] h-full max-md:w-full max-md:pt-20'>
          <h1 className='p-6 max-md:pl-20  font-redhat text-redd text-xl font-extrabold'>Your Cart ({cart.length})</h1>
          {cart.length == 0 ? (
          <div className='flex flex-col items-center h-full'>
          <img className='w-[150px] h-[150px]' src={EmptyCard} alt="" />
          <p className='text-rosee-500 font-semibold text-[14px]'>Your added items will apper here</p>
          </div>
          ) : (
            <div className='w-full  pl-5 h-full'>
              {cart.map((item,index) => (
                <div key={index} className='flex flex-col pt-7 p-2 rounded'>
                  <div className='flex justify-between items-center'>
                    <div className='w-[90%] flex flex-col gap-y-2'>
                      <h2 className='text-[16px] font-bold text-rosee-900'>{item.description}</h2>
                      <div className='flex gap-x-5'>
                        <h3 className='text-redd font-bold'>{item.quantity}x</h3> 
                        <h3 className='text-rosee-500 font-semibold'><span className='text-rosee-500 text-xs'>@ </span>${item.price.toFixed(2)}</h3>
                        <h3 className='text-rosee-500 font-semibold'>${(item.price * item.quantity).toFixed(2)}</h3>
                      </div>
                    </div>
                    <div className='h-full flex items-center w-[10%]'>
                    <TiDeleteOutline onClick={() => handleRemoveCart(item.id)} className='text-3xl text-rosee-500 cursor-pointer hover:text-rosee-900' />
                    </div>
                    
                  </div> 
                </div>
              ))}
              <div className='flex justify-between px-2 pt-15'> 
                    <h1 className='text-lg'>Order Total</h1>
                    <h1 className='text-rosee-900 font-bold text-3xl '>${totalPrice.toFixed(2)}</h1>
              </div>
              <div className='flex items-center gap-2 justify-center pt-[50px]'>
               <img src={CarbonNeutralIcon} alt="" />
               <h1 className='text-rosee-900 text-sm'>This is a <span className='font-bold'>carbon-neutral</span> delivery</h1>
              </div>
              <div className='pt-[50px] flex items-center justify-center'>
              <button onClick={() => setModalPageOpen(true)} className='w-[90%] cursor-pointer bg-redd rounded-full py-3 flex items-center justify-center text-rosee-100'>Confirm Order</button>
              </div>
              {ModalPageOpen && (
                <div className='fixed flex justify-center items-center inset-0 bg-black/50 z-40'>
                   <div className="bg-rosee-100  rounded-2xl w-[500px] min-h-[550px] shadow-2xl relative flex justify-center pt-4">
                      <div className='w-[90%] h-[90%] p-4 flex flex-col gap-y-4 '>
                        <div className='w-full h-1/4'>
                        <img className='w-10 h-10' src={IconConfirmed} alt="" />
                        </div>
                        <div className='flex flex-col gap-y-3'>
                        <h1 className='text-3xl text-rosee-900 font-bold'>Order Confirmed</h1>
                        <h3 className='text-sm text-rosee-900 font-light'>We hope you enjoy your food!</h3>
                        </div>
                        {cart.map((item,index) => 
                        <div key={index} className='w-full  min-h-1/2 pl-8 flex justify-between'>
                          <div className='flex items-center gap-x-4'>
                            <img className='w-12 h-12 rounded' src={item.image} alt="" />
                            <div className='flex flex-col justify-between gap-y-3'>
                              <h1>{item.description}</h1>
                              <div className='flex gap-x-5'>
                              <h2 className='text-l text-redd'>{item.quantity}x</h2>
                              <h2 className='text-l text-rosee-500 font-light'>@ ${item.price.toFixed(2)}</h2>
                              </div>
                            </div>
                          </div>
                          <div className='flex items-center'>
                            <h2 className='font-semibold text-rosee-900 text-sm'>${(item.price * item.quantity).toFixed(2)}</h2>
                          </div>
                        </div>
                        )} 
                        <div className='flex flex-col gap-y-4 '>
                          <div className='flex items-center justify-between p-2 pl-4'>
                          <h1 className='text-rosee-900 font-light text-sm'>Order Total</h1>
                          <h1 className='text-xl text-rosee-900 font-semibold'>${totalPrice.toFixed(2)}</h1>
                          </div>
                          <div className='flex justify-center items-center'>
                            <button onClick={() => {setModalPageOpen(false); setCart([]);}} className='w-full py-2 bg-redd rounded-full text-rosee-100 cursor-pointer'>Start New Order</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              )}
              </div>
  
          )}
          
      </div>
    </div>
   </div>
  )
}

export default App