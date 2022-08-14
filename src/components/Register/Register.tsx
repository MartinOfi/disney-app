import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTogglePasswordVisibility } from "hooks/useTogglePasswordVisibility";

export const Register = ({ handleChange, handleSubmit }) => {
  const { handlePasswordVisibility, passwordVisibility, rightIcon } =
    useTogglePasswordVisibility();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <h1>Vamos a registrarnos</h1>
        <input
          type="text"
          name="email"
          placeholder="Correo electrónico"
          onChange={handleChange}
        />
        <div>
          <input
            type={passwordVisibility ? "text" : "password"}
            name="password"
            placeholder="Contraseña"
            onChange={handleChange}
          />
          <FontAwesomeIcon
            cursor={"pointer"}
            icon={rightIcon}
            onClick={handlePasswordVisibility}
          />
        </div>
        <button type="submit">Registrar</button>

        <a href="/login">Iniciar Sesion</a>
      </form>
    </div>
  );
};
