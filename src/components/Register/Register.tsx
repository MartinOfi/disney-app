import { ErrorMessage } from "formik";

export const Register = ({ handleChange, handleSubmit }) => {
  return (
    <div
      className="container bg-dark
    "
    >
      <form
        className="d-flex flex-column justify-content-center align-items-center"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <h1 className="text-white">Vamos a registrarnos</h1>
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          onChange={handleChange}
        />
        <ErrorMessage name="email" component="small" className="text-danger" />
        <div>
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Registrar</button>

        <a href="/login">Iniciar Sesion</a>
      </form>
    </div>
  );
};
