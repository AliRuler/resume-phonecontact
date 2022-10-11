import React from "react";
import { ContactsReducer } from "./contacts.reducer";
import {getData} from "../../db";

export const ContactsContext = React.createContext({
    contacts:getData,
    dispatch:()=>{},
});

const ContactsProvider = ({children}) =>{
    const [contacts,dispatch] = React.useReducer(ContactsReducer,[]);
    return(
        <ContactsContext.Provider value={{
            contacts,
            dispatch,
        }}>
         {children}
        </ContactsContext.Provider>
    )
}

export default ContactsProvider;