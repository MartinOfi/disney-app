import { Register } from "components/Register/Register";
import { useAuth } from "context/authContext";
import { Formik } from "formik";

const RegisterPage = () => {
  const { signup } = useAuth();

  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = async ({ email, password }) => {
    try {
      const res = await signup(email, password);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit, handleChange }) => (
        <Register handleSubmit={handleSubmit} handleChange={handleChange} />
      )}
    </Formik>
  );
};
export default RegisterPage;
