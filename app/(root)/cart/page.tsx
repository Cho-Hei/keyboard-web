"use client";
import { CartContext } from "@/components/AppContext";
import AddressInputs from "@/components/AddressInputs";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import CartProduct from "@/components/CartProduct";
import { CartProductGroup, CartContextType } from "@/types/index";

export default function CartPage() {
  const { cartProducts, removeCartProduct } = useContext(
    CartContext
  ) as CartContextType;
  const [address, setAddress] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location.href.includes("canceled=1")) {
        toast.error("Payment failed 😔");
      }
    }
  }, []);

  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    let newSubtotal = 0;
    console.log(cartProducts);
    cartProducts?.forEach((product: CartProductGroup) => {
      newSubtotal += Number(product.product.price) * Number(product.quantity);
    });
    setSubtotal(newSubtotal);
  }, [cartProducts]);

  function handleAddressChange(propName: string, value: string) {
    setAddress((prevAddress) => ({ ...prevAddress, [propName]: value }));
  }
  async function proceedToCheckout(ev: React.FormEvent) {
    ev.preventDefault();
  }

  if (cartProducts?.length === 0) {
    return (
      <section className='mt-8 text-center min-h-screen'>
        <h2 className='font-bold text-4xl'>Cart</h2>
        <p className='mt-4'>Your shopping cart is empty 😔</p>
      </section>
    );
  }

  return (
    <section className='mt-8 min-h-screen'>
      <div className='text-center'>
        <h2 className='text-primary font-bold text-4xl'>Cart</h2>
      </div>
      <div className='mt-8 grid gap-8 grid-cols-2'>
        <div>
          {cartProducts?.length === 0 && (
            <div>No products in your shopping cart</div>
          )}
          {cartProducts?.length > 0 &&
            cartProducts.map((product: CartProductGroup, index: number) => (
              <CartProduct
                key={index}
                index={index}
                product={product}
                onRemove={removeCartProduct}
              />
            ))}
        </div>
        <div>
          <div className='py-2 pr-16 flex justify-end items-center'>
            <div className='text-gray-500'>
              Subtotal:
              <br />
              Delivery:
              <br />
              Total:
            </div>
            <div className='font-semibold pl-2 text-right'>
              ${subtotal}
              <br />
              $5
              <br />${subtotal + 5}
            </div>
          </div>

          <div className='bg-gray-100 p-4 rounded-lg'>
            <h2>Checkout</h2>
            <div onSubmit={proceedToCheckout}>
              <AddressInputs
                addressProps={address}
                setAddressProp={handleAddressChange}
              />
              <button type='submit'>Pay ${subtotal + 5}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
