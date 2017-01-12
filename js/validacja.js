$("#formContact").validate({
        errorClass: "text-danger",
  rules: {
    subject: "required",
    message: "required",
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    subject: "Brak Tematu wiadomość",
    message: "Brak treści e-mail",
    email: {
      required: "Nie podałeś adresu e-mail",
      email: "Błędny format adresu e-mail:  name@domain.com"
    }
  }
});
