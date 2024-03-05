type ProductProps = {
  id: string;
  img: string;
  productName: string;
  price: string;
  color: string;
};

const Product: React.FC<ProductProps> = (props) => {
  return (
    <div className='w-full relative group hover:scale-105 transition-all duration-500 cursor-pointer rounded-xl'>
      <div className='flex justify-center max-w-2xl h-full relative overflow-y-hidden border-[1px] border-b-0 rounded-t-xl'>
        <div>
          <img
            className='h-80 w-96 object-contain rounded-t-xl'
            src={props.img}
          />
        </div>
      </div>
      <div className='max-w-2xl py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4 rounded-b-xl'>
        <div className='flex justify-between font-titleFont'>
          <h2 className='text-lg text-primeColor font-bold truncate max-w-xs'>
            {props.productName}
          </h2>
        </div>
        <div>
          <p className='text-[#767676] text-[14px]'>${props.price}</p>
        </div>
        <div>
          <p className='text-[#767676] text-[14px]'>{props.color}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
