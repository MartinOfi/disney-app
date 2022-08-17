import { ErrorMessage } from "formik";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FormFooter, FormStyled } from "./styles";
export const Register = ({ handleChange, handleSubmit }) => {
  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <FormStyled
        className="bg-secondary"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <h1 className="text-white">Registrarme</h1>
        <div className="form-outline my-1">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Correo"
            onChange={handleChange}
          />
        </div>
        <ErrorMessage name="email" component="p" className="h6" />
        <div className="form-outline my-1">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Contraseña"
            onChange={handleChange}
          />
        </div>

        <ErrorMessage name="password" component="p" className="h6" />
        <FormFooter>
          <button className="btn btn-primary btn-block my-1" type="submit">
            Enviar
          </button>
          <Link
            to={"/login"}
            className="btn btn-secondary btn-block my-1"
            type="button"
          >
            Iniciar Sesion
          </Link>
        </FormFooter>
      </FormStyled>
    </>
  );
};
