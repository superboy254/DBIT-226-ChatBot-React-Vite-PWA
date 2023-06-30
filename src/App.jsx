import { useState } from "react";
import BashBot from "./Components/Chatbot/BashBot";
import HomePage from "./Components/HomePage/HomPageComponent";
import { Row, Col, Button,} from "react-bootstrap";



const App = () => {
    const [showChatbot, setShowChatbot] = useState(false);

    const handleToggleChatbot = () => {
      setShowChatbot((prevState) => !prevState);
    };
  return (
    <section>
      <HomePage />
      <Row className="toggle-chatbot-row">
        <Col className="text-center">
          <Button className="toggle-chatbot-btn mb-5" onClick={handleToggleChatbot}>
            Toggle Chatbot
          </Button>
        </Col>
      </Row>
      {showChatbot && (
        <div className="bashbot">
          <BashBot />
        </div>
      )}
    </section>
  );
};

export default App;
