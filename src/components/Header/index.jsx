import Logo from "../../assets/To-Do List.svg"
import Social1 from "../../assets/Vector.svg"
import Social2 from "../../assets/Vector(1).svg"
import Social3 from "../../assets/Vector(2).svg"
import { Container } from "./style"



export default function Header() {
    return(
        <Container>
            <img src={Logo} alt="" />
            <nav>
                <a href=""> <img src={Social1} alt="" /> </a>
                <a href=""> <img src={Social2} alt="" /> </a>
                <a href=""><img src={Social3} alt="" /></a>
            </nav>
        </Container>
    )
}