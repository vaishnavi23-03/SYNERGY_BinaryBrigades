import DistanceTravelled from "./DIstanceTravelled";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";


import Page from "./Page";
import Energy from "./Energy";
import Graphs from "./Graphs";

export function BentoGridDemo() {

  return (
    <div className="">
        <BentoGrid className="max-w  m-0  p-10 border-black rounded-md">

{items.map((item, i) => (
  
  <BentoGridItem 
    key={i}
    title={item.title}
    description={item.description}
    header={item.header}
      className={i==3?'md:col-span-3 md:row-span-2 border-stone-600 rounded-md':' border-stone-600 rounded-md'}
      
  />
))}
</BentoGrid>
    </div>
    
  );
}
const items = [
  {
    title: <p className="">Economy of your travel</p>,
    description: "",
    header: <Page/>,
    
  },
  {
    title: "Distance Travelled",
    description: "",
    header: <DistanceTravelled/>
  },
  {
    title: "Energy Consumed",
    description: "",
    header: <Energy/>
  },
  {
    title: "see your visual analytics",
    description:
      "monthly statistics of distance travelled & energy spent",
    header: <Graphs />
  }
];
