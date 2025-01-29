import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item removed from cart");
    }

    return (
        <div className="w-full h-full border-b-2 border-gray-600 p-4 pb-10 mb-5">
            <div className="flex justify-start items-center w-full h-full gap-x-5">
                <div className="w-[30%]">
                    <img src={item.image} className="w-[170px] h-full" />
                </div>

                <div className="w-[60%] h-full flex flex-col items-start justify-center gap-y-8">
                    <h1 className="text-gray-700 font-bold text-xl ">{item.title}</h1>

                    <p className="text-gray-700 text-lg">{item.description.split(" ").slice(0, 10).join(" ")}...</p>

                    <div className="flex items-center justify-between w-full">
                        <p className="text-lg font-bold text-green-700">${item.price}</p>
                        <button className="bg-red-200 p-4 rounded-full"
                            onClick={removeFromCart}>
                            <MdDelete className="text-red-700" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem