import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";


 const UserMenu =() => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.menu}>
      <p className={css.username}>Welcome, {user.name} </p>
      <button className={css.btnLogOut} type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
}
export default UserMenu;