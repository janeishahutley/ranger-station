import React from 'react'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import {FaXTwitter } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import styles from "./Footer.module.css"
import Link from 'next/link';
import Border from '../Border/Border';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.info} id='contact-us'>
                <div className={styles.socials}>
                    <a 
                        href="https://www.instagram.com/gogorangerstation?igsh=MWJraXFjZ3gxMWp1dg==" 
                        className={styles.circle}
                        target="_blank"
                    >
                        <FaInstagram size={24} color="#dbc54b"/>
                    </a>
                    <a 
                        href="https://www.facebook.com/share/JoFZn5MiBkhwZrJ7/?mibextid=qi2Omg" 
                        className={styles.circle}
                        target="_blank"
                    >
                        <FaFacebook size={24} color="#dbc54b"/>
                    </a>
                    <a 
                        href="https://x.com/station_ranger?t=GXQc0l20rDMeJ8jsXhZj7w&s=09" 
                        className={styles.circle}
                        target="_blank"
                    >
                        <FaXTwitter size={24} color="#cfc58a"/>
                    </a>
                    <a 
                        href="mailto:rangerstationhub@gmail.com" 
                        className={styles.circle}
                        target="_blank"
                    >
                        <MdOutlineMail size={24} color="#cfc58a"/>
                    </a> 
                </div>
                <div className={styles.links} >
                    <Link href="/">
                        Home
                    </Link>
                    <Link href="/program">
                        Program
                    </Link>
                    <Link href="/photo-gallery">
                        Past Show Gallery
                    </Link>
                </div>
            </div>
            <Border/>
            <div className={styles.content}>
                <p className={styles.disclaimer}>
                    Ranger Station is not sanctioned or associated with Hasbro, Saban or The Walt Disney 
                    Company.  Power Rangers and any other associated characters are copyright of Hasbro. 
                </p>
                <Link href="/ranger-station-policy" className={styles.accord}>
                    Ranger Station Policy
                </Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer