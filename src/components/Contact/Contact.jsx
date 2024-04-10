import css from "./Contact.module.css"
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { useState } from "react";
import ContactEdit from "../ContactEdit/ContactEdit";
import toast,{ Toaster } from 'react-hot-toast';


const Contact = ({ contact: { name, number, id } }) => {
    const [isUpdateName, setIsUpdateName] = useState(false);
    const [isUpdateNumber, setIsUpdateNumber] = useState(false);

    const dispatch = useDispatch();

      const handleDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success("Contact deleted!");
      })
      .catch(() => {
        toast.error("This is an error!");
      });
  };

    return (
        <div className={css.contactContainer}>
            <div className={css.contactText}>
                {isUpdateName ? <ContactEdit
                    initialValue={name}
                    contactId={id}
                    field="name"
                    onClose={() => setIsUpdateName(false)} /> : <p className={css.text} onClick={() => setIsUpdateName(true)}> <FaUser />{name}</p>}
                {isUpdateNumber ? <ContactEdit
                    initialValue={number}
                    contactId={id}
                    field="number"
                    onClose={() => setIsUpdateNumber(false)} /> : <p className={css.text} onClick={() => setIsUpdateNumber(true)}> <FaPhoneAlt />
{ number}</p> }
        
            </div>
            {!isUpdateName && !isUpdateNumber && (
                 <button className={css.btnDel} onClick={handleDelete}>Delete</button>
            )}
         <Toaster></Toaster>
        </div>
            
  
)
}


export default Contact

  