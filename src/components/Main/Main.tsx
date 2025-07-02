import Accordion from '../Accordion/Accordion'
import styles from './Main.module.css'
import Card from '../Card/Card'
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { accordionItems, ambassadorImg} from '@/data'
import AmbassadorImage from '../AmbassadorImage/AmbassadorImage'
import guestPhoto from "../../../public/guests.jpg"



const Main = () => {
  const slideLeft =() => {
    const slider=document.getElementById("slider") as HTMLDivElement
    slider.scrollLeft=slider.scrollLeft - 500 

  }
  const slideRight =() => {
    const slider=document.getElementById("slider") as HTMLDivElement
    slider.scrollLeft=slider.scrollLeft + 500

  }
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Guests of Honor</h1>
      <div className={styles.main}>
      
        
          <div className={styles.image}>
                <Image
                    src={guestPhoto}
                    alt="guests pic"
                    width="500"
                    height="500"
                    // priority fixes LPC problem
                    priority
                />
            </div>
      
        <div className={styles.sectionRight}>
          <Accordion items={accordionItems}/> 
        </div>
      </div>
      <div className={styles.scrollView}>
        <h1 className={styles.header}>Morphinominal Guests</h1>
        <div className={styles.scrollViewContainer}>
          <FaChevronLeft size={40} onClick={slideLeft} color="#ececeb"/>
          <div id="slider" className={styles.slider} >
            <AmbassadorImage items={ambassadorImg} />
          </div>
          <FaChevronRight size={40} onClick={slideRight} color="#ececeb"/>
        </div>
      </div>
    </div>
    
  )
}

export default Main



