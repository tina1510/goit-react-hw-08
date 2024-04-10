import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";


 const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)

  return (
    <nav className={css.nav}>
      <NavLink className={css.navLink} to="/">
        Home
      </NavLink>
     {isLoggedIn &&     <NavLink className={css.navLink} to="/contacts">
          Contacts
        </NavLink>}
    
    
    </nav>
  );
}
export default  Navigation