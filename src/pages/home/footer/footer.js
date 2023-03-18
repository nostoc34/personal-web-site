import "./footer.scss";
import { Container } from "react-bootstrap";

function Footer() {

    const year = new Date().getFullYear();

    return (
        <Container fluid className="footer">
            <p>Copyright &copy; {year}</p>
        </Container>
    )
}

export default Footer;