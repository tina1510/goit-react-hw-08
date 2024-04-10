import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/contacts/operations";
import { FcApproval } from "react-icons/fc";
import css from "./ContactEdit.module.css"


const ContactEdit = ({ contactId, initialValue, onClose, field }) => {
 const [editedValue, setEditedValue] = useState(initialValue);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
      dispatch(updateContact({
          id: contactId,
          [field]: editedValue
      }));
    onClose();
  };

  return (
      <form onSubmit={handleSubmit} className={css.form}>
           <button type="submit" className={css.btn}><FcApproval className={css.icon} /></button>
      <input className={css.input}
        type="text"
        value={editedValue}
        onChange={(e) => setEditedValue(e.target.value)}
      />
     
    </form>
  );
};

export default ContactEdit;