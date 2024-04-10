import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./Register.module.css"

const Register= () => {
  return (
    <div>
       <p className={css.title}>Register your account</p>
      <RegistrationForm />
    </div>
  );
}
export default Register;