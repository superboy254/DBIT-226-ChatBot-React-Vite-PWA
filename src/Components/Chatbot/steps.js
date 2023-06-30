const steps = [
  {
    id: "intro",
    message: "Do you agree to the Terms and Conditions?",
    trigger: "intro-user",
  },
  {
    id: "intro-user",
    options: [
      { value: "y", label: "Yes", trigger: "get-name" },
      { value: "n", label: "No", trigger: "no-response" },
    ],
  },
  {
    id: "get-name",
    message: "What is your name?",
    trigger: "save-name",
  },
  {
    id: "save-name",
    user: true,
    trigger: "greet-user",
    metadata: {
      saveToSlot: true, // Saves the user's name to a slot for future reference
    },
  },
  {
    id: "greet-user",
    message: "Hi {previousValue}, nice to meet you!",
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
    message: "How can I assist you today?",
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

export default steps;
