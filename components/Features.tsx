import { FEATURED_PRODUCTS } from "@/data";
import Image from "next/image";
import Link from "next/link";

const Features = () => {
  return (
    <section className=' 2xl:max-container relative flex flex-col py-10 lg:py-20 '>
      <div className='flex flex-col justify-center max-container padding-container relative w-full '>
        <div className='flex justify-center align-top'>
          <h1 className='bold-32 lg:bold-40'>New Products</h1>
        </div>
        <div className='z-20 flex w-full flex-col '>
          <ul className='mt-10 grid gap-10 md:grid-cols-3 lg:mt-20 lg:gap-20'>
            {FEATURED_PRODUCTS.map((feature) => (
              <FeatureItem
                id={feature.id}
                key={feature.title}
                title={feature.title}
                image={feature.image}
                variant={feature.variant}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type FeatureItem = {
  id: string;
  title: string;
  image: string;
  variant: string;
  description: string;
};

const FeatureItem = ({
  id,
  title,
  image,
  variant,
  description,
}: FeatureItem) => {
  return (
    <li className='flex w-full flex-1 flex-col items-center hover:underline'>
      <div className=''>
        <Link href={`/product/${id}`}>
          <Image
            src={image}
            alt='map'
            width={300}
            height={300}
            className='rounded-xl'
          />
        </Link>
      </div>
      <h2 className='bold-20 lg:bold-32 mt-5 capitalize '>{title}</h2>
    </li>
  );
};

export default Features;
