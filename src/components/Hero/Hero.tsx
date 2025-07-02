import Image from "next/image"
import Form from '../Form/Form';
import styles from './Hero.module.css'
import Link from "next/link";
import mainPhoto from '../../../public/main.jpg'


export const Hero = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.sectionLeft}>
            <div className={styles.heroContent}>
                <h1 className={styles.header}>Ranger Station</h1>
                <p className={styles.text}>
                    Ranger Station is the first event in the Philadelphia area that is a complete 
                    celebration of the 
                    <span className={styles.emphasis}> Power Ranger Fandom!</span>
                </p>
                <div className={styles.actionBtns}>
                    <a className={`${styles.buyBtn} ${styles.commonBtn}`}
                        target="_blank"
                        href="http://www.ladyj-cosplay.com/product-category/ladyjmutantandproudevent/">
                        <span>Buy tickets</span>
                    </a>
                    <Link href="/program">
                        <button className={`${styles.viewBtn} ${styles.commonBtn}`}>View Program</button>
                    </Link>
                </div>
            </div>
            <Form/>
        </div>
        <div className={styles.sectionRight}>
            <div className={styles.image}>
                <Image
                    src={mainPhoto}
                    alt="group pic"
                    width="650"
                    height="637"
                    priority
                />
            </div>
        </div>
  </div>
  )
}
