import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts, updateContact } from "./operations";
import { logOut } from "../auth/operations";
const slice = createSlice({
    name: "contacts",
    initialState: {
      items: [],
      loading: false,
    error: false,

  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => { 
         state.error = false;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => { 
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.error = true;
        state.loading = false;

      })


      .addCase(addContact.pending, (state) => { 
         state.error = false;
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => { 
        state.items.push(action.payload);
        state.loading = false;
        
      })
      .addCase(addContact.rejected, (state) => {
        state.error = true;
        state.loading = false;

      })
      
      
       .addCase(deleteContact.pending, (state) => { 
         state.error = false;
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id )
        state.loading = false;
    
       })
      .addCase(deleteContact.rejected, (state) => {
              state.error = true;
        state.loading = false;
    
      })
 .addCase(updateContact.fulfilled, (state, action) => {
   const contactToUpdate = state.items.findIndex(item => item.id == action.payload.id)
   state.items[contactToUpdate] = action.payload;
   state.loading = false;
   console.log(contactToUpdate)
    
       })
      .addCase(updateContact.rejected, (state) => {
              state.error = true;
        state.loading = false;
    
      })



      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.error = false;
        state.loading = false;
  })
  
  
})


export default slice.reducer;
