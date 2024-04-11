import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";

const Layout =({children}) => {
  return (
    <div className={css.headerContainer}>
      <AppBar />
   {children}
    </div>
  );
}
export default Layout;