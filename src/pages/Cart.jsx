import { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

function Cart() {
  const cart = useSelector(state => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(Math.round(cart.reduce((acc, curr) => acc + curr.price, 0)));
  }, [cart]);

  return (
    <div>
      {
        cart.length > 0 ?
          (
            <div className="flex max-w-6xl h-full mx-auto mt-5 mb-5">
              <div className="w-7/12 h-[80vh] overflow-auto flex flex-col">
                {
                  cart.map((item, index) => (<CartItem item={item} key={index} />))
                }
              </div>

              <div className="w-5/12 flex flex-col justify-between ml-10 px-5 py-12">
                <div className="flex flex-col text-green-700">
                  <div className="text-2xl font-semibold tracking-wide uppercase">Your Cart</div>

                  <div className="text-5xl font-bold tracking-wider uppercase">Summary</div>

                  <p className="text-xl font-semibold mt-4">
                    <span className="text-gray-600">Total Items: </span><span className='text-black'>{cart.length}</span>
                  </p>
                </div>

                <div className="space-y-2 w-full">
                  <div className='flex items-center justify-between'>
                    <p className="text-gray-600 text-2xl font-bold">Total Amount: </p>
                    <p className="text-black font-semibold text-2xl">${totalAmount}</p>
                  </div>
                  <button className="bg-green-700 text-white font-bold text-2xl py-3 px-5 w-full rounded-lg border-2 hover:bg-white transition duration-300 hover:text-green-700 hover:border-green-700">Checkout Now</button>
                </div>
              </div>
            </div>
          ) :
          <div className="max-w-6xl h-[85vh] mx-auto">
            <div className='w-full h-full flex items-center justify-center gap-8 flex-col font-semibold text-2xl'>
              <h1 className="text-gray-700">Your cart is empty!</h1>
              <Link to="/">
                <button className="bg-green-600 text-white font-bold text-base tracking-wide uppercase rounded-md py-4 px-8">Shop Now</button>
              </Link>
            </div >
          </div>
      }
    </div >
  );
}

export default Cart