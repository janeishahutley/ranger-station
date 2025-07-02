import { ContainerProps } from "@/interface"
import "./Container.css"


export default function Container({
    children
}:ContainerProps) {
    return <div className="container">{children}</div>
}