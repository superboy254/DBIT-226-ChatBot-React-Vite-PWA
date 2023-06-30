import ChatBot from "react-simple-chatbot";
import steps from "./steps";

const BashBot = () => {

  return (
    <section className="bot-container">
      <ChatBot
       steps={steps}
      />
    </section>
  );
};

export default BashBot;
