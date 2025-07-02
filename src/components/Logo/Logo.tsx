import Link from "next/link";
import Image from "next/image"
import logo from "../../../public/logo.png"

export default function Logo () {
    return (
        <Link href="/">
          <Image
            src={logo}
            alt="mutant and proud"
            width="75"
            height="75"
            // priority fixes LPC problem
            priority
          />
    
        </Link>
    )
}