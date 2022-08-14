import { Login } from "components/Login/Login";
import { useAuth } from "context/authContext";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import {
  errorRegisterAlert,
  loadingRegisterAlert,
  successRegisterAlert,
} from "utils/constants";
import { object, string } from "yup";

const initialValues = {
  email: "",
  password: "",
};
const RegisterPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const onSubmit = async ({ email, password }) => {
    loadingRegisterAlert();
    try {
      await login(email, password);
    } catch (error) {
      console.log(error);
      errorRegisterAlert();
    }
  };
  const validationSchema = object().shape({
    email: string().trim().required("El correo es requerido"),
    password: string().required("Contraseña del documento requerido").min(6),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, handleChange, errors }) => {
        console.log(errors);

        return (
          <Login handleSubmit={handleSubmit} handleChange={handleChange} />
        );
      }}
    </Formik>
  );
};
export default RegisterPage;
