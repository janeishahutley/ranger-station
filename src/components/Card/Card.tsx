import Image from "next/image"
import styles from "./Card.module.css"
import { CardProps } from "@/interface"
import { FaInstagram } from "react-icons/fa";

const Card = ({
    header,
    text,
    img,
    url

}:CardProps) => {
  return (
    <div className={styles.container}>
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <div className={styles.image}>
                    <Image
                        src={img}
                        fill
                        alt="hero-image"
                        priority
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.header}>{header}</h1>
                    <p className={styles.para}>{text}</p>
                </div>
            </div>
            <div className={styles.socials}>
                <a href={url} target="-blank">
                    <FaInstagram size={24}/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Card