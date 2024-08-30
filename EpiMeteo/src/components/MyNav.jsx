import { Col } from "react-bootstrap";
import { CloudFog } from "react-bootstrap-icons";
const handleClick = () => {
    window.location.href = '/';
};
const MyNav = () => {

    return (
        <Col 
            style={{
                maxWidth: "4em",
                height: "100vh",
            }}
            className="p-3 dark-blue-trasparent d-none d-md-block"
        >
            
            <CloudFog 
                size={35}
                color="#dedede"
                className="d-block m-auto"
                onClick={handleClick} 
                style={{ cursor: 'pointer' }}
            />
        </Col>
    );
}

export default MyNav;