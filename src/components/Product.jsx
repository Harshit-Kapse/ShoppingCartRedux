import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from "../redux/Slices/CartSlice";
import toast from 'react-hot-toast';

const Product = ({ post }) => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(post));
        toast.success("Item added to cart");
    }

    const removeFromCart = () => {
        dispatch(remove(post.id));
        toast.error("Item removed from cart");
    }

    return (
        <div className='flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in shadow-[0px_5px_10px_rgba(0,_0,_0,_0.3)] hover:shadow-[rgba(0,_0,_0,_0.5)_0px_30px_150px] gap-3 p-4 mt-10 ml-5 rounded-xl'>
            <div className='text-gray-700 font-bold text-xl text-left truncate w-40 mt-1'>
                <p>{post.title.length > 15 ? `${post.title.substring(0, 15)}...` : post.title}</p>
            </div>

            <div>
                <p className="w-40 text-gray-400 font-normal text-[11px] text-left leading-[12px] mt-1">{post.description.split(" ").slice(0, 10).join(" ")}...</p>
            </div>

            <div className='h-[180px]'>
                <img src={post.image} className='h-full w-full' />
            </div>

            <div className='flex items-center justify-between w-full mt-5'>
                <div>
                    <p className='text-green-600 font-semibold text-lg'>${post.price}</p>
                </div>

                {
                    cart.some(cartItem => cartItem.id === post.id) ?
                        <button className="uppercase text-gray-700 border-2 border-gray-700 rounded-full font-bold text-xs py-1 px-3 hover:bg-gray-700 hover:text-white transition duration-300" onClick={removeFromCart}>Remove item</button> :
                        <button className="uppercase text-gray-700 border-2 border-gray-700 rounded-full font-bold text-xs py-1 px-3 hover:bg-gray-700 hover:text-white transition duration-300" onClick={addToCart}>Add to cart</button>
                }
            </div>
        </div >
    )
}

export default Product