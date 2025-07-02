import Image from "next/image";
import styles from "./AmbassadorImage.module.css"
import { AmbassadorImageProps, AmbassadorImg } from '@/interface';


const AmbassadorImage = ({ 
    items
}:AmbassadorImageProps) => {

  return (
    <>
        {items.map((img, key)=> (
            <div className={styles.img} key={key}>
                <Image
                    src={img.url} 
                    width={300} 
                    height={300} 
                    alt="/" 
                    priority 
                    key={key}
                />
            </div>
        ))}
    </>
  )
}

export default AmbassadorImage