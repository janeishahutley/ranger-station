"use client"
import styles from "./AccordionItem.module.css"
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import { AccordionItemProps} from "@/interface"
import { useEffect, useRef, useState } from "react";

export default function AccordionItem({
    data,
    active,
    btnOnClick,
   
}:AccordionItemProps) {
    const contentRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState(0)
    
    useEffect(()=> {
         if(active) {
            const contentEl = contentRef.current as HTMLDivElement
            const elHeight = contentEl.scrollHeight
            setHeight(elHeight)
        }  else {
            setHeight(0)
        }
    }, [active])

    return (
        <li className={styles.container} onClick={btnOnClick}>
            <h2 className={styles.title} >
                <button className={styles.button} >
                    <span className={styles.question}>{data.question}</span>
                </button>
                {active  ?  
                    <FaChevronUp color="#f6f22e" size={18} className={styles.icon} />:
                    <FaChevronDown color="#f6f22e" size={18} className={styles.icon}/> 
                }
            </h2>
            <div className={styles.wrapper} style={{height}}>
                <div className={styles.content} ref={contentRef}>
                    {data.answer}
                </div>
            </div>
        </li>
    )
}