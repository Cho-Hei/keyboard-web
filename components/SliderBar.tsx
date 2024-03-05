import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

function valuetext(value: number) {
  return `$${value}`;
}

type SliderProps = {
  pricevalue: [number, number];
  setPricevalue: React.Dispatch<React.SetStateAction<[number, number]>>;
};

const SliderBar = ({ pricevalue, setPricevalue }: SliderProps) => {
  const minDistance = 10;
  const handlePriceChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    event.preventDefault();
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setPricevalue([
        Math.min(newValue[0], pricevalue[1] - minDistance),
        pricevalue[1],
      ]);
    } else {
      setPricevalue([
        pricevalue[0],
        Math.max(newValue[1], pricevalue[0] + minDistance),
      ]);
    }
  };

  return (
    <>
      <div className='flex justify-between items-center'>
        <input
          type='number'
          value={pricevalue[0]}
          onChange={(e) => setPricevalue([+e.target.value, pricevalue[1]])}
          className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-2 border-gray-500 p-2 rounded-md w-[100px] focus:border-teal-500 focus:outline-none'
        />

        <span className='flex items-center'>-</span>
        <input
          type='number'
          value={pricevalue[1]}
          onChange={(e) => setPricevalue([pricevalue[0], +e.target.value])}
          className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-2 border-gray-500 p-2 rounded-md w-[100px] focus:border-teal-500 focus:outline-none'
        />
      </div>
      <Box sx={{ width: 300 }}>
        <PrettoSlider
          min={0}
          max={3000}
          getAriaLabel={() => "Price Range"}
          value={pricevalue}
          onChange={handlePriceChange}
          valueLabelDisplay='auto'
          getAriaValueText={valuetext}
          disableSwap
        />
      </Box>
    </>
  );
};

const PrettoSlider = styled(Slider)({
  color: "#52af77",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

export default SliderBar;
