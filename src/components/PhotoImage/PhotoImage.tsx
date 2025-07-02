/* eslint-disable @next/next/no-img-element */
// @ts-nocheck
"use client"
import Image from "next/image";
import { PhotoImageProps} from "@/interface";

export default function PhotoImage({
    data,
    getImg,

}:PhotoImageProps) {
    return (
        <div>
            <div className="photos" onClick={getImg}>
                <Image
                    src={data.url}
                    alt="pics"
                    fill
                />
            </div>
        </div>  
    )
}