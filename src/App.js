import "./App.css"
import React from 'react';
import router from "./routes/routes";
import ContactsProvider from "./context/contacts/contactsProvider";
import { RouterProvider } from "react-router-dom";

  function App() {
        return (
        <ContactsProvider>
          <RouterProvider router={router} />;
        </ContactsProvider>
        )
        // 
        //     <Home>

        //     </Home>
        // </div>
}

export default App;
