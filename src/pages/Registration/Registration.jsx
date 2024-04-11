import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./Registration.module.css"

const Registration= () => {
  return (
    <div>
       <p className={css.title}>Register your account</p>
      <RegistrationForm />
    </div>
  );
}
export default Registration;