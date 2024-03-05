"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MultiSelectDropdown from "@/components/MultiSelectDropdown";
import SliderBar from "@/components/SliderBar";
import Product from "../../../components/Product";
import { brand, KeyboardSize, Connectivity } from "@/constants";
import { PRODUCTS } from "@/data";
import { ItemObject } from "@/types";

const page = () => {
  const [selectedBrand, setSelectedBrand] = useState(brand);

  const isFilterSelected = (filterArray: ItemObject[]) =>
    filterArray.some((filter) => filter.selected);

  const [pricevalue, setPricevalue] = useState<[number, number]>([0, 3000]);

  const filteredProducts = PRODUCTS.filter((product) => {
    // Filter by selected brand
    const brandFilter =
      !isFilterSelected(selectedBrand) ||
      selectedBrand.find((brand) => brand.title === product.brand)?.selected;

    // Filter by range of price
    const priceFilter =
      Number(product.price) >= pricevalue[0] &&
      Number(product.price) <= pricevalue[1];

    // Filter only accessories
    const productTypeFilter = product.productType === "accessories";

    // Combine filters with AND logic
    return brandFilter && priceFilter && productTypeFilter;
  });
  return (
    <section className='2xl:max-container min-h-screen relative flex pb-20'>
      <div className='flex flex-col w-full'>
        <div className='relative mb-8'>
          <div className=' h-[400px] blur-sm '>
            <Image
              src='/accessories2.jpg'
              alt='accessories banner'
              fill
              sizes='100vw'
              placeholder='blur'
              className='object-cover'
              blurDataURL='/accessories2.jpg'
            />
          </div>
          <h1 className='text-[60px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold tracking-widest z-20'>
            Accessories
          </h1>
        </div>
        <div className='flex flex-col xl:flex-row w-full'>
          <div className='flex flex-col mx-5 items-center text-left'>
            <h3 className='text-[24px] my-4 lg:text-left'>Brand</h3>
            <MultiSelectDropdown
              formFieldName='brand'
              options={brand}
              onChange={(selectedBrands) => {
                setSelectedBrand(selectedBrands);
              }}
            />

            <h3 className='text-[24px] my-4'>Price</h3>
            <SliderBar pricevalue={pricevalue} setPricevalue={setPricevalue} />
          </div>

          <div className=' flex justify-center'>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4 mx-5 auto-rows-fr'>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <Link href={`/product/${product.id}`} key={product.id}>
                    <Product
                      key={index}
                      id={product.id}
                      img={product.img}
                      productName={product.productName}
                      price={product.price}
                      color={product.color}
                    />
                  </Link>
                ))
              ) : (
                <h1 className='text-2xl'>No products found</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
