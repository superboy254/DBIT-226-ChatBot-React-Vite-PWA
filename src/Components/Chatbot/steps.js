const steps = [
  {
    id: "intro",
    message:
      "Welcome to BASHBOT, our CRM Chatbot. Please read and agree to the Terms and Conditions to proceed.",
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
    message: "Hi {previousValue}, how can I assist you today?",
    trigger: "user-query",
  },
  {
    id: "no-response",
    message:
      "Sorry, but you cannot proceed without agreeing to the Terms and Conditions.",
    end: true,
  },
  {
    id: "user-query",
    message: "Please select an option or let me know how I can help:",
    trigger: "user-options",
  },
  {
    id: "user-options",
    options: [
      {
        value: "order-status",
        label: "Check Order Status",
        trigger: "order-status-response",
      },
      {
        value: "billing-inquiry",
        label: "Billing Inquiry",
        trigger: "billing-inquiry-response",
      },
      {
        value: "update-details",
        label: "Update Personal Details",
        trigger: "update-details-response",
      },
    ],
  },
  {
    id: "order-status-response",
    message: "To check your order status, please provide your order number.",
    trigger: "order-number",
  },
  {
    id: "order-number",
    user: true,
    trigger: "order-status-result",
    metadata: {
      saveToSlot: true, // Saves the user's order number to a slot for future reference
    },
  },
  {
    id: "order-status-result",
    message:
      "Your order with number {previousValue} is currently being processed and will be shipped soon.",
    trigger: "user-query",
  },
  {
    id: "billing-inquiry-response",
    message:
      "To assist you with your billing inquiry, please provide your account number.",
    trigger: "account-number",
  },
  {
    id: "account-number",
    user: true,
    trigger: "billing-inquiry-result",
    metadata: {
      saveToSlot: true, // Saves the user's account number to a slot for future reference
    },
  },
  {
    id: "billing-inquiry-result",
    message:
      "Based on the account number {previousValue}, your outstanding balance is $200.00. How else can I assist you?",
    trigger: "user-query",
  },
  {
    id: "update-details-response",
    message:
      "To update your personal details, please provide your email address.",
    trigger: "email-address",
  },
  {
    id: "email-address",
    user: true,
    trigger: "update-details-result",
    metadata: {
      saveToSlot: true, // Saves the user's email address to a slot for future reference
    },
  },
  {
    id: "update-details-result",
    message:
      "Your email address has been updated to {previousValue} successfully. If you have any other inquiries, feel free to ask.",
    trigger: "user-query",
  },
];

export default steps;
