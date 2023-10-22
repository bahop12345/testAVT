import { Col, Container, Row } from "react-bootstrap";

const Menu = () => {
  return (
    <div className="menu">
      <Container>
        <Row>
          <Col lg={10}>
            <ul className="sub-menu">
              <li>Nóng</li>
              <li>Mới</li>
              <li>Video</li>
              <li>Chủ đề</li>
            </ul>
          </Col>
          <Col lg={2}>{/* <FontAwesomeIcon icon={faUser} /> */}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Menu;
