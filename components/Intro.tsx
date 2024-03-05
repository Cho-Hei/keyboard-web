"use client";
import React, { useState } from "react";
import Slideshow from "./SlideShow";

type ItemType = {
  id: number;
  title: string;
  body: string;
  imageUrl: string;
  docs: string;
};

const Intro = () => {
  return (
    <section className=''>
      <Slideshow />
    </section>
  );
};

export default Intro;
