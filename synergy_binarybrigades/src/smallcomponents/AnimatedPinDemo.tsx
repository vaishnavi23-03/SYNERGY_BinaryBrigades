import { useState,useEffect } from "react";
import { PinContainer } from "../components/ui/3d-pin";
import { AlertDialogDemo } from "./ALertDialogDemo";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
export function AnimatedPinDemo() {
    useEffect(()=>{
        getData();
    },[])
  
    let num1 = 5
    const getData = async () => {
        let result = await fetch(`http://localhost:8000/getfinal/${num1}`)
        result = await result.json();
    }
    const clicked=()=>{
        return(
            <AlertDialogDemo></AlertDialogDemo>
        );
    }
    interface Item {
        name: string;
        address: string;
        rating: number;
        availableSlots: number;
      }

      const evStations: Item[] = [
        {
          name: "Green Charge Station",
          address: "123 ABC Road, Mumbai",
          rating: 8,
          availableSlots: 3
        },
        {
          name: "Eco Power Charging",
          address: "456 XYZ Street, Mumbai",
          rating: 7.5,
          availableSlots: 4
        },
        {
          name: "Sunshine EV Station",
          address: "789 PQR Avenue, Mumbai",
          rating: 9,
          availableSlots: 2
        },
        {
          name: "Clean Energy Hub",
          address: "101 MNO Boulevard, Mumbai",
          rating: 6.5,
          availableSlots: 5
        },
        {
          name: "EcoDrive Charging Point",
          address: "111 GHI Lane, Pune",
          rating: 8.5,
          availableSlots: 1
        }
      ];
    return (
        
        <div className="h-[40rem] w-full flex items-center justify-center ">

            {evStations.map((item, index) =>
                <button onClick={clicked}>
                    <PinContainer className=""
                        title="BOOK SLOT"
                        href="https://twitter.com/mannupaaji"
                    >
                        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                {item.name}
                            </h3>
                            <div className="text-base !m-0 !p-0 font-normal p">
                                <span className="text-slate-500 ">
                                    {item.address}
                                </span>
                                
                            </div>
                            <span className="text-slate-500 ">
                                   Rating: {item.rating}
                            </span>

                            <div className="flex flex-col w-full rounded-lg mt-4  to-blue-500" />
                        </div>
                        <AlertDialogDemo></AlertDialogDemo>
                    </PinContainer>
                </button>
            )}

        </div>
    );
}


