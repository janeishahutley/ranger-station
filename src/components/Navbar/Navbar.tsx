"use client"
import "./Navbar.css"
import Links from "./Links/Links"
import Logo from "../Logo/Logo"
import { useState } from "react"
import { linkItems } from "@/data"


export default function Navbar() {   
    const [open, setIsOpen] = useState(false)
    return (
        <nav className="nav">
          <Logo/>
          <Links items={linkItems} open={open} onClick={()=>setIsOpen(!open)}/>
        </nav>
    )
  }