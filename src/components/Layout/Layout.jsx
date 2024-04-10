import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";

const Layout =() => {
  return (
    <div className={css.headerContainer}>
      <AppBar />
   
    </div>
  );
}
export default Layout;