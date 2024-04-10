import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={css.authNav}>
      <NavLink className={css.authLik} to="/register">
        Register
      </NavLink>
      <NavLink className={css.authLik} to="/login">
        Log In
      </NavLink>
    </div>
  );
}