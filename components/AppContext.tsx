"use client";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ProductProps, CartProductGroup, CartContextType } from "@/types/index";

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function cartProductPrice(cartProduct: any) {
  let price = cartProduct.price;
  return Number(price);
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [cartProducts, setCartProducts] = useState<CartProductGroup[]>([]);

  const ls = typeof window !== "undefined" ? window.localStorage : null;

  useEffect(() => {
    if (ls && ls.getItem("cart")) {
      setCartProducts(JSON.parse(ls.getItem("cart") || ""));
    }
  }, []);

  function clearCart() {
    setCartProducts([]);
    saveCartProductsToLocalStorage([]);
  }

  function removeCartProduct(indexToRemove: number) {
    setCartProducts((prevCartProducts) => {
      const newCartProducts = prevCartProducts.filter(
        (v, index) => index !== indexToRemove
      );
      saveCartProductsToLocalStorage(newCartProducts);
      return newCartProducts;
    });
    toast.success("Product removed");
  }

  function saveCartProductsToLocalStorage(cartProducts: any) {
    if (ls) {
      ls.setItem("cart", JSON.stringify(cartProducts));
    }
  }

  // function addToCart(product: ProductProps, amount: number) {
  //   setCartProducts((prevProducts) => {
  //     const cartProduct = { product, amount };
  //     const newProducts = [...prevProducts, cartProduct];
  //     saveCartProductsToLocalStorage(newProducts);
  //     return newProducts;
  //   });
  // }

  function addToCart(product: ProductProps, amount: number) {
    console.log("FIRE");
    // add a product in the cart or update the quantity
    const newCartProducts = [...cartProducts];
    const index = newCartProducts.findIndex((p) => p.product.id === product.id);
    if (index === -1) {
      newCartProducts.push({ product, quantity: amount });
    } else {
      newCartProducts[index].quantity += amount;
    }
    setCartProducts(newCartProducts);
    saveCartProductsToLocalStorage(newCartProducts);
    toast.success("Product added");
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addToCart,
        removeCartProduct,
        clearCart,
      }}>
      {children}
    </CartContext.Provider>
  );
}
