  // badge

  "use client"

  import React from "react";
  import { BadgePropTypes } from "./types/badge.types";
  import { useRouter } from "next/navigation";

  export const Badge: React.FC<BadgePropTypes> = ({
    children,
    link, 
    bgcolor
  }) => {
    
    const router = useRouter();

    const handleLink = () =>{
      if (link === undefined){
        console.error(`${link} does not exist`)
          throw new Error(`link does not exist`)
            return
      }
      router.push(link)
    };

    const bgcolors = {
      white: "bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-lime-500 duration-30 text-black", 
      green: "bg-lime-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-white duration-30 text-black", 
      blue:  "bg-sky-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-lime-500 duration-30 text-white"
    };

    const style = `flex gap-2 px-2 py-1 text-base font-semibold rounded-3xl ${bgcolors[bgcolor]}`;

    return (
      <button onClick={handleLink} className={style}>
        {children}  
      </button>
    );
  };

  export default Badge;
