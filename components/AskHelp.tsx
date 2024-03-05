"use client";
import { useState } from "react";
import Image from "next/image";
import Accordion from "./Accordion";
import { FAQS } from "@/constants";

const AskHelp = () => {
  const [listofFAQS, setListofFAQS] = useState(FAQS);

  // Open Accordion once at a time, close others when one is open
  const setAccordionOpen = (id: Number) => {
    setListofFAQS(
      listofFAQS.map((faq) => {
        if (faq.id === id) {
          faq.active = !faq.active;
        } else {
          faq.active = false;
        }
        return faq;
      })
    );
  };

  return (
    <section className=' max-container flex flex-col text-center '>
      <h1 className='bold-42 text-[42px] text-zinc-900 py-4'>
        Got some questions?
      </h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-full py-4'>
        <div className='w-full flex justify-center items-center'>
          <div>
            <Image
              src='/Needhelpbanner.jpg'
              alt='keyboard'
              width={700}
              height={700}
              className='rounded-md'
            />
          </div>
        </div>
        <div className='w-full max-w-2xl mx-auto px-4 md:px-6 py-auto '>
          <div className='divide-y divide-slate-200 py-4 m-4'>
            {listofFAQS.map((faq, index) => (
              <Accordion
                key={index}
                title={faq.title}
                id={faq.id}
                active={faq.active}
                accordionOpen={setAccordionOpen}>
                {faq.text}
              </Accordion>
            ))}
            <br />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AskHelp;
