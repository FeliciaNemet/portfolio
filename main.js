window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
  /* customize formbutton below*/     
  formbutton("create", {
    action: "https://formspree.io/f/mwkylqwd",
    title: "Get an Estimate!",
    fields: [
      { 
        type: "email", 
        label: "Email:", 
        name: "email",
        required: true,
        placeholder: "Email Address"
      },
      {
        type: "textarea",
        label: "Message:",
        name: "message",
        placeholder: "I need a quote",
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
