"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

type ItemObject = {
  id: string;
  title: string;
  selected: boolean;
};

type DropDownProps = {
  formFieldName: string;
  options: ItemObject[];
  onChange: (selectedOptions: ItemObject[]) => void;
};

export default function MultiSelectDropdown({
  formFieldName,
  options,
  onChange,
}: DropDownProps) {
  const [selectedOptions, setSelectedOptions] = useState(options);

  const handleChange = (object: ItemObject) => {
    const newSelectedOptions = selectedOptions.map((option) => {
      if (option.id === object.id) {
        option.selected = !option.selected;
      }
      return option;
    });
    setSelectedOptions(newSelectedOptions);
    onChange(newSelectedOptions);
  };

  function useOutsideAlerter(ref: React.RefObject<any>) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: MouseEvent) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const [isOpen, setIsOpen] = useState(false);

  const openstate = isOpen ? "" : "hidden";
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div className='top-16 w-72'>
      <label className='relative'>
        <button
          className='relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}>
          <span className='block truncate'>{`${
            selectedOptions.filter((item) => item.selected === true).length ===
            0
              ? "All"
              : `${
                  selectedOptions.filter((item) => item.selected === true)
                    .length
                } Selected`
          }`}</span>
          <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
            {" "}
            <ChevronUpDownIcon
              className='h-5 w-5 text-gray-400'
              aria-hidden='true'
            />
          </span>
        </button>

        <div
          className={`w-full absolute bg-white border transition-opacity z-20 ${openstate} `}
          ref={wrapperRef}>
          <ul>
            {selectedOptions.map((option, i) => {
              return (
                <li
                  key={option.id}
                  className='relative cursor-default select-none py-2 text-gray-900'>
                  <label className='flex whitespace-nowrap cursor-pointer px-2 py-1 transition-colors hover:bg-blue-100 [&:has(input:checked)]:bg-blue-200'>
                    <input
                      type='checkbox'
                      name={formFieldName}
                      checked={option.selected}
                      className='flex cursor-pointer w-5 h-5 justify-center items-center'
                      onChange={() => handleChange(option)}
                    />
                    <span className='ml-1'>{option.title}</span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      </label>
    </div>
  );
}
