import { Col, Container, Row } from "react-bootstrap";
import ContentRight from "./ContentRight";
import Contentleft from "./Contentleft";

const Content = () => {
  return (
    <Container>
      <Row>
        <Col lg={9}>
          <Contentleft />
        </Col>
        <Col lg={3}>
          <ContentRight />
        </Col>
      </Row>
    </Container>
  );
};

export default Content;
