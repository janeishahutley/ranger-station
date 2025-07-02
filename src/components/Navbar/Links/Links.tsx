"use client"
import { LinksProps } from "@/interface";
import "./Links.css"
import NavLink from "./Navlinks/NavLink";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Links({
    items,
    open,
    onClick,
}:LinksProps) {
    return (
        <div>
            <ul  className="links">
                {items.map((item, i)=> (
                    <NavLink item={item} key={i} />
                ))}
            </ul>
            <button className="button" onClick={()=>onClick?.(open)}>
                <GiHamburgerMenu size={24} color="#ececeb"/>
            </button>
            {open && 
                <div className="mobile-links">
                    {items.map((item, i)=> (
                        <NavLink item={item} key={i} onClick={()=>onClick?.(!open)}  />
                    ))}
                </div>}
        </div>
        
    )
  }