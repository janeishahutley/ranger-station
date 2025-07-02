/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import PhotoImage from '../PhotoImage/PhotoImage';
import { FaXmark } from "react-icons/fa6";
import Image from "next/image";
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { PhotoMapProps } from '@/interface';



export default function PhotoMap({
    items
}:PhotoMapProps) {
    const [modal, setModal] = useState(false)
    const [imgSrc, setImgSrc] = useState<StaticImport| "">("")
    
    const getImg = (img:StaticImport) => {
        setImgSrc(img)
        setModal(true)
    }
   
  return (
    <div className='photoContainer'>
      <div className={modal ? "modal open" : "modal"} onClick={()=>setModal(false)}>
          <Image src={imgSrc} alt="" fill/>
          <FaXmark size={40} onClick={()=>setModal(false)}/>
      </div>
      <div className='gallery'>
          {items.map((item, idx)=> (
              <PhotoImage
                data={item}
                key={idx}
                getImg ={()=>getImg(item.url)}
              />
          ))}
      </div>
    </div>
  )
}
