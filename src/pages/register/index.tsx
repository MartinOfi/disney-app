import { Register } from "components";
import { useAuth } from "context/authContext";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import {
  errorRegisterAlert,
  loadingRegisterAlert,
  successRegisterAlert,
} from "utils/alerts";
import { FireBaseErrors } from "utils/constants";
import { object, string } from "yup";

const initialValues = {
  email: "",
  password: "",
};
const RegisterPage = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const onSubmit = async ({ email, password }, { setFieldError }) => {
    loadingRegisterAlert();
    try {
      await signup(email, password);
      successRegisterAlert(navigate("/"));
    } catch ({ code }) {
      errorRegisterAlert();
      const { internalError, invalidEmail, invalidPassword, mailAlredyExists } =
        FireBaseErrors;
      code === invalidEmail && setFieldError("email", "Correo invalido");
      code === invalidPassword &&
        setFieldError("password", "Contraseña invalida");
      code === mailAlredyExists &&
        setFieldError("email", "Correo ya registrado");
      code === internalError && setFieldError("email", "Error interno");
    }
  };
  const validationSchema = object().shape({
    email: string().trim().required("El correo es requerido"),
    password: string()
      .required("Contraseña del documento requerido")
      .min(6, "La contraseña debe tener al menos 6 caracteres"),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, handleChange }) => {
        return (
          <Register handleSubmit={handleSubmit} handleChange={handleChange} />
        );
      }}
    </Formik>
  );
};
export default RegisterPage;
