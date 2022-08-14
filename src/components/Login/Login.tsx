import { ErrorMessage } from "formik";

export const Login = ({ handleChange, handleSubmit }) => {
  return (
    <div className="container bg-dark">
      <form
        className="d-flex flex-column justify-content-center align-items-center"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <h1 className="text-white">Iniciar Sesion</h1>
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
        <button type="submit">Enviar</button>

        <a href="/login">Iniciar Sesion</a>
      </form>
    </div>
  );
};
