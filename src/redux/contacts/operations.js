import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// axios.defaults.baseURL= "https://connections-api.herokuapp.com"
export const fetchContacts = createAsyncThunk('contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
             const response = await axios.get('https://connections-api.herokuapp.com/contacts');
   
    return response.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
   

});


export const addContact = createAsyncThunk('contacts/addContact',
    async (newContact, thunkAPI) => {

        try {
             const response = await axios.post('https://connections-api.herokuapp.com/contacts', newContact);
   
    return response.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue({ message: error.message })
        }
   

});
export const deleteContact = createAsyncThunk('contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`https://connections-api.herokuapp.com/contacts/${contactId}`);
            return response.data;
        }
        catch (error) {
                 return thunkAPI.rejectWithValue(error)
        }
    }
)


export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (update, thunkAPI) => {
    try {
        const response = await axios.patch(`https://connections-api.herokuapp.com/contacts/${update.id}`, {
            name: update.name,
            number: update.number
        });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ message: error.message });
    }
  }
);