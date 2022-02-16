window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
  /* customize formbutton below*/     
  formbutton("create", {
    action: "https://formspree.io/f/mwkylqwd",
    title: "May I help?",
    fields: [
      { 
        type: "email", 
        label: "Email:", 
        name: "email",
        required: true,
        placeholder: "your@email.com"
      },
      {
        type: "textarea",
        label: "Message:",
        name: "message",
        placeholder: "What are your queries?",
      },
      { type: "submit" }      
    ],
    styles: {
      title: {
        backgroundColor: "#5bf0b2"
      },
      button: {
        backgroundColor: "#5bf0b2"
      }
    }
  });
