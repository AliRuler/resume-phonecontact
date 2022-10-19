import "./App.css"
import React from 'react';
import router from "./routes/routes";
// import ContactsProvider from "./context/contacts/contactsProvider";
import { RouterProvider } from "react-router-dom";
import store, {persistor} from "./toolkit/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

  function App() {
        return (
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              {/* <ContactsProvider> */}
                <RouterProvider router={router} />;
              {/* </ContactsProvider> */}
            </PersistGate>
          </Provider>
        )
}

export default App;
