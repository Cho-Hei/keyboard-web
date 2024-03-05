import React, { useEffect } from "react";
import Image from "next/image";
import { cartProductPrice } from "@/components/AppContext";
import Trash from "@/components/Trash";
import { CartProductProps } from "@/types/index";

const CartProduct = ({ index, product, onRemove }: CartProductProps) => {
  return (
    <div className='flex flex-col md:flex-row items-center m-4 p-5 rounded-lg  w-full'>
      <div className='object-none m-2 min-w-fit'>
        <Image
          src={`/${product.product.img}`}
          alt={product.product.productName}
          width={200}
          height={200}
        />
      </div>
      <div className='flex flex-col justify-center m-6 '>
        <h2 className='text-4xl font-bold mb-4'>
          {product.product.productName}
        </h2>
        <p className='text-base text-[#ADB7BE] overflow-wrap break-word'>
          ${cartProductPrice(product.product)} x {product.quantity}
        </p>
      </div>
      <button type='button' onClick={() => onRemove(index)} className='p-2'>
        <Trash />
      </button>
    </div>
  );
};

export default CartProduct;
