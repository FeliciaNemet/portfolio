const panels = document.querySelectorAll('.panel');

          function toggleOpen() {
              this.classList.toggle('open');
          };

          function toggleActive(e) {
              console.log(e.propertyName);
              if(e.propertyName.includes('flex')) {
                    this.classList.toggle('open-active');
              }
          }

          panels.forEach(panel => panel.addEventListener('click', toggleOpen));
          panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));



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
        placeholder: "Email Address",
      },
      {
        type: "textarea",
        label: "Message:",
        name: "message",
        placeholder: "I need a quote",
      },
      { type: "submit" },
    ],
    styles: {
      title: {
        backgroundColor: "#00949b",
      },
      button: {
        backgroundColor: "#00949b",
      },
    },
  });
