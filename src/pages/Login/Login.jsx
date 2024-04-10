import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./Login.module.css"


const Login =()  => {
  return (
    <div >
      <p className={css.title}>Please log in</p>
      <div className={css.login}>  <LoginForm />
      <p className={css.textLink}>or <Link className={css.link} to="/register">register</Link> </p></div>
    
    </div>
  );
}
export default  Login