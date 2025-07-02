/* eslint-disable @next/next/no-img-element */
// @ts-nocheck
"use client"

import PhotoMap from "@/components/PhotoMap/PhotoMap";
import { pics } from "@/data";

export default function PhotoGallery() {
    return (
        <PhotoMap items={pics}/>
    )
  

}