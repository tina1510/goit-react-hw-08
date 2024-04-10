import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import css from "./LoginForm.module.css";
import { logIn } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field className={css.input} type="email" name="email"  />
        </label>
        <label className={css.label}>
          Password
          <Field  className={css.input} type="password" name="password"  />
        </label>
        <button  className={css.btn} type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
export default LoginForm;