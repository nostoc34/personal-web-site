import "./header.scss";
import "./header-ani-tr.scss";
import { Container } from "react-bootstrap";

function HeaderTR() {
    return (
        <Container fluid className="header">
            <h1>Selam.</h1>
            <h1>Ben Selim.</h1>
            <h1>Geliştiriyorum :)</h1>
        </Container>
    )
};

export default HeaderTR;