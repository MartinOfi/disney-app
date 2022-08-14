import { PrimaryButton } from "assets/styles/PrimaryButton";
import { Container, Form, InputMail } from "./Login.styles";

export const LoginContainer = () => {
  return (
    <Container>
      <h1></h1>
      <Form>
        <h1>Inicia sesión con tu correo</h1>
        <InputMail
          type="text"
          name="email"
          id=""
          placeholder="Correo electrónico"
        />
        <br />
        <PrimaryButton>CONTINUAR</PrimaryButton>
        <p>
          ¿Primera vez en Disney +? <a href="#">Suscribirse</a>
        </p>
      </Form>
    </Container>
  );
};
