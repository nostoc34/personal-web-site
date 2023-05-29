import "./footer.scss";
import { Container } from "react-bootstrap";

function Footer(props) {

    const year = new Date().getFullYear();

    return (
        <Container fluid className="footer">
            <p>Copyright &copy; {year} Selim Yaman. {props.rights}</p>
        </Container>
    )
}

export default Footer;