"use client"

import Link from "next/link"
import "./NavLink.css"
import cn from "classnames"
import { usePathname } from "next/navigation";
import { NavLinkProps } from "@/interface";


export default function NavLink({
    item,
    onClick
}:NavLinkProps) {
    const pathName = usePathname()
    return (
        <Link 
            href={item.path} 
            className={cn("navlink",{active: pathName === item.path})}
            onClick={()=> onClick?.(!close)}
        >
            {item.title}
        </Link>
    )
}