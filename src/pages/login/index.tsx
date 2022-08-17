import { Login } from "components";
import { useAuth } from "context/authContext";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import {
  errorLoginAlert,
  loadingLoginAlert,
  successLoginAlert,
} from "utils/alerts";
import { FireBaseErrors } from "utils/constants";
import { object, string } from "yup";

const initialValues = {
  email: "",
  password: "",
};

const RegisterPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const onSubmit = async ({ email, password }, { setFieldError }) => {
    loadingLoginAlert();
    try {
      await login(email, password);
      successLoginAlert(navigate("/"));
    } catch ({ code }) {
      console.log(code);

      errorLoginAlert();
      const {
        internalError,
        invalidEmail,
        invalidPassword,
        mailAlredyExists,
        userNotFound,
      } = FireBaseErrors;
      code === invalidEmail && setFieldError("email", "Correo invalido");
      code === invalidPassword &&
        setFieldError("password", "Contraseña invalida");
      code === mailAlredyExists &&
        setFieldError("email", "Correo ya registrado");
      code === internalError && setFieldError("email", "Error interno");
      code === userNotFound &&
        setFieldError("password", "Usuario no encontrado");
    }
  };
  const validationSchema = object().shape({
    email: string().trim().required("El correo es requerido"),
    password: string().required("Contraseña requerida").min(6),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, handleChange }) => {
        return (
          <Login handleSubmit={handleSubmit} handleChange={handleChange} />
        );
      }}
    </Formik>
  );
};
export default RegisterPage;
