import { Col, Row } from "react-bootstrap";

const ThreeCol = (props) => {
    return (
        <Row className="gap-2 mb-3">
            <Col sm={12} md={6} lg={3} className="d-flex align-items-center">
                {props.left}
            </Col>

            <Col sm={12} md={6} lg={5} className="">
                {props.center}
            </Col>

            <Col sm={12} md={6} lg={3}>
                {props.right}
            </Col>
        </Row>
    )
}

export default ThreeCol;