import ChatBot from "react-simple-chatbot";

const BashBot = () => {

   const steps = [
     {
       id: "intro",
       message: "Do you agree to the Terms and Conditions?",
       trigger: "intro-user",
     },
     {
       id: "intro-user",
       options: [
         { value: "y", label: "Yes", trigger: "yes-response" },
         { value: "n", label: "No", trigger: "no-response" },
       ],
     },
     {
       id: "yes-response",
       message: "Great! How can I assist you today?",
       trigger: "user-query",
     },
     {
       id: "no-response",
       message:
         "Sorry to hear that. You cannot proceed without agreeing to the Terms and Conditions.",
       end: true,
     },
     {
       id: "user-query",
       message: "Please enter your query or select an option:",
       trigger: "user-options",
     },
     {
       id: "user-options",
       options: [
         { value: "option1", label: "Option 1", trigger: "option1-response" },
         { value: "option2", label: "Option 2", trigger: "option2-response" },
         { value: "option3", label: "Option 3", trigger: "option3-response" },
       ],
     },
     {
       id: "option1-response",
       message: "You selected Option 1.",
       end: true,
     },
     {
       id: "option2-response",
       message: "You selected Option 2.",
       end: true,
     },
     {
       id: "option3-response",
       message: "You selected Option 3.",
       end: true,
     },
   ];

  return (
    <section className="bot-container">
      <ChatBot
       steps={steps}
      />
    </section>
  );
};

export default BashBot;
