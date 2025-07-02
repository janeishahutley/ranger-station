import Container from "@/components/Container/Container";
import pic1 from "../../../public/progpic_1.jpg"
import pic2 from "../../../public/progpic_2.jpg"
import pic3 from "../../../public/progpic_3.jpg"
import Image from "next/image"

export default function Program() {
    return (
        <Container>
            <div className="program">
                <div className="program_pic">
                    <Image
                        src={pic2}
                        alt="group pic"
                        width="600"
                        height="600"
                        priority
                    />
                </div>
                <div className="program_pic">
                    <Image
                        src={pic3}
                        alt="group pic"
                        width="600"
                        height="600"
                        priority
                    />
                </div>
                <div className="program_pic">
                    <Image
                        src={pic1}
                        alt="group pic"
                        width="600"
                        height="600"
                        priority
                    />
                </div>
            </div>
        </Container>
    )
}