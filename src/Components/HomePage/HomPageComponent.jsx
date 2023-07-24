import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaComments, FaBolt, FaHeadset } from "react-icons/fa";
import Icon from "../../assets/images/icon-white.png";

const Homepage = () => {
  return (
    <Container className="homepage">
    <div className="homepage-background"></div>
    <div className="homepage-overlay"></div>
      <Row className="header">
        <Col md={2} className="image-container w-25">
          <img
            src={Icon}
            alt="BASHBOT"
            className="bashbot-image"
          />
        </Col>

        <Col md={6} className="text-center mt-5">
          <h1>Welcome to BASHBOT</h1>
          <p>A Powerful Chatbot for Your Website</p>
        </Col>
      </Row>
      <Row className="mt-1 mb-5 header">
        <Col md={15} className="text-center">
          <Button variant="primary" size="lg">
            Get Started
          </Button>
        </Col>
      </Row>
      <Row className="features">
        <Col md={4}>
          <Card className="feature-card">
            <Card.Body>
              <FaComments className="feature-icon fs-1 text-center" />
              <Card.Title>Smart Conversations</Card.Title>
              <Card.Text>
                Engage users with intelligent and interactive conversations.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="feature-card">
            <Card.Body>
              <FaBolt className="feature-icon fs-1 text-center" />
              <Card.Title>Fast Responses</Card.Title>
              <Card.Text>
                Provide quick and efficient responses to user queries.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="feature-card">
            <Card.Body>
              <FaHeadset className="feature-icon fs-1 text-center" />
              <Card.Title>24/7 Support</Card.Title>
              <Card.Text>
                Offer round-the-clock support to your website visitors.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;
