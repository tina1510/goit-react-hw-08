import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import ContactForm from "../../components/ContactForm/ContactForm";
import Loader from "../../components/Loader/Loader";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import css from "./Contacts.module.css"




const Contacts =() => {

  const loadind = useSelector(selectLoading);
  const error = useSelector(selectError)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts())

  }, [dispatch])
  return (
    <>
          <div className={css.contactContainer }>
        <h1 className={css.title}>Phonebook</h1>
          {error && <ErrorMessage/>}
        <ContactForm />
        
        {loadind && <Loader/>}
  <SearchBox/>
        <ContactList />

</div>


    </>
  )
}
export default Contacts;

