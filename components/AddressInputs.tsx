type AddressInputsProps = {
  addressProps: {
    phone?: string;
    streetAddress?: string;
    postalCode?: string;
    city?: string;
    country?: string;
  };
  setAddressProp: (prop: string, value: string) => void;
  disabled?: boolean;
};

export default function AddressInputs({
  addressProps,
  setAddressProp,
  disabled = false,
}: AddressInputsProps) {
  const { phone, streetAddress, postalCode, city, country } = addressProps;
  return (
    <>
      <div className=' mx-auto'>
        <div className='p-6 border border-gray-300 sm:rounded-md'>
          <form method='POST'>
            <label className='block mb-6'>
              <span className='text-gray-700'>Your name</span>
              <input
                name='name'
                type='text'
                className='
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          '
                placeholder='Joe Bloggs'
              />
            </label>
            <label className='block mb-6'>
              <span className='text-gray-700'>Address line 1</span>
              <input
                name='address1'
                type='text'
                className='
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          '
                placeholder=''
              />
            </label>
            <label className='block mb-6'>
              <span className='text-gray-700'>Address line 2</span>
              <input
                name='address2'
                type='text'
                className='
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          '
                placeholder=''
              />
            </label>
            <label className='block mb-6'>
              <span className='text-gray-700'>City</span>
              <input
                name='city'
                type='text'
                className='
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          '
                placeholder=''
              />
            </label>
            <label className='block mb-6'>
              <span className='text-gray-700'>State/Province</span>
              <input
                name='state'
                type='text'
                className='
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          '
                placeholder=''
              />
            </label>
            <label className='block mb-6'>
              <span className='text-gray-700'>Zip/Postal code</span>
              <input
                name='zip'
                type='text'
                className='
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          '
                placeholder=''
              />
            </label>
            <label className='block mb-6'>
              <span className='text-gray-700'>Country</span>
              <input
                name='country'
                type='text'
                className='
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          '
                placeholder=''
              />
            </label>
            <label className='block mb-6'>
              <span className='text-gray-700'>Telephone</span>
              <input
                name='telephone'
                type='text'
                className='
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          '
                placeholder=''
              />
            </label>
            <label className='block mb-6'>
              <span className='text-gray-700'>Delivery information</span>
              <textarea
                name='message'
                className='
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          '
                //   rows="3"
                placeholder='floor/door lock code/etc.'></textarea>
            </label>
            <div className='mb-6'>
              <button
                type='submit'
                className='
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          '>
                Pay
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
