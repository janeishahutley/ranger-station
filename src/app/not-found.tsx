import Container from "@/components/Container/Container";
import Link from "next/link";

export default function NotFound(){
    return (
        <Container>
            <h2>Not found</h2>
            <p>Sorry, page not found</p>
            <Link href="/">Return home</Link>
        </Container>
        
    )
}