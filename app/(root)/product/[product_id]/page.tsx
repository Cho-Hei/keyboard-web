"use client";
import { useContext, useState } from "react";
import Image from "next/image";
import { PRODUCTS } from "@/data";
import { CartContext } from "@/components/AppContext";
import { ProductProps, CartContextType } from "@/types/index";

interface IProps {
  params: {
    product_id: string;
  };
  searchParams: {};
}

const page = ({ params }: IProps) => {
  const CurrentProduct: ProductProps | undefined = PRODUCTS.find(
    (product) => product.id === params.product_id
  ) as ProductProps | undefined;

  const [itemamount, setItemamount] = useState(1);

  const { addToCart } = useContext(CartContext) as CartContextType;

  async function handleAddToCartButtonClick() {
    console.log("add to cart");

    if (CurrentProduct) {
      console.log("adding to cart", CurrentProduct, itemamount);
      addToCart(CurrentProduct, itemamount);
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("hiding popup");
  }

  return (
    <section className='2xl:max-container min-h-screen relative pb-20'>
      <div className='grid md:grid-cols-2 md:grid-flow-col content-start gap-4 max-container padding-container relative w-full m-8 '>
        <div className='place-self-center place-content-center items-center place-items-center'>
          <Image
            src={`/${CurrentProduct?.img}`}
            alt='map'
            width={500}
            height={500}
          />
        </div>
        <div className='grid'>
          <h4 className='text-[14px] break-all'>{CurrentProduct?.brand}</h4>
          <h1 className='text-[42px] break-all leading-normal'>
            {CurrentProduct?.productName}
          </h1>
          <h2 className='text-[24px]'>{CurrentProduct?.price}</h2>

          <div>
            <div className='flex items-center rounded border border-gray-200 w-min'>
              <button
                type='button'
                className='h-10 w-10 leading-10 text-gray-600 transition hover:opacity-75'
                onClick={() => setItemamount((prev) => prev - 1)}>
                &minus;
              </button>

              <input
                type='number'
                id='Quantity'
                value={itemamount}
                className='h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none'
                onChange={(e) => setItemamount(Number(e.target.value))}
              />

              <button
                type='button'
                className='h-10 w-10 leading-10 text-gray-600 transition hover:opacity-75'
                onClick={() => setItemamount((prev) => prev + 1)}>
                &#43;
              </button>
            </div>
          </div>

          <div
            className='flex flex-col'
            onClick={() => handleAddToCartButtonClick()}>
            <button
              type='button'
              className='bg-black text-white px-4 py-2 rounded-md my-2'>
              Add to Cart
            </button>
          </div>

          <div>
            <h3 className='text-[24px] my-4'>Features</h3>
            <ul className='list-disc list-inside'>
              {CurrentProduct?.features?.map((feature, index) => (
                <li key={index} className='text-[16px] break-words'>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
