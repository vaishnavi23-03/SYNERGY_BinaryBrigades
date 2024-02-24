'use client'

import React, { useEffect } from 'react'
import { useState } from 'react'
import "@/components/Card.css"
import { CardBody, CardContainer, CardItem } from '@/components/ui/3dcard'
import "@/components/Card.css"

export function ThreeDCardDemo() {
  return (
    <div className='flex justify-center items-center m-14'>

    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-64 sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Tata Power, Pune, Maharashtra
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quasi!
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5f3b08d4515c242514c95656/f7890c9c-7fcc-439b-b285-5d1328b375c1/commercial-ev-charging-station.jpg?format=1500w"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-5">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Bookmark for later→
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Book now
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          BPCL fast charging, mulund-E
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, praesentium.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5f3b08d4515c242514c95656/f7890c9c-7fcc-439b-b285-5d1328b375c1/commercial-ev-charging-station.jpg?format=1500w"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-5">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Bookmark for later →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Book now
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          HPCL Power Limited, Thane, Maharashtra
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, ipsam.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5f3b08d4515c242514c95656/f7890c9c-7fcc-439b-b285-5d1328b375c1/commercial-ev-charging-station.jpg?format=1500w"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-5">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            BookMark for later→
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Book now
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    </div>
  );
}