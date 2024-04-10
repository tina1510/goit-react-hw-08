
import { MdContactPhone } from "react-icons/md";
import css from "./Home.module.css"

 function Home() {
  return (
    <div className={css.home} >
   
   <MdContactPhone className={css.icon} />
      <p className={css.text}>
     In today's world, contacts have become an extremely important part of our everyday life. We use them to communicate with family and friends, for work and business. Here you can save names, e-mail addresses, phone numbers.
      </p>
    </div>
  );
}
export default Home;