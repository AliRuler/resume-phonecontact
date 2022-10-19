import { createSlice } from "@reduxjs/toolkit";
import {getData} from "../../db";

export const contactsSlice = createSlice({ 
    name: "contacts",
    initialState:{
        contacts:getData
    },
    reducers:{
        contactsActionAdd: (state,action) =>{
            state.contacts.push(action.payload);
        },
        contactsActionEdit: (state,action) =>{
            state.contacts[action.payload.id][action.payload.key] = action.payload.value;
        },
        contactsActionRemove: (state,action) =>{
            state.contacts = state.contacts.filter(item => item.name !== action.payload);
            // state.splie(action.payload);
        }
    }
});

export const {
    contactsActionAdd,
    contactsActionEdit,
    contactsActionRemove
  } = contactsSlice.actions;

  export default contactsSlice.reducer;