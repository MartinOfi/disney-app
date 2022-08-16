import { Login } from "components";
import { useAuth } from "context/authContext";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import {
  errorLoginAlert,
  loadingLoginAlert,
  successLoginAlert,
} from "utils/alerts";
import { object, string } from "yup";

const initialValues = {
  email: "",
  password: "",
};

const RegisterPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const onSubmit = async ({ email, password }) => {
    loadingLoginAlert();
    try {
      await login(email, password);
      successLoginAlert(navigate("/"));
    } catch (error) {
      console.error(error);
      errorLoginAlert();
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
