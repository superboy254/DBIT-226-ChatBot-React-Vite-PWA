import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import steps from "./steps";
import theme from "./theme";

const BashBot = () => {

  return (
    <section className="bot-container">
      <ThemeProvider theme={theme}>
        <ChatBot steps={steps} />
      </ThemeProvider>
    </section>
  );
};

export default BashBot;
