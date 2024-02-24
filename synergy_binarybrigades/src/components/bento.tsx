import DistanceTravelled from "./DIstanceTravelled";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";

import Page from "./Page";

export function BentoGridDemo() {

  return (
    <div className="">
        <BentoGrid className="max-w  m-0 border-2 p-10 border-black rounded-md">

{items.map((item, i) => (
  
  <BentoGridItem 
    key={i}
    title={item.title}
    description={item.description}
    header={item.header}
      className={i==3?'md:col-span-2 md:row-span-2 border-2 border-stone-600 rounded-md':'border-2 border-stone-600 rounded-md'}
      
  />
))}
</BentoGrid>
    </div>
    
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: <p className="">User name</p>,
    description: "",
    header: <Page/>,
    
  },
  {
    title: "Distance Travelled",
    description: "",
    header: <DistanceTravelled/>
  },
  {
    title: "The Art of Design",
    description: "",
    header: <div/>
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />
    
  }
];
