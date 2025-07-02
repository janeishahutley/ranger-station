"use client"
import styles from "./Accordion.module.css"
import { AccordionProps } from "@/interface"
import AccordionItem from "./AccordionItem/AccordionItem"
import { useState } from "react"

export default function Accordion({
    items,
}:AccordionProps) {
    const [currentIdx, setCurrentIdx] = useState(-1)

    const btnOnClick = (idx: number) => {
        setCurrentIdx(currentIdx => currentIdx !==idx ? idx : -1)
    }
    return (
        <div className={styles.container}>
            {items.map((dataObj, idx)=> (
                 <AccordionItem 
                    data={dataObj} 
                    key={idx} 
                    btnOnClick={()=>btnOnClick(idx)} 
                    active={idx === currentIdx}
                />
            ))}
        </div>
    )
}